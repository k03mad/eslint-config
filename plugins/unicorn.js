import unicorn from 'eslint-plugin-unicorn';

import {turnOff} from '../utils/rules.js';

export default [
    unicorn.configs['flat/all'],

    {
        rules: {
            'unicorn/catch-error-name': ['error', {name: 'err'}],

            ...turnOff(
                // 'unicorn/filename-case',
                // 'unicorn/import-index',
                // 'unicorn/import-style',
                // 'unicorn/no-array-callback-reference',
                // 'unicorn/no-array-for-each',
                // 'unicorn/no-array-reduce',
                // 'unicorn/no-null',
                // 'unicorn/no-process-exit',
                // 'unicorn/no-unsafe-regex',
                // 'unicorn/prefer-module',
                // 'unicorn/prefer-regexp-test',
                // 'unicorn/prefer-top-level-await',
                // 'unicorn/prevent-abbreviations',
                // 'unicorn/require-array-join-separator',
            ),
        },
    },
];
