module.exports = {

    'env': {
        'browser': true,
        'es6': true,
        'mocha': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:node/recommended',
        'plugin:promise/recommended',
        'plugin:unicorn/recommended'
    ],
    'parserOptions': {
        'ecmaVersion': 9,
        'sourceType': 'module'
    },
    'plugins': [
        'const-case',
        'node',
        'promise',
        'unicorn'
    ],
    'rules': {
        // const-case
        'const-case/uppercase': 2,
        // node
        'node/exports-style': 2,
        'node/no-missing-import': 2,
        'node/prefer-global/buffer': 2,
        'node/prefer-global/console': 2,
        'node/prefer-global/process': 2,
        'node/prefer-global/text-decoder': 2,
        'node/prefer-global/text-encoder': 2,
        'node/prefer-global/url-search-params': 2,
        'node/prefer-global/url': 2,
        // promise
        'promise/no-callback-in-promise': 2,
        'promise/no-nesting': 2,
        'promise/no-new-statics': 2,
        'promise/no-promise-in-callback': 2,
        'promise/no-return-in-finally': 2,
        'promise/prefer-await-to-then': 2,
        // unicorn
        'unicorn/catch-error-name': [2, {'name': 'err'}],
        'unicorn/custom-error-definition': 2,
        'unicorn/no-fn-reference-in-iterator': 2,
        'unicorn/no-process-exit': 'off',
        // eslint
        'array-bracket-spacing': 2,
        'array-callback-return': 2,
        'arrow-body-style': 2,
        'arrow-parens': [2, 'as-needed'],
        'arrow-spacing': 2,
        'brace-style': 2,
        'camelcase': [2, {'properties': 'never', 'ignoreDestructuring': true}],
        'comma-dangle': [2, 'always-multiline'],
        'comma-spacing': 2,
        'comma-style': 2,
        'computed-property-spacing': 2,
        'consistent-this': 2,
        'curly': 2,
        'default-case': 2,
        'dot-location': [2, 'property'],
        'dot-notation': 2,
        'eol-last': 2,
        'eqeqeq': 2,
        'func-call-spacing': 2,
        'func-names': [2, 'never'],
        'func-style': 2,
        'generator-star-spacing': 2,
        'handle-callback-err': 2,
        'implicit-arrow-linebreak': 2,
        'indent': [2, 4, {'SwitchCase': 1}],
        'key-spacing': 2,
        'keyword-spacing': 2,
        'linebreak-style': 2,
        'lines-around-comment': [2, {'afterBlockComment': false, 'allowObjectEnd': false, 'allowBlockEnd': false, 'allowArrayEnd': false}],
        'max-statements-per-line': 2,
        'new-cap': 2,
        'no-array-constructor': 2,
        'no-bitwise': 2,
        'no-caller': 2,
        'no-catch-shadow': 2,
        'no-console': 'off',
        'no-div-regex': 2,
        'no-duplicate-imports': 2,
        'no-else-return': 2,
        'no-empty-function': 2,
        'no-empty': [2, {'allowEmptyCatch': true}],
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-extra-parens': 2,
        'no-floating-decimal': 2,
        'no-implicit-coercion': 2,
        'no-implied-eval': 2,
        'no-inner-declarations': 2,
        'no-iterator': 2,
        'no-labels': 2,
        'no-lone-blocks': 2,
        'no-lonely-if': 2,
        'no-multi-assign': 2,
        'no-multi-spaces': 2,
        'no-multiple-empty-lines': [2, {'max': 1, 'maxBOF': 0}],
        'no-nested-ternary': 2,
        'no-new-func': 2,
        'no-new-object': 2,
        'no-new-require': 2,
        'no-new-wrappers': 2,
        'no-new': 2,
        'no-octal-escape': 2,
        'no-proto': 2,
        'no-return-assign': 2,
        'no-return-await': 2,
        'no-script-url': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-shadow-restricted-names': 2,
        'no-shadow': 2,
        'no-tabs': 2,
        'no-template-curly-in-string': 2,
        'no-trailing-spaces': 2,
        'no-underscore-dangle': 2,
        'no-unmodified-loop-condition': 2,
        'no-unneeded-ternary': 2,
        'no-use-before-define': 2,
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-useless-constructor': 2,
        'no-useless-rename': 2,
        'no-useless-return': 2,
        'no-var': 2,
        'no-void': 2,
        'no-whitespace-before-property': 2,
        'no-with': 2,
        'object-curly-spacing': 2,
        'object-shorthand': 2,
        'one-var-declaration-per-line': 2,
        'one-var': [2, {'uninitialized': 'always'}],
        'operator-assignment': 2,
        'operator-linebreak': [2, 'before'],
        'padded-blocks': [2, {'classes': 'always', 'switches': 'never'}],
        'padding-line-between-statements': [2, {'blankLine': 'always', 'prev': '*', 'next': 'multiline-block-like'}, {'blankLine': 'always', 'prev': 'multiline-block-like', 'next': '*'}, {'blankLine': 'always', 'prev': 'cjs-import', 'next': '*'}, {'blankLine': 'never', 'prev': 'cjs-import', 'next': 'cjs-import'}],
        'prefer-arrow-callback': 2,
        'prefer-const': 2,
        'prefer-destructuring': 2,
        'prefer-rest-params': 2,
        'prefer-spread': 2,
        'prefer-template': 2,
        'quote-props': [2, 'consistent-as-needed'],
        'quotes': [2, 'single'],
        'radix': [2, 'as-needed'],
        'require-await': 2,
        'require-jsdoc': [2, {'require': {'FunctionDeclaration': true, 'MethodDefinition': true, 'ClassDeclaration': true, 'ArrowFunctionExpression': true, 'FunctionExpression': false}}],
        'semi-spacing': 2,
        'semi-style': 2,
        'semi': 2,
        'sort-imports': 2,
        'sort-vars': 2,
        'space-before-blocks': 2,
        'space-before-function-paren': 2,
        'space-in-parens': 2,
        'space-infix-ops': 2,
        'space-unary-ops': 2,
        'spaced-comment': 2,
        'strict': 2,
        'switch-colon-spacing': 2,
        'template-curly-spacing': 2,
        'template-tag-spacing': 2,
        'valid-jsdoc': [2, {'requireParamDescription': true, 'matchDescription': '.+', 'requireParamType': true, 'requireReturn': false, 'requireReturnType': true, 'requireReturnDescription': false, 'prefer': {'arg': 'param', 'argument': 'param', 'class': 'class', 'return': 'return', 'virtual': 'abstract'}, 'preferType': {'Boolean': 'boolean', 'Number': 'number', 'object': 'Object', 'String': 'string'}}],
        'wrap-iife': 2,
        'yield-star-spacing': 2,
        'yoda': 2
    }

};
