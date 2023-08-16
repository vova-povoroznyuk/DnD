module.exports = {
  customSyntax: 'postcss-html',
  extends: ['stylelint-config-standard-scss', 'stylelint-config-standard-vue'],
  rules: {
    'selector-class-pattern': null,
    'font-family-no-missing-generic-family-keyword': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'color-function-notation': 'legacy',
    'media-feature-range-notation': null,
    'at-rule-empty-line-before': null,
    'no-descending-specificity': null,
  },
}
