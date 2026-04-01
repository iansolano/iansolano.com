/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 2024,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
  ],

  plugins: ['@typescript-eslint', 'prettier'],

  rules: {
    // React rules handled by Next.js automatically
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',

    // TS customizations
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // Prettier
    'prettier/prettier': [
      'warn',
      {
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 80,
        jsxSingleQuote: true,
      },
    ],
  },

  settings: {
    react: { version: 'detect' },
  },

  env: {
    browser: true,
    es2024: true,
    node: true,
  },

  ignorePatterns: ['node_modules/', '.next/', 'out/', '*.json', '*.md'],
};
