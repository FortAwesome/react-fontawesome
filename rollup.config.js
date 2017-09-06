import resolve from 'rollup-plugin-node-resolve'
import commonJs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'

export default {
  external: [
    '@fortawesome/fontawesome',
    'prop-types',
    'react'
  ],
  globals: {
    '@fortawesome/fontawesome': 'FontAwesome'
  },
  input: 'src/index.js',
  name: 'react-fontawesome',
  output: {
    format: 'umd',
    file: 'index.js'
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true
    }),
    commonJs(),
    buble()
  ]
}
