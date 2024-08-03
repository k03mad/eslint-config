import sonarjs from 'eslint-plugin-sonarjs';

import {turnOff} from '../utils.js';

export default [
    sonarjs.configs.recommended,

    {
        rules: {
            ...turnOff(
                'sonarjs/cognitive-complexity',
                'sonarjs/no-nested-template-literals',
            ),
        },
    },
];
