import * as globals from './config/globals/_index.js';
import * as plugins from './config/plugins/_index.js';

export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.lampa,
                ...globals.node,
            },
        },
        linterOptions: {
            reportUnusedDisableDirectives: 'error',
        },
    },

    ...Object.values(plugins).flat(),
];
