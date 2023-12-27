import globals from 'globals';

import * as plugins from './plugins/_index.js';

export default [
    {
        languageOptions: {
            globals: {
                ...globals.nodeBuiltin,
            },
        },
        linterOptions: {
            reportUnusedDisableDirectives: 'error',
        },
    },

    ...Object.values(plugins).flat(),
];
