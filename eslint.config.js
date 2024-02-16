import globals from 'globals';

import * as plugins from './config/plugins/_index.js';

export default [
    ...Object.values(plugins).flat(),

    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.nodeBuiltin,

                // https://github.com/yumata/lampa-source
                $: false,
                Lampa: false,
            },
        },
        linterOptions: {
            reportUnusedDisableDirectives: 'error',
        },
    },
];
