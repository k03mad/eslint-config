import regexp from 'eslint-plugin-regexp';

import {turnOff} from '../utils/rules.js';

export default [
    {
        plugins: {
            regexp,
        },
        rules: {
            ...regexp.configs.all.rules,

            ...turnOff(
                'regexp/hexadecimal-escape',
                'regexp/letter-case',
                'regexp/match-any',
                'regexp/no-super-linear-move',
                'regexp/prefer-named-capture-group',
                'regexp/require-unicode-regexp',
                'regexp/require-unicode-sets-regexp',
                'regexp/sort-character-class-elements',
                'regexp/strict',
            ),
        },
    },
];
