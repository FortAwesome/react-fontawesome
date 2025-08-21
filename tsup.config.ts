import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'react-fontawesome',
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  bundle: true,
  clean: true,
  minify: false,
  treeshake: true,
  outDir: 'dist',
})
