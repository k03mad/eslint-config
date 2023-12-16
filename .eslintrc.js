module.exports = {
    env: {
        node: true,
        es2021: true,
    },

    extends: [
        'eslint:all',
        'plugin:@stylistic/all-extends',
        'plugin:import/errors',
        'plugin:jsdoc/recommended-error',
        'plugin:n/recommended',
        'plugin:unicorn/all'
    ],

    parserOptions: {
        sourceType: 'module',
    },

    plugins: [
        '@stylistic',
        'jsdoc',
        'import',
        'n',
        'simple-import-sort',
        'sort-destructure-keys',
        'unicorn'
    ],

    rules: {
        // import
        'import/extensions': ['error', {ignorePackages: true, pattern: {js: 'always'}}],
        'import/first': 'error',
        'import/namespace': ['error', {allowComputed: true}],
        'import/newline-after-import': 'error',
        // 'import/no-unresolved': ['error', {ignore: ['^node:', '^chalk$', '^p-queue$', '^got$']}],

        // sort-destructure-keys
        'sort-destructure-keys/sort-destructure-keys': 'error',

        // simple-import-sort
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': 'error',

        // n
        'n/exports-style': 'error',
        'n/prefer-global/buffer': 'error',
        'n/prefer-global/console': 'error',
        'n/prefer-global/process': 'error',
        'n/prefer-global/text-decoder': 'error',
        'n/prefer-global/text-encoder': 'error',
        'n/prefer-global/url-search-params': 'error',
        'n/prefer-global/url': 'error',
        'n/prefer-promises/dns': 'error',
        'n/prefer-promises/fs': 'error',

        // n off
        'n/no-missing-import': 'off',
        'n/no-process-exit': 'off',

        // unicorn
        'unicorn/catch-error-name': ['error', {name: 'err'}],

        // unicorn off
        'unicorn/filename-case': 'off',
        'unicorn/import-index': 'off',
        'unicorn/import-style': 'off',
        'unicorn/no-array-callback-reference': 'off',
        'unicorn/no-array-for-each': 'off',
        'unicorn/no-array-reduce': 'off',
        'unicorn/no-null': 'off',
        'unicorn/no-process-exit': 'off',
        'unicorn/no-unsafe-regex': 'off',
        'unicorn/prefer-module': 'off',
        'unicorn/prefer-regexp-test': 'off',
        'unicorn/prefer-top-level-await': 'off',
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/require-array-join-separator': 'off',

        // jsdoc
        'jsdoc/check-indentation': 'error',
        'jsdoc/check-line-alignment': 'error',
        'jsdoc/check-param-names': ['error', {'disableExtraPropertyReporting': true}],
        'jsdoc/no-blank-block-descriptions': 'error',
        'jsdoc/require-jsdoc': ['error', {require: {ArrowFunctionExpression: true, ClassDeclaration: true, ClassExpression: true, FunctionDeclaration: true, FunctionExpression: true, MethodDefinition: true}, publicOnly: true, exemptEmptyConstructors: true}],

        // jsdoc off
        'jsdoc/require-param-description': 'off',
        'jsdoc/require-property-description': 'off',
        'jsdoc/require-returns-description': 'off',
        'jsdoc/require-returns': 'off',

        // stylistic
        '@stylistic/arrow-parens': ['error', 'as-needed'],
        '@stylistic/comma-dangle': ['error', {arrays: 'always-multiline', objects: 'always-multiline', imports: 'always-multiline', exports: 'always-multiline', functions: 'always-multiline'}],
        '@stylistic/dot-location': ['error', 'property'],
        '@stylistic/indent-binary-ops': ['error', 4],
        '@stylistic/indent': ['error', 4, {SwitchCase: 1}],
        '@stylistic/lines-around-comment': ['error', {afterBlockComment: false, allowObjectEnd: false, allowBlockEnd: false, allowArrayEnd: false}],
        '@stylistic/no-extra-parens': ['error', 'all', {nestedBinaryExpressions: false}],
        '@stylistic/no-multiple-empty-lines': ['error', {max: 1, maxBOF: 0}],
        '@stylistic/operator-linebreak': ['error', 'before'],
        '@stylistic/padded-blocks': ['error', {classes: 'always', switches: 'never', blocks: 'never'}],
        '@stylistic/padding-line-between-statements': ['error', {blankLine: 'always', prev: '*', next: 'multiline-block-like'}, {blankLine: 'always', prev: 'multiline-block-like', next: '*'}, {blankLine: 'always', prev: '*', next: 'multiline-const'}, {blankLine: 'always', prev: 'multiline-const', next: '*'}, {blankLine: 'always', prev: '*', next: 'multiline-expression'}, {blankLine: 'always', prev: 'multiline-expression', next: '*'}, {blankLine: 'always', prev: '*', next: 'multiline-let'}, {blankLine: 'always', prev: 'multiline-let', next: '*'}, {blankLine: 'always', prev: 'cjs-import', next: '*'}, {blankLine: 'never', prev: 'cjs-import', next: 'cjs-import'}],
        '@stylistic/quote-props': ['error', 'consistent-as-needed'],
        '@stylistic/quotes': ['error', 'single', {avoidEscape: true}],
        '@stylistic/space-before-function-paren': ['error', {anonymous: 'never', named: 'never', asyncArrow: 'always'}],

        // stylistic off
        '@stylistic/array-element-newline': 'off',
        '@stylistic/function-call-argument-newline': 'off',
        '@stylistic/function-paren-newline': 'off',
        '@stylistic/max-len': 'off',
        '@stylistic/multiline-ternary': 'off',
        '@stylistic/newline-per-chained-call': 'off',
        '@stylistic/no-confusing-arrow': 'off',
        '@stylistic/object-property-newline': 'off',

        // eslint
        'camelcase': ['error', {properties: 'never', ignoreDestructuring: true}],
        'func-names': ['error', 'never'],
        'new-cap': ['error', {properties: false}],
        'no-empty': ['error', {allowEmptyCatch: true}],
        'no-inner-declarations': ['error', 'both'],
        'one-var': ['error', {uninitialized: 'always'}],
        'prefer-const': ['error', {destructuring: 'all'}],
        'prefer-destructuring': ['error', {object: true, array: false}],
        'radix': ['error', 'as-needed'],

        // eslint off
        'capitalized-comments': 'off',
        'class-methods-use-this': 'off',
        'consistent-return': 'off',
        'guard-for-in': 'off',
        'id-length': 'off',
        'init-declarations': 'off',
        'max-lines-per-function': 'off',
        'max-lines': 'off',
        'max-params': 'off',
        'max-statements': 'off',
        'multiline-comment-style': 'off',
        'no-await-in-loop': 'off',
        'no-continue': 'off',
        'no-magic-numbers': 'off',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'no-promise-executor-return': 'off',
        'no-ternary': 'off',
        'no-underscore-dangle': 'off',
        'no-unused-expressions': 'off',
        'prefer-named-capture-group': 'off',
        'require-unicode-regexp': 'off',
        'sort-imports': 'off',
        'sort-keys': 'off',
    },
};
