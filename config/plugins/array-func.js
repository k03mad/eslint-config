import arrayFunc from 'eslint-plugin-array-func';

import {turnOff} from '../utils.js';

export default [
    {
        plugins: {
            'array-func': arrayFunc,
        },
        rules: {
            ...arrayFunc.configs.all.rules,
            ...arrayFunc.configs.recommended.rules,

            ...turnOff(
                'array-func/prefer-array-from',
            ),
        },
    },
];
