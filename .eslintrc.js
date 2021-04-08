module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    extends: [
        'airbnb-base',
        '@nuxtjs',
        'prettier',
        'prettier/vue',
        'plugin:prettier/recommended',
        'plugin:nuxt/recommended',
    ],
    plugins: ['prettier'],
    // add your custom rules here
    rules: {
        'no-console': 0,
        'no-param-reassign': [
            'error',
            {
                ignorePropertyModificationsFor: ['state'],
            },
        ],
        'no-shadow': [
            'error',
            {
                allow: ['getters', 'state'],
            },
        ],
        'vue/max-attributes-per-line': 0,
        'vue/singleline-html-element-content-newline': 0,
    },
};
