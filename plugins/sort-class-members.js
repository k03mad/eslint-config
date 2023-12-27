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
                        '[conventional-private-properties]',
                        '[conventional-private-methods]',
                        '[static-properties]',
                        '[static-methods]',
                        '[properties]',
                        '[methods]',
                    ],
                    accessorPairPositioning: 'getThenSet',
                },
            ],
        },
    },
];
