/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    '@repo/eslint-config/next.js',
    'eslint:recommended',
    'next/core-web-vitals',
    'prettier',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
  },
  '': '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'require-jsdoc': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-console': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/no-unknown-property': 'error',
    'eol-last': ['error', 'always'],
    'no-duplicate-imports': 'error',
    'react/no-children-prop': 'off',
  },
};
