module.exports = {
    env: {
        node: true,
        es2021: true,
    },

    extends: [
        'eslint:all',
        'plugin:import/errors',
        'plugin:jsdoc/recommended',
        'plugin:n/recommended',
        'plugin:unicorn/all',
    ],

    parserOptions: {
        sourceType: 'module',
    },

    plugins: [
        'jsdoc',
        'import',
        'n',
        'simple-import-sort',
        'sort-destructure-keys',
        'unicorn',
    ],

    rules: {
        // import
        'import/exports-last': 'error',
        'import/extensions': [
            'error',
            {
                ignorePackages: true,
                pattern: {
                    js: 'always',
                },
            },
        ],
        'import/first': 'error',
        'import/namespace': ['error', {allowComputed: true}],
        'import/newline-after-import': 'error',
        'import/no-unresolved': [
            'error',
            {ignore: ['^node:', '^chalk$', '^p-queue$', '^got$']},
        ],

        // sort-destructure-keys
        'sort-destructure-keys/sort-destructure-keys': 'error',

        // simple-import-sort
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',

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
        'n/no-missing-import': 'off',

        // unicorn
        'unicorn/catch-error-name': ['error', {name: 'err'}],
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
        'jsdoc/require-jsdoc': [
            'error',
            {
                require: {
                    ArrowFunctionExpression: true,
                    ClassDeclaration: true,
                    ClassExpression: true,
                    FunctionDeclaration: true,
                    FunctionExpression: true,
                    MethodDefinition: true,
                },
                publicOnly: true,
            },
        ],
        'jsdoc/require-param-description': 'off',
        'jsdoc/require-property-description': 'off',
        'jsdoc/require-returns-description': 'off',

        // eslint modified
        'arrow-parens': ['error', 'as-needed'],
        'camelcase': [
            'error',
            {properties: 'never', ignoreDestructuring: true},
        ],
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'always-multiline',
            },
        ],
        'dot-location': ['error', 'property'],
        'func-names': ['error', 'never'],
        'indent': ['error', 4, {SwitchCase: 1}],
        'lines-around-comment': [
            'error',
            {
                afterBlockComment: false,
                allowObjectEnd: false,
                allowBlockEnd: false,
                allowArrayEnd: false,
            },
        ],
        'no-empty': ['error', {allowEmptyCatch: true}],
        'no-extra-parens': ['error', 'all', {nestedBinaryExpressions: false}],
        'no-inner-declarations': ['error', 'both'],
        'no-multiple-empty-lines': ['error', {max: 1, maxBOF: 0}],
        'one-var': ['error', {uninitialized: 'always'}],
        'operator-linebreak': ['error', 'before'],
        'padded-blocks': ['error', {classes: 'always', switches: 'never', blocks: 'never'}],
        'padding-line-between-statements': [
            'error',
            {blankLine: 'always', prev: '*', next: 'multiline-block-like'},
            {blankLine: 'always', prev: 'multiline-block-like', next: '*'},
            {blankLine: 'always', prev: '*', next: 'multiline-const'},
            {blankLine: 'always', prev: 'multiline-const', next: '*'},
            {blankLine: 'always', prev: '*', next: 'multiline-expression'},
            {blankLine: 'always', prev: 'multiline-expression', next: '*'},
            {blankLine: 'always', prev: '*', next: 'multiline-let'},
            {blankLine: 'always', prev: 'multiline-let', next: '*'},
            {blankLine: 'always', prev: 'cjs-import', next: '*'},
            {blankLine: 'never', prev: 'cjs-import', next: 'cjs-import'},
        ],
        'prefer-const': ['error', {destructuring: 'all'}],
        'prefer-destructuring': ['error', {object: true, array: false}],
        'quote-props': ['error', 'consistent-as-needed'],
        'quotes': ['error', 'single', {avoidEscape: true}],
        'radix': ['error', 'as-needed'],
        'space-before-function-paren': [
            'error',
            {anonymous: 'never', named: 'never', asyncArrow: 'always'},
        ],

        // eslint off
        'array-element-newline': 'off',
        'capitalized-comments': 'off',
        'complexity': 'off',
        'consistent-return': 'off',
        'function-call-argument-newline': 'off',
        'function-paren-newline': 'off',
        'global-require': 'off',
        'guard-for-in': 'off',
        'id-length': 'off',
        'init-declarations': 'off',
        'max-depth': 'off',
        'max-len': 'off',
        'max-lines-per-function': 'off',
        'max-params': 'off',
        'max-statements': 'off',
        'multiline-comment-style': 'off',
        'multiline-ternary': 'off',
        'newline-per-chained-call': 'off',
        'no-await-in-loop': 'off',
        'no-confusing-arrow': 'off',
        'no-continue': 'off',
        'no-control-regex': 'off',
        'no-div-regex': 'off',
        'no-invalid-this': 'off',
        'no-magic-numbers': 'off',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'no-process-env': 'off',
        'no-process-exit': 'off',
        'no-promise-executor-return': 'off',
        'no-ternary': 'off',
        'no-unused-expressions': 'off',
        'node/shebang': 'off',
        'object-property-newline': 'off',
        'prefer-named-capture-group': 'off',
        'require-atomic-updates': 'off',
        'require-unicode-regexp': 'off',
        'sort-imports': 'off',
        'sort-keys': 'off',
        'wrap-regex': 'off',
    },
};
