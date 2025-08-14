import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'react-fontawesome',
  entry: [
    'src',
    '!src/**/*.d.ts',
    '!src/**/*.test.tsx',
    '!src/**/*.test.ts',
    '!src/components/__fixtures__',
  ],
  format: ['cjs', 'esm'],
  dts: true,
  bundle: false,
  clean: true,
  minify: false,
  treeshake: true,
  outDir: 'dist',
})
