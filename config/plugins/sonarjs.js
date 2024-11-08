import sonarjs from 'eslint-plugin-sonarjs';

import {turnOff} from '../utils.js';

export default [
    sonarjs.configs.recommended,

    {
        rules: {
            ...turnOff(
                'sonarjs/anchor-precedence',
                'sonarjs/cognitive-complexity',
                'sonarjs/no-clear-text-protocols',
                'sonarjs/no-hardcoded-ip',
                'sonarjs/no-nested-template-literals',
                'sonarjs/pseudo-random',
                'sonarjs/regex-complexity',
                'sonarjs/slow-regex',
                'sonarjs/x-powered-by',
            ),
        },
    },
];
