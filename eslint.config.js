import js from '@eslint/js';
import globals from 'globals';

import * as plugins from './plugins/_index.js';
import {turnOff} from './utils/rules.js';

export default [
    {
        languageOptions: {
            globals: {
                ...globals.nodeBuiltin,
            },
        },
        linterOptions: {
            reportUnusedDisableDirectives: 'error',
        },
    },

    // eslint builtin
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
                'sort-imports',
                'sort-keys',
            ),
        },
    },

    ...Object.values(plugins).flat(),
];
