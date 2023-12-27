import n from 'eslint-plugin-n';

import {turnOff} from '../utils/rules.js';

export default [
    n.configs['flat/recommended-module'],

    {
        rules: {
            ...turnOff(
                // 'n/no-process-exit',
                // 'n/no-unpublished-import',
            ),
        },
    },
];
