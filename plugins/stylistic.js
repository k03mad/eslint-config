/* eslint-disable sonarjs/no-duplicate-string */
import stylistic from '@stylistic/eslint-plugin';

import {turnOff} from '../utils/rules.js';

export default [
    stylistic.configs['all-flat'],

    {
        rules: {
            '@stylistic/arrow-parens': ['error', 'as-needed'],
            '@stylistic/comma-dangle': ['error', {arrays: 'always-multiline', objects: 'always-multiline', imports: 'always-multiline', exports: 'always-multiline', functions: 'always-multiline'}],
            '@stylistic/dot-location': ['error', 'property'],
            '@stylistic/indent-binary-ops': ['error', 4],
            '@stylistic/indent': ['error', 4, {SwitchCase: 1}],
            '@stylistic/lines-around-comment': ['error', {afterBlockComment: false, allowObjectEnd: false, allowBlockEnd: false, allowArrayEnd: false}],
            '@stylistic/no-extra-parens': ['error', 'all', {nestedBinaryExpressions: false}],
            '@stylistic/no-multiple-empty-lines': ['error', {max: 1, maxBOF: 0}],
            '@stylistic/operator-linebreak': ['error', 'before'],
            '@stylistic/padded-blocks': ['error', {classes: 'always', switches: 'never', blocks: 'never'}],
            '@stylistic/padding-line-between-statements': ['error', {blankLine: 'always', prev: '*', next: 'multiline-block-like'}, {blankLine: 'always', prev: 'multiline-block-like', next: '*'}, {blankLine: 'always', prev: '*', next: 'multiline-const'}, {blankLine: 'always', prev: 'multiline-const', next: '*'}, {blankLine: 'always', prev: '*', next: 'multiline-expression'}, {blankLine: 'always', prev: 'multiline-expression', next: '*'}, {blankLine: 'always', prev: '*', next: 'multiline-let'}, {blankLine: 'always', prev: 'multiline-let', next: '*'}, {blankLine: 'always', prev: 'cjs-import', next: '*'}, {blankLine: 'never', prev: 'cjs-import', next: 'cjs-import'}],
            '@stylistic/quote-props': ['error', 'consistent-as-needed'],
            '@stylistic/quotes': ['error', 'single', {avoidEscape: true}],
            '@stylistic/space-before-function-paren': ['error', {anonymous: 'never', named: 'never', asyncArrow: 'always'}],

            ...turnOff(
                '@stylistic/array-element-newline',
                '@stylistic/function-call-argument-newline',
                '@stylistic/function-paren-newline',
                '@stylistic/max-len',
                '@stylistic/multiline-ternary',
                '@stylistic/newline-per-chained-call',
                '@stylistic/object-property-newline',
            ),
        },
    },
];
