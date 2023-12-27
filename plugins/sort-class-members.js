import sortClassMembers from 'eslint-plugin-sort-class-members';

export default [
    {
        plugins: {
            'sort-class-members': sortClassMembers,
        },
        rules: {
            'sort-class-members/sort-class-members': [
                'error',
                {
                    order: [
                        'constructor',
                        '[static-properties]',
                        '[static-methods]',
                        '[getters]',
                        '[setters]',
                        '[conventional-private-properties]',
                        '[conventional-private-methods]',
                        '[properties]',
                        '[async-methods]',
                        '[methods]',
                        '[everything-else]',
                    ],
                },
            ],
        },
    },
];
