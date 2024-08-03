import regexp from 'eslint-plugin-regexp';

import {turnOff} from '../utils.js';

export default [
    regexp.configs['flat/all'],

    {
        rules: {
            ...turnOff(
                'regexp/hexadecimal-escape',
                'regexp/letter-case',
                'regexp/match-any',
                'regexp/no-misleading-capturing-group',
                'regexp/no-super-linear-backtracking',
                'regexp/no-super-linear-move',
                'regexp/no-unused-capturing-group',
                'regexp/optimal-quantifier-concatenation',
                'regexp/prefer-named-capture-group',
                'regexp/require-unicode-regexp',
                'regexp/require-unicode-sets-regexp',
                'regexp/sort-character-class-elements',
                'regexp/strict',
            ),
        },
    },
];
