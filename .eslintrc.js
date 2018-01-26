module.exports = {
  parser: 'babel-eslint',
  extends: 'standard',
  plugins: ['react', 'jest'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'space-before-function-paren': 0,
    'react/jsx-uses-vars': 1,
    'react/jsx-uses-react': 1
  },
  env: {
    jest: true
  }
}
