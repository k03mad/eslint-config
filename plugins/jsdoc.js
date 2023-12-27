import jsdoc from 'eslint-plugin-jsdoc';

import {turnOff} from '../utils/rules.js';

export default [
    jsdoc.configs['flat/recommended-error'],

    {
        rules: {
            'jsdoc/check-indentation': 'error',
            'jsdoc/check-line-alignment': 'error',
            'jsdoc/check-param-names': ['error', {disableExtraPropertyReporting: true}],
            'jsdoc/no-blank-block-descriptions': 'error',
            'jsdoc/require-jsdoc': ['error', {require: {ArrowFunctionExpression: true, ClassDeclaration: true, ClassExpression: true, FunctionDeclaration: true, FunctionExpression: true, MethodDefinition: true}, publicOnly: true, exemptEmptyConstructors: true}],

            ...turnOff(
                'jsdoc/require-param-description',
                'jsdoc/require-returns-description',
                'jsdoc/require-returns',
            ),
        },
    },
];
