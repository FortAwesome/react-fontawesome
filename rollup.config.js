import resolve from 'rollup-plugin-node-resolve'
import commonJs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

const name = 'react-fontawesome'
const globals = {
  '@fortawesome/fontawesome-svg-core': 'FontAwesome',
  react: 'React',
  'prop-types': 'PropTypes'
}

export default {
  external: ['@fortawesome/fontawesome-svg-core', 'prop-types', 'react'],
  input: 'src/index.js',
  output: [
    {
      name,
      globals,
      format: 'umd',
      file: 'index.js'
    },
    {
      name,
      globals,
      format: 'es',
      file: 'index.es.js'
    }
  ],
  plugins: [
    resolve({
      jsnext: true,
      main: true
    }),
    commonJs(),
    babel({
      babelrc: false,
      presets: [
        [
          'env',
          {
            debug: true,
            targets: { browsers: ['> 1%', 'last 2 versions', 'ie > 9'] },
            modules: false
          }
        ],
        'stage-3',
        'react'
      ],
      plugins: ['external-helpers'],
      exclude: 'node_modules/**'
    })
  ]
}
