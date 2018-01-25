module.exports = {
  "parser": "babel-eslint",
  "extends": "standard",
  "plugins": [
    "react",
    "jest"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "react/jsx-uses-vars": 1,
    "react/jsx-uses-react": 1
  },
  "env": {
    "jest": true
  }
};
