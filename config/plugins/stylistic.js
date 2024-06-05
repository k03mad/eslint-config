/* eslint-disable sonarjs/no-duplicate-string */
import stylistic from '@stylistic/eslint-plugin';

import {turnOff} from '../utils.js';

export default [
    stylistic.configs['all-flat'],

    {
        rules: {
            '@stylistic/array-element-newline': ['error', 'consistent'],
            '@stylistic/arrow-parens': ['error', 'as-needed'],
            '@stylistic/comma-dangle': ['error', {arrays: 'always-multiline', exports: 'always-multiline', functions: 'always-multiline', imports: 'always-multiline', objects: 'always-multiline'}],
            '@stylistic/dot-location': ['error', 'property'],
            '@stylistic/function-call-argument-newline': ['error', 'consistent'],
            '@stylistic/indent': ['error', 4, {SwitchCase: 1}],
            '@stylistic/indent-binary-ops': ['error', 4],
            '@stylistic/lines-around-comment': ['error', {afterBlockComment: false, allowArrayEnd: false, allowBlockEnd: false, allowObjectEnd: false}],
            '@stylistic/no-extra-parens': ['error', 'all', {nestedBinaryExpressions: false}],
            '@stylistic/no-multiple-empty-lines': ['error', {max: 1, maxBOF: 0}],
            '@stylistic/object-property-newline': ['error', {allowAllPropertiesOnSameLine: true}],
            '@stylistic/operator-linebreak': ['error', 'before'],
            '@stylistic/padded-blocks': ['error', {blocks: 'never', classes: 'always', switches: 'never'}],
            '@stylistic/padding-line-between-statements': ['error', {blankLine: 'always', next: 'multiline-block-like', prev: '*'}, {blankLine: 'always', next: '*', prev: 'multiline-block-like'}, {blankLine: 'always', next: 'multiline-const', prev: '*'}, {blankLine: 'always', next: '*', prev: 'multiline-const'}, {blankLine: 'always', next: 'multiline-expression', prev: '*'}, {blankLine: 'always', next: '*', prev: 'multiline-expression'}, {blankLine: 'always', next: 'multiline-let', prev: '*'}, {blankLine: 'always', next: '*', prev: 'multiline-let'}, {blankLine: 'always', next: '*', prev: 'cjs-import'}, {blankLine: 'never', next: 'cjs-import', prev: 'cjs-import'}],
            '@stylistic/quote-props': ['error', 'consistent-as-needed'],
            '@stylistic/quotes': ['error', 'single', {avoidEscape: true}],
            '@stylistic/space-before-function-paren': ['error', {anonymous: 'never', asyncArrow: 'always', named: 'never'}],

            ...turnOff(
                '@stylistic/function-paren-newline',
                '@stylistic/max-len',
                '@stylistic/multiline-ternary',
                '@stylistic/multiline-comment-style',
                '@stylistic/newline-per-chained-call',
                '@stylistic/no-confusing-arrow',
            ),
        },
    },
];
