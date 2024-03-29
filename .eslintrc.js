module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: 'standard-with-typescript',
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  ignorePatterns: ['dist', 'models/index.ts', 'node_modules', 'seeders', 'migrations'],
  rules: {
    indent: ['error', 2],
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-dupe-else-if': 'error',
    'no-debugger': 'error',
    'no-const-assign': 'error',
    'no-dupe-args': 'error',
    'no-func-assign': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': 'error',
    'valid-typeof': 'error',
    camelcase: ['error', { properties: 'always', ignoreDestructuring: true }],
    complexity: ['error', 20],
    curly: 'error',
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    eqeqeq: ['error', 'smart'],
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'max-depth': ['error', 5],
    'no-confusing-arrow': 'error',
    'no-console': 'error',
    'no-empty': 'error',
    'no-empty-function': 'error',
    'no-param-reassign': 'error',
    'no-redeclare': 'error',
    'no-return-assign': 'error',
    'no-undef-init': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'prefer-template': 'error',
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'block-spacing': 'error',
    'brace-style': 'error',
    'comma-dangle': 'error',
    'comma-spacing': ['error', { before: false, after: true }],
    'dot-location': ['error', 'property'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', { beforeColon: false }],
    'keyword-spacing': ['error', { before: true }],
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'no-whitespace-before-property': 'error',
    semi: ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      }
    ],
    quotes: ['error', 'single'],
    'template-curly-spacing': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    // this rules will be disabled and will be enabled in the future
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
}
