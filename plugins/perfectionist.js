import perfectionist from 'eslint-plugin-perfectionist';

import {turnOff} from '../utils/rules.js';

export default [
    {
        plugins: {
            perfectionist,
        },
        rules: {
            ...perfectionist.configs['recommended-natural'].rules,

            ...turnOff(
                'perfectionist/sort-imports',
            ),
        },
    },
];
