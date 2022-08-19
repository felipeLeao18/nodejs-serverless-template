module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true
  },
  extends: 'standard-with-typescript',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    'no-console': 'warn'
  }
}
