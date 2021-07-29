module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  // This fixes an issue with typescript projects
  // see: https://stackoverflow.com/questions/63118405/how-to-fix-eslintrc-the-file-does-not-match-your-project-config
  ignorePatterns: ['.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'max-len': 'off',
    'consistent-return': 0,
    complexity: ['error', 5],
    'no-empty-function': ['error', { allow: ['constructors'] }],
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'lines-between-class-members': 'off',
    'class-methods-use-this': 'off',
    'import/newline-after-import': 'off',
    'indent': 'off',
    'import/order': 'off',
    'no-else-return': 'off',
    'object-curly-spacing': 'off',
    'arrow-body-style': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/unbound': 'off',
    'implicit-arrow-linebreak': 'off'
  }
};
