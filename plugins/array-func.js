import arrayFunc from 'eslint-plugin-array-func';

export default [
    {
        plugins: {
            'array-func': arrayFunc,
        },
        rules: {
            ...arrayFunc.configs.all.rules,
            ...arrayFunc.configs.recommended.rules,
        },
    },
];
