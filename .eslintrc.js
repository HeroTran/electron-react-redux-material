module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  env: {
    browser: true,
    node: true
  },
  plugins: ['import', 'promise', 'compat', 'react'],
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  rules: {
    "import/no-named-as-default": 0,
    "import/no-cycle":"off",
    "import/no-extraneous-dependencies": "off",
    'arrow-parens': 'off',
    'compat/compat': 'off',
    "no-useless-escape": "off",
    'consistent-return': 'off',
    'comma-dangle': 'off',
    "no-case-declarations": "off",
    'generator-star-spacing': 'off',
    'import/no-unresolved': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    'jsx-a11y/click-events-have-key-events': 'off',
    'no-console': [
      'error',
      {
        allow: ['info', 'error', 'warn']
      }
    ],
    'no-use-before-define': 'off',
    'no-multi-assign': 'off',
    'prettier/prettier': ['error', { singleQuote: true }],
    'promise/param-names': 'error',
    'promise/always-return': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'react/sort-comp': [
      'error',
      {
        order: [
          'type-annotations',
          'static-methods',
          'lifecycle',
          'everything-else',
          'render'
        ]
      }
    ],
    "react/destructuring-assignment": "off",
    "react/forbid-prop-types": 'off', 
    'react/jsx-no-bind': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    "react/jsx-props-no-spreading": "off",
    'react/prefer-stateless-function': 'off',
    strict: 'off',
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'no-shadow': 'off',
    'react/prop-types': 'off',
    'import/no-dynamic-require': 'off',
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^(theme|props|state|ownProps|dispatch|getState)|_',
        varsIgnorePattern: '^(variables|mixins|args|log)'
      }
    ]
  }
};
