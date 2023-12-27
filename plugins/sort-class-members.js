import sortClassMembers from 'eslint-plugin-sort-class-members';

export default [
    {
        plugins: {
            'sort-class-members': sortClassMembers,
        },
        rules: {
            ...sortClassMembers.configs.recommended.rules,
        },
    },
];
