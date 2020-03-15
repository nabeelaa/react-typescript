module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'react/prefer-stateless-function': 'warn',
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: false,
      },
    ],
    'react/sort-comp': [
      1,
      {
        order: ['static-methods', 'lifecycle', 'everything-else', 'rendering'],
        groups: {
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
    'react/require-default-props': 0,
    'jsx-a11y/href-no-hash': 'off',
    'react/jsx-boolean-value': ['warn', 'never'],
    'react/jsx-closing-bracket-location': ['warn', 'after-props'],
    'react/jsx-curly-spacing': ['warn', 'never'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js', '.ts', '.tsx'] }],
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],
    'react/jsx-handler-names': [
      'warn',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'react/jsx-indent': ['warn', 2],
    'react/jsx-key': 'error',
    'react/jsx-wrap-multilines': ['warn'],
    'react/jsx-indent-props': 0,
    'no-trailing-spaces': [2, { skipBlankLines: true }],
    'prefer-template': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'babel/object-curly-spacing': 0,
  },
};
