const pkg = require('./package');

module.exports = {
  'plugins': [
    'react',
    'react-hooks',
  ],
  'settings': {
    'react': {
      'version': pkg.dependencies.react,
    },
  },
  'extends': [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:import/warnings',
      'plugin:import/errors',
  ],
  'globals': {
      'Atomics': 'readonly',
      'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
      'ecmaFeatures': {
          'jsx': true
      },
      'ecmaVersion': 2018,
      'sourceType': 'module'
  },
  'rules': {
    'indent': ['error', 2],
    'no-prototype-builtins': 'off',
    'no-multi-spaces': ['error'],
    'require-atomic-updates': 'off',
    'semi': ['error', 'always'],
    'no-async-promise-executor': 'off',
    'quotes': ['error', 'single'],
    'react/jsx-no-bind': ['warn', {
      'ignoreRefs': false,
      'allowArrowFunctions': true,
      'allowBind': false,
    }],
    'react/jsx-curly-brace-presence': ['error', {
      'props': 'always',
      'children': 'ignore',
    }],
    'react/jsx-sort-props': ['error', {
      'callbacksLast': false,
      'shorthandFirst': true,
      'ignoreCase': true,
      'noSortAlphabetically': false,
      'reservedFirst': false,
    }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
};