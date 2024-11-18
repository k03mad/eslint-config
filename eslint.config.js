import globals from 'globals';

import * as plugins from './config/plugins/_index.js';

export default [
    ...Object.values(plugins).flat(),

    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.nodeBuiltin,
            },
        },
        linterOptions: {
            reportUnusedDisableDirectives: 'error',
        },
    },
];
