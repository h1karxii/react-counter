module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-sass-guidelines',
    'stylelint-config-css-modules',
    'stylelint-config-recess-order',
    'stylelint-config-styled-components',
  ],
  plugins: ['stylelint-scss', 'stylelint-order', 'stylelint-prettier'],
  rules: {
    'no-descending-specificity': null,
    'no-empty-source': null,
    'at-rule-no-unknown': null,
    'max-nesting-depth': 5,
    'selector-max-compound-selectors': 5,
    'scss/at-rule-no-unknown': true,
    'scss/operator-no-unspaced': null,
    'scss/operator-no-newline-after': null,
    'order/properties-alphabetical-order': null,
    'selector-class-pattern': [
      '^[a-z0-9-]+(__[a-z0-9-]+)?(--[a-z0-9-]+)?$',
      { message: 'Must follow BEM rules.' },
    ],
    'prettier/prettier': [
      true,
      {
        trailingComma: 'es5',
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: true,
        bracketSpacing: true,
      },
    ],
  },
  overrides: [
    {
      files: [
        '**/*.js',
        '**/*.cjs',
        '**/*.mjs',
        '**/*.jsx',
        '**/*.ts',
        '**/*.tsx',
      ],
      customSyntax: 'postcss-styled-syntax',
    },
  ],
}
