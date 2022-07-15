module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    rules: {
        'no-console': 'off',
        'no-debugger': 'off',
        indent: ['error', 4, { SwitchCase: 1 }],
        'vue/script-setup-uses-vars': 'error',
        'vue/multi-word-component-names': 'off',
        'vue/v-on-event-hyphenation': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                varsIgnorePattern: 'props',
                argsIgnorePattern: 'none'
            }
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off'
    }
}
