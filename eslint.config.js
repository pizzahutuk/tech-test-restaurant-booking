const tsParser = require('@typescript-eslint/parser')

module.exports = [
  {
    languageOptions: {
      parserOptions: { project: ['./tsconfig.json'] },
      parser: tsParser
    },
    files: ['src/**/*.ts', 'src/**/*.spec.ts'],
    rules: {
      semi: ['error', 'never'],
      indent: ['error', 2]
    },
    ignores: []
  }
]
