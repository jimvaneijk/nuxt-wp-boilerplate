export default {
    head: {
        title: 'nuxt-wp-boilerplate',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    privateRuntimeConfig: {
        axios: {
            baseURL: `${process.env.WP_API_URL}/wp-json/`,
        },
    },

    css: [],

    plugins: [],

    components: true,

    buildModules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/stylelint-module',
        '@nuxtjs/tailwindcss',
    ],

    modules: ['@nuxtjs/axios'],

    axios: {},

    build: {},
};
