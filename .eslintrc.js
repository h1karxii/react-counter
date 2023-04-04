module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    // 'eslint:recommended',
    // 'plugin:react/recommended',
    'react-app',
    'react-app/jest',
    'airbnb',
    'airbnb/hooks',
    'prettier',
  ],
  plugins: [
    'react',
    // eslint-plugin-import & eslint-plugin-jsx-a11y are dependencies of eslint-config-airbnb,
    // and you have to install then by yourself
    'import',
    'jsx-a11y',
    'prettier',
  ],
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: [
        ['babel-preset-react-app', false],
        'babel-preset-react-app/prod',
      ],
    },
  },
  rules: {
    // the react/jsx-uses-react and react/react-in-jsx-scope rules are no longer necessary after react 17.
    // https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    // https://zhuanlan.zhihu.com/p/372100027
    'no-unused-vars': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-bind': 'off',
    'react/prefer-stateless-function': 'off',
    'react/no-did-update-set-state': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/no-import-module-exports': [
      'error',
      {
        exceptions: ['./src/index.js', './src/redux/store.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        tabWidth: 2,
        semi: false,
        useTabs: false,
        singleQuote: true,
        bracketSpacing: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['assets', './src/assets'],
          ['styles', './src/styles'],
          ['components', './src/components'],
          ['containers', './src/containers'],
          ['pages', './src/pages'],
          ['configs', './src/configs'],
          ['reduxs', './src/reduxs'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
}
