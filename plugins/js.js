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
            'one-var': ['error', {uninitialized: 'always'}],
            'prefer-const': ['error', {destructuring: 'all'}],
            'prefer-destructuring': ['error', {object: true, array: false}],
            'radix': ['error', 'as-needed'],

            ...turnOff(
                'capitalized-comments',
                'id-length',
                'init-declarations',
                'multiline-comment-style',
                'no-magic-numbers',
                'require-unicode-regexp',
                'sort-imports',
                'sort-keys',
            ),
        },
    },
];
