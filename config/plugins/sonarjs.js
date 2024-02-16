import sonarjs from 'eslint-plugin-sonarjs';

import {turnOff} from '../utils.js';

export default [
    {
        plugins: {
            sonarjs,
        },
        rules: {
            ...sonarjs.configs.recommended.rules,

            ...turnOff(
                'sonarjs/cognitive-complexity',
                'sonarjs/no-nested-template-literals',
            ),
        },
    },
];
