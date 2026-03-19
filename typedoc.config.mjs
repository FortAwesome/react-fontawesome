import { JSX } from 'typedoc'

/**
 * Custom TypeDoc plugin to insert FontAwesome into the generated documentation.
 * @type {(app: import('typedoc').Application) => void}
 */
function customPlugin(app) {
  app.renderer.hooks.on('head.end', (_context) => {
    return JSX.createElement('link', {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@7.2.0/css/fontawesome.min.css',
    })
  })

  app.renderer.hooks.on('body.end', (_context) => {
    return JSX.createElement('script', {
      src: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@7.2.0/js/all.min.js',
      defer: true,
    })
  })
}

/** @type {Partial<import('typedoc').TypeDocOptions> & Partial<import('typedoc-plugin-merge-modules').Config> & import('typedoc-plugin-umami-analytics').Config} */
const config = {
  commentStyle: 'all',
  customFooterHtml:
    'Built with <i color="#f31e1e" class="fa-solid fa-heart" aria-label="love"></i> by the <a href="https://fontawesome.com/">FontAwesome Team</a> and <a href="https://github.com/FortAwesome/react-fontawesome/graphs/contributors">community contributors</a>.',
  entryPoints: ['./src/index.ts', './src/components/rsc/*.tsx'],
  entryPointStrategy: 'resolve',
  excludeExternals: true,
  excludeNotDocumented: false,
  // Ensure references from @fortawesome packages are not considered external and therefore excluded, e.g. svg-core & common-types (we want them included)
  externalPattern: ['**/node_modules/!(@fortawesome)/**'],
  gitRemote: 'origin',
  gitRevision: 'main',
  favicon: './docs/src/assets/favicon.ico',
  hideGenerator: true,
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
  projectDocuments: ['./CHANGELOG.md'],
  readme: './docs/src/API-Reference-Readme.md',
  router: 'structure',
  sort: [
    'required-first',
    'kind',
    'instance-first',
    'alphabetical-ignoring-documents',
  ],
  tsconfig: './tsconfig.json',
  theme: 'typedoc-github-theme',
  umamiScriptURL: 'https://analytics.charlesharwood.dev/script.js',
  umamiWebsiteID: 'd0b01ae4-f0b1-4f6c-8967-6a9c1504cd49',
  useFirstParagraphOfCommentAsSummary: true,
}

export default config
