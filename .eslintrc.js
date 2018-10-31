module.exports = {

    'env': {
        'browser': true,
        'es6': true,
        'mocha': true,
        'node': true
    },
    'extends': [
        'eslint:all',
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
        'unicorn/filename-case': 'off',
        'unicorn/no-fn-reference-in-iterator': 2,
        'unicorn/no-process-exit': 'off',

        // eslint modified
        'arrow-parens': [2, 'as-needed'],
        'camelcase': [2, {'properties': 'never', 'ignoreDestructuring': true}],
        'comma-dangle': [2, 'always-multiline'],
        'dot-location': [2, 'property'],
        'indent': [2, 4, {'SwitchCase': 1}],
        'lines-around-comment': [2, {'afterBlockComment': false, 'allowObjectEnd': false, 'allowBlockEnd': false, 'allowArrayEnd': false}],
        'no-empty': [2, {'allowEmptyCatch': true}],
        'no-multiple-empty-lines': [2, {'max': 1, 'maxBOF': 0}],
        'one-var': [2, {'uninitialized': 'always'}],
        'operator-linebreak': [2, 'before'],
        'padded-blocks': [2, {'classes': 'always', 'switches': 'never'}],
        'padding-line-between-statements': [2, {'blankLine': 'always', 'prev': '*', 'next': 'multiline-block-like'}, {'blankLine': 'always', 'prev': 'multiline-block-like', 'next': '*'}, {'blankLine': 'always', 'prev': 'cjs-import', 'next': '*'}, {'blankLine': 'never', 'prev': 'cjs-import', 'next': 'cjs-import'}],
        'quote-props': [2, 'consistent-as-needed'],
        'quotes': [2, 'single'],
        'radix': [2, 'as-needed'],
        'require-jsdoc': [2, {'require': {'FunctionDeclaration': true, 'MethodDefinition': true, 'ClassDeclaration': true, 'ArrowFunctionExpression': true, 'FunctionExpression': false}}],
        'valid-jsdoc': [2, {'requireParamDescription': true, 'matchDescription': '.+', 'requireParamType': true, 'requireReturn': false, 'requireReturnType': true, 'requireReturnDescription': false, 'prefer': {'arg': 'param', 'argument': 'param', 'class': 'class', 'return': 'return', 'virtual': 'abstract'}, 'preferType': {'Boolean': 'boolean', 'Number': 'number', 'object': 'Object', 'String': 'string'}}],

        // eslint off
        'array-element-newline': 0,
        'capitalized-comments': 0,
        'function-paren-newline': 0,
        'global-require': 0,
        'guard-for-in': 0,
        'id-length': 0,
        'init-declarations': 0,
        'max-len': 0,
        'max-params': 0,
        'max-statements': 0,
        'multiline-ternary': 0,
        'newline-per-chained-call': 0,
        'no-await-in-loop': 0,
        'no-confusing-arrow': 0,
        'no-console': 0,
        'no-magic-numbers': 0,
        'no-param-reassign': 0,
        'no-plusplus': 0,
        'no-process-env': 0,
        'no-ternary': 0,
        'no-unused-expressions': 0,
        'object-property-newline': 0,
        'require-unicode-regexp': 0,
    }

};
