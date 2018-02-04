module.exports = {

    'env': {
        'browser': true,
        'es6': true,
        'mocha': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 2017,
        'sourceType': 'module'
    },
    'plugins': [
        'const-case',
        'node',
        'promise'
    ],
    'rules': {
        // const-case
        'const-case/uppercase': 'error',
        // node
        'node/exports-style': 'error',
        'node/no-deprecated-api': 'error',
        'node/no-missing-import': 'error',
        'node/no-missing-require': 'error',
        'node/no-unsupported-features': 'error',
        'node/shebang': 'error',
        // promise
        'promise/catch-or-return': 'error',
        'promise/no-return-wrap': 'error',
        'promise/param-names': 'error',
        'promise/prefer-await-to-then': 'error',
        // eslint
        'array-bracket-spacing': 'error',
        'array-callback-return': 'error',
        'arrow-body-style': 'off',
        'arrow-parens': ['error', 'as-needed'],
        'arrow-spacing': 'error',
        'block-scoped-var': 'error',
        'block-spacing': ['error', 'never'],
        'brace-style': 'error',
        'callback-return': 'error',
        'camelcase': ['error', {'properties': 'never'}],
        'comma-dangle': ['error', 'never'],
        'comma-spacing': 'error',
        'comma-style': 'error',
        'computed-property-spacing': 'error',
        'consistent-this': 'error',
        'curly': 'error',
        'default-case': 'error',
        'dot-location': ['error', 'property'],
        'dot-notation': 'error',
        'eol-last': 'error',
        'eqeqeq': 'error',
        'for-direction': 'error',
        'func-call-spacing': 'error',
        'func-names': ['error', 'never'],
        'func-style': ['error', 'expression'],
        'generator-star-spacing': 'error',
        'handle-callback-err': 'error',
        'implicit-arrow-linebreak': 'error',
        'indent': ['error', 4, {'SwitchCase': 1, 'MemberExpression': 1}],
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'linebreak-style': 'error',
        'lines-around-comment': ['error', {'afterBlockComment': false, 'allowObjectEnd': false, 'allowBlockEnd': false, 'allowArrayEnd': false}],
        'max-nested-callbacks': 'error',
        'max-statements-per-line': 'error',
        'new-cap': 'error',
        'no-alert': 'error',
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-catch-shadow': 'error',
        'no-compare-neg-zero': 'error',
        'no-confusing-arrow': 'error',
        'no-console': 'off',
        'no-continue': 'error',
        'no-div-regex': 'error',
        'no-duplicate-imports': 'error',
        'no-else-return': 'error',
        'no-empty': ['error', {'allowEmptyCatch': true}],
        'no-empty-function': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-label': 'error',
        'no-extra-parens': 'error',
        'no-floating-decimal': 'error',
        'no-global-assign': 'error',
        'no-implicit-coercion': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-inner-declarations': ['error', 'both'],
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-mixed-requires': 'error',
        'no-multi-assign': 'error',
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': ['error', {'max': 1, 'maxEOF': 1, 'maxBOF': 0}],
        'no-nested-ternary': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-require': 'error',
        'no-new-wrappers': 'error',
        'no-octal-escape': 'error',
        'no-path-concat': 'error',
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-restricted-globals': 'error',
        'no-restricted-imports': 'error',
        'no-restricted-modules': 'error',
        'no-restricted-syntax': 'error',
        'no-return-assign': 'error',
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow': 'error',
        'no-shadow-restricted-names': 'error',
        'no-tabs': 'error',
        'no-template-curly-in-string': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-underscore-dangle': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unneeded-ternary': 'error',
        'no-unsafe-negation': 'error',
        'no-use-before-define': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-useless-escape': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'no-void': 'error',
        'no-whitespace-before-property': 'error',
        'no-with': 'error',
        'object-curly-spacing': 'error',
        'object-shorthand': ['error', 'properties'],
        'one-var': ['error', 'never'],
        'one-var-declaration-per-line': 'error',
        'operator-assignment': 'error',
        'operator-linebreak': ['error', 'before'],
        'padded-blocks': ['error', {'classes': 'always', 'switches': 'never'}],
        'padding-line-between-statements': ['error', {blankLine: 'always', prev: '*', next: 'multiline-block-like'}, {blankLine: 'always', prev: 'multiline-block-like', next: '*'}, {blankLine: 'always', prev: 'cjs-import', next: '*'}, {blankLine: 'never', prev: 'cjs-import', next: 'cjs-import'}],
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-destructuring': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'quote-props': ['error', 'as-needed'],
        'quotes': ['error', 'single'],
        'radix': ['error', 'as-needed'],
        'require-await': 'error',
        'require-jsdoc': ['error', {'require': {'FunctionDeclaration': true, 'MethodDefinition': true, 'ClassDeclaration': true, 'ArrowFunctionExpression': true}}],
        'semi': 'error',
        'semi-spacing': 'error',
        'semi-style': 'error',
        'sort-imports': ['error', {'ignoreCase': true}],
        'sort-keys': 'off',
        'sort-vars': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', {'anonymous': 'never', 'named': 'never', 'asyncArrow': 'always'}],
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': 'error',
        'strict': ['error', 'safe'],
        'switch-colon-spacing': 'error',
        'template-curly-spacing': 'error',
        'template-tag-spacing': ['error', 'never'],
        'vars-on-top': 'error',
        'wrap-iife': ['error', 'any'],
        'yield-star-spacing': 'error',
        'yoda': 'error'
    }

};