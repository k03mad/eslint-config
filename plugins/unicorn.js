import unicorn from 'eslint-plugin-unicorn';

import {turnOff} from '../utils/rules.js';

export default [
    unicorn.configs['flat/all'],

    {
        rules: {
            'unicorn/catch-error-name': ['error', {name: 'err'}],

            ...turnOff(
                'unicorn/no-array-for-each',
                'unicorn/no-array-reduce',
                'unicorn/prevent-abbreviations',
                'unicorn/require-array-join-separator',
            ),
        },
    },
];
