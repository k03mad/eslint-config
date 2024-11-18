import globals from 'globals';

import * as plugins from './config/plugins/_index.js';

export default [
    {
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
            },
            globals: {
                ...globals.browser,
                ...globals.nodeBuiltin,
            },
        },
        linterOptions: {
            reportUnusedDisableDirectives: 'error',
        },
    },

    ...Object.values(plugins).flat(),
];
