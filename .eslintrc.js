module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'react-hooks',
  ],
  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'double'],
    'semi': ['error', 'always'],
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/explicit-function-return-type': 'error',
    'react/prop-types': 'error',
    'import/order': ['error', {
      'groups': [['builtin', 'external', 'internal']],
      'newlines-between': 'always',
    }],
    'jsx-a11y/anchor-is-valid': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
