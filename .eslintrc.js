
module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    browser: true
  },
  extends: [
    'airbnb-base',
  ],
  plugins: [
    'eslint-plugin-html',
    'html',

  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "linebreak-style": 0,
  },
};
