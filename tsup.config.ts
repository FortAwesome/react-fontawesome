import { defineConfig, type Options } from 'tsup'

const defaultConfig: Options = {
  format: ['cjs', 'esm'],
  dts: true,
  bundle: true,
  clean: true,
  minify: false,
  treeshake: true,
}

export default defineConfig([
  // Build config for React Fontawesome library
  {
    ...defaultConfig,
    name: 'react-fontawesome',
    entry: ['src/index.ts'],
    outDir: 'dist',
  },
  // Build config for React Server Components
  {
    ...defaultConfig,
    name: 'react-fontawesome-rsc',
    entry: ['src/components/rsc/*.tsx'],
    outDir: 'dist/components/rsc',
    bundle: false,
    treeshake: false,
  },
])
