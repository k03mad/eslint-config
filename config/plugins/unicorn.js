import unicorn from 'eslint-plugin-unicorn';

import {turnOff} from '../utils.js';

export default [
    unicorn.configs['flat/all'],

    {
        rules: {
            'unicorn/catch-error-name': ['error', {name: 'err'}],
            'unicorn/prefer-ternary': ['error', 'only-single-line'],

            ...turnOff(
                'unicorn/expiring-todo-comments',
                'unicorn/filename-case',
                'unicorn/no-anonymous-default-export',
                'unicorn/no-array-callback-reference',
                'unicorn/no-array-for-each',
                'unicorn/no-array-reduce',
                'unicorn/no-null',
                'unicorn/no-process-exit',
                'unicorn/prevent-abbreviations',
                'unicorn/require-array-join-separator',
            ),
        },
    },
];
