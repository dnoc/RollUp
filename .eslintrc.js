module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    'rules': {
        'no-prototype-builtins': 'off',
        'require-atomic-updates': 'off',
        'no-async-promise-executor': 'off',
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
        'root/redux-actions-return-objects': ['error', {
          'whitelist': reduxActionsReturnObjectsWhitelist,
        }],
        'root/valid-test-filenames': [
          'error',
          {
            testSuffix: '-test.js',
            whitelist: [
              'test/setup-tests.js',
              'test/support/integration-helper/deep-links.js',
            ],
          },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
      },
};