import jsdoc from 'eslint-plugin-jsdoc';

import {turnOff} from '../utils.js';

export default [
    jsdoc.configs['flat/recommended-error'],

    {
        rules: {
            'jsdoc/check-indentation': 'error',
            'jsdoc/check-line-alignment': 'error',
            'jsdoc/check-param-names': ['error', {disableExtraPropertyReporting: true}],
            'jsdoc/no-blank-block-descriptions': 'error',
            'jsdoc/require-jsdoc': ['error', {exemptEmptyConstructors: true, publicOnly: true, require: {ArrowFunctionExpression: true, ClassDeclaration: true, ClassExpression: true, FunctionDeclaration: true, FunctionExpression: true, MethodDefinition: true}}],

            ...turnOff(
                'jsdoc/require-param-description',
                'jsdoc/require-property-description',
                'jsdoc/require-returns-description',
                'jsdoc/require-returns',
            ),
        },
    },
];
