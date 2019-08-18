module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'airbnb-typescript/base'
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module'
  },
  plugins: ['@typescript-eslint', 'jest'],
  rules: {
    'import/prefer-default-export': 'off',
    'comma-dangle': ['error', 'never'],
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    'require-await': 'error',
    'newline-after-var': 'warn',
    'no-await-in-loop': 'off',
    'radix': 'off',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'newline-per-chained-call': 'off',
    'no-param-reassign': 'off',
    'max-len': ['warn', { code: 100 }]
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@shared', './src/shared']
        ],
        extensions: ['.ts', '.js', '.jsx', '.json']
      }
    }
  },
  env: {
    'jest/globals': true
  }
};