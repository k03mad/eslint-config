import importX from 'eslint-plugin-import-x';

import {turnOff} from '../utils.js';

export default [
    importX.flatConfigs.errors,

    {
        rules: {
            'import-x/extensions': ['error', {ignorePackages: true, pattern: {js: 'always'}}],
            'import-x/first': 'error',
            'import-x/newline-after-import': 'error',
            'import-x/order': ['error', {'alphabetize': {order: 'asc'}, 'newlines-between': 'always'}],

            ...turnOff(
                // 'import-x/default',
                // 'import-x/namespace',
                // 'import-x/no-unresolved',
            ),
        },
    },
];
