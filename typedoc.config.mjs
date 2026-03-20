import { cp, mkdir, readdir } from 'node:fs/promises'
import path from 'node:path'
import fs from 'node:fs'
import { JSX } from 'typedoc'

/**
 * Custom TypeDoc plugin.
 * @param {import('typedoc').Application} app
 */
function customPlugin(app) {
  /**
   * Remove `.html` from internal links while preserving query/hash fragments.
   * External links are left untouched.
   * @param {string} href
   */
  function toExtensionlessHref(href, ignoreAbsolute = true) {
    // Ignore absolute/protocol links and special schemes.
    if (
      ignoreAbsolute &&
      (/^(?:[a-z][a-z\d+.-]*:)?\/\//i.test(href) ||
        /^[a-z][a-z\d+.-]*:/i.test(href))
    ) {
      return href
    }

    const [withoutHash, hash = ''] = href.split('#', 2)
    const [pathname, query = ''] = withoutHash.split('?', 2)

    let nextPath = pathname
    if (nextPath.endsWith('/index.html')) {
      nextPath = nextPath.slice(0, -'index.html'.length)
    } else if (nextPath === 'index.html') {
      nextPath = './'
    } else if (nextPath.endsWith('.html')) {
      nextPath = nextPath.slice(0, -'.html'.length)
    }

    const rebuilt = `${nextPath}${query ? `?${query}` : ''}`
    return `${rebuilt}${hash ? `#${hash}` : ''}`
  }

  // Insert FontAwesome CSS into the head of the generated documentation
  app.renderer.hooks.on('head.end', (_context) => {
    return JSX.createElement('link', {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@7.2.0/css/fontawesome.min.css',
    })
  })

  // Insert FontAwesome JS into the body of the generated documentation
  app.renderer.hooks.on('body.end', (_context) => {
    return JSX.createElement('script', {
      src: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@7.2.0/js/all.min.js',
      defer: true,
    })
  })

  // Rewrite generated internal links to extensionless paths.
  app.renderer.on('endPage', (page) => {
    if (!page.contents) {
      return
    }

    page.contents = page.contents.replaceAll(
      /href="([^"]+)"/g,
      (_match, href) => {
        return `href="${toExtensionlessHref(href)}"`
      },
    )
  })

  app.renderer.postRenderAsyncJobs.push(async (event) => {
    // Create `name/index.html` aliases for root-level `name.html` pages.
    const rootEntries = await readdir(event.outputDirectory, {
      withFileTypes: true,
    })
    const rootHtmlFiles = rootEntries.filter(
      (entry) =>
        entry.isFile() &&
        entry.name.endsWith('.html') &&
        entry.name !== 'index.html' &&
        entry.name !== '404.html',
    )

    await Promise.all(
      rootHtmlFiles.map(async (entry) => {
        const fileName = entry.name
        const basename = fileName.slice(0, -'.html'.length)
        const source = path.join(event.outputDirectory, fileName)
        const targetDir = path.join(event.outputDirectory, basename)
        const target = path.join(targetDir, 'index.html')

        await mkdir(targetDir, { recursive: true })
        await cp(source, target)
      }),
    )

    // Rewrite the `.html` extension from the generated `sitemap.xml` as well.
    const sitemapPath = path.join(event.outputDirectory, 'sitemap.xml')
    try {
      const sitemapContents = fs.readFileSync(sitemapPath).toString('utf-8')
      const rewritten = sitemapContents
        .toString()
        .replaceAll(/<loc>([^<]+)<\/loc>/g, (_match, loc) => {
          return `<loc>${toExtensionlessHref(loc, false)}</loc>`
        })
      await fs.writeFile(sitemapPath, rewritten, () => {})
    } catch (err) {
      // If the sitemap doesn't exist, ignore the error and continue.
      if (err.code !== 'ENOENT') {
        throw err
      }
    }
  })
}

/** @type {Partial<import('typedoc').TypeDocOptions> & Partial<import('typedoc-plugin-merge-modules').Config> & import('typedoc-plugin-umami-analytics').Config} */
const config = {
  cleanOutputDir: true,
  commentStyle: 'all',
  customFooterHtml:
    'Built with <i color="#f31e1e" class="fa-solid fa-heart" aria-label="love"></i> by the <a href="https://fontawesome.com/">FontAwesome Team</a> and <a href="https://github.com/FortAwesome/react-fontawesome/graphs/contributors">community contributors</a>.',
  entryPoints: ['./src/index.ts', './src/components/rsc/*.tsx'],
  // entryPointStrategy: 'resolve',
  excludeExternals: true,
  excludeNotDocumented: false,
  // Ensure references from @fortawesome packages are not considered external and therefore excluded, e.g. svg-core & common-types (we want them included)
  externalPattern: ['**/node_modules/!(@fortawesome)/**'],
  githubPages: true,
  gitRemote: 'origin',
  gitRevision: 'main',
  favicon: './docs/src/assets/favicon.ico',
  hideGenerator: true,
  hostedBaseUrl: 'https://fortawesome.github.io/react-fontawesome/',
  markdownLinkExternal: true,
  mergeModulesMergeMode: 'module',
  mergeModulesRenameDefaults: true,
  name: 'FontAwesome React API Reference',
  navigationLinks: {
    'react-fontawesome on GitHub':
      'https://github.com/FortAwesome/react-fontawesome',
    'FontAwesome Docs': 'https://docs.fontawesome.com/web/use-with/react',
  },
  out: './docs/dist',
  plugin: [
    'typedoc-github-theme',
    'typedoc-plugin-dt-links',
    'typedoc-plugin-mdn-links',
    'typedoc-plugin-merge-modules',
    'typedoc-plugin-missing-exports',
    'typedoc-plugin-umami-analytics',
    customPlugin,
  ],
  projectDocuments: [
    './CHANGELOG.md',
    './CONTRIBUTING.md',
    './CODE_OF_CONDUCT.md',
  ],
  readme: './docs/src/API-Reference-Readme.md',
  router: 'structure-dir',
  sort: [
    'required-first',
    'kind',
    'instance-first',
    'alphabetical-ignoring-documents',
  ],
  sourceLinkExternal: true,
  theme: 'typedoc-github-theme',
  tsconfig: './tsconfig.json',
  umamiScriptURL: 'https://analytics.charlesharwood.dev/script.js',
  umamiWebsiteID: 'd0b01ae4-f0b1-4f6c-8967-6a9c1504cd49',
  useFirstParagraphOfCommentAsSummary: true,
  visibilityFilters: {},
}

export default config
