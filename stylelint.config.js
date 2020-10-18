module.exports = {
    'extends': 'stylelint-config-standard',
    'ignoreFiles': ['**/*.js', '**/*.jsx'],
    'rules': {
        'at-rule-no-unknown': [ true, {
            'ignoreAtRules': [
                'extends',
                'ignores'
            ]
        }],
        'indentation': 4,
        'number-leading-zero': null,
        'unit-whitelist': ['em', 'rem', 's', 'px', 'deg', 'all', 'vh', '%'],
        'no-eol-whitespace': [true, { 'ignore': 'empty-lines' }],
        'selector-list-comma-newline-after': 'never-multi-line',
        'declaration-block-trailing-semicolon': 'always',
        'no-missing-end-of-source-newline': true,
        'selector-pseudo-class-no-unknown': [ true, {
            ignorePseudoClasses: ['global']
        }],
        'no-descending-specificity': null
    }
};