import promise from 'eslint-plugin-promise';

export default [
    {
        plugins: {
            promise,
        },
        rules: {
            ...promise.configs.recommended.rules,
        },
    },
];
