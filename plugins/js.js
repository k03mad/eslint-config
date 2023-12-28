import js from '@eslint/js';

import {turnOff} from '../utils/rules.js';

export default [
    js.configs.all,
    {
        rules: {
            'camelcase': ['error', {properties: 'never', ignoreDestructuring: true}],
            'func-names': ['error', 'never'],
            'new-cap': ['error', {properties: false}],
            'no-empty': ['error', {allowEmptyCatch: true}],
            'no-inner-declarations': ['error', 'both'],
            'no-unused-expressions': ['error', {allowShortCircuit: true}],
            'one-var': ['error', {uninitialized: 'always'}],
            'prefer-const': ['error', {destructuring: 'all'}],
            'prefer-destructuring': ['error', {object: true, array: false}],
            'radix': ['error', 'as-needed'],

            ...turnOff(
                'capitalized-comments',
                'class-methods-use-this',
                'consistent-return',
                'guard-for-in',
                'id-length',
                'init-declarations',
                'max-lines',
                'max-lines-per-function',
                'max-params',
                'max-statements',
                'multiline-comment-style',
                'no-await-in-loop',
                'no-magic-numbers',
                'no-plusplus',
                'no-promise-executor-return',
                'no-ternary',
                'no-underscore-dangle',
                'prefer-named-capture-group',
                'require-unicode-regexp',
                'sort-imports',
                'sort-keys',
            ),
        },
    },
];
