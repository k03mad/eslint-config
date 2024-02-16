import _import from 'eslint-plugin-import';

import {turnOff} from '../utils.js';

export default [
    {
        plugins: {
            import: _import,
        },
        rules: {
            ..._import.configs.errors.rules,

            'import/extensions': ['error', {ignorePackages: true, pattern: {js: 'always'}}],
            'import/first': 'error',
            'import/newline-after-import': 'error',
            'import/no-unresolved': ['error', {ignore: ['^p-queue$', '^got$', '^cacheable-lookup$']}],
            'import/order': ['error', {'alphabetize': {order: 'asc'}, 'newlines-between': 'always'}],

            ...turnOff(
                // https://github.com/import-js/eslint-plugin-import/issues/2556
                'import/default',
                // https://github.com/import-js/eslint-plugin-import/issues/2556
                'import/export',
                // https://github.com/import-js/eslint-plugin-import/issues/2556
                'import/namespace',
            ),
        },
    },
];
