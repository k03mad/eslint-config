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
                'regexp/no-misleading-capturing-group',
                'regexp/no-super-linear-backtracking',
                'regexp/no-super-linear-move',
                'regexp/no-unused-capturing-group',
                'regexp/prefer-named-capture-group',
                'regexp/require-unicode-regexp',
                'regexp/require-unicode-sets-regexp',
                'regexp/sort-character-class-elements',
                'regexp/strict',
            ),
        },
    },
];
