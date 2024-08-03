import perfectionist from 'eslint-plugin-perfectionist';

import {turnOff} from '../utils.js';

export default [
    perfectionist.configs['recommended-natural'],

    {
        rules: {
            ...turnOff(
                'perfectionist/sort-imports',
                'perfectionist/sort-objects',
            ),
        },
    },
];
