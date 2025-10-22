// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    app: { baseURL: '/db-fastdl' },

    routeRules: {
        // Disable homepage pre-rendered at build time
        '/js': { prerender: false },
        '/tf': { prerender: false },
    },
    css: [
        '@fortawesome/fontawesome-free/css/all.css'
    ],
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    tailwindcss: {
        configPath: '~/tailwind.config.js',
    },
    compatibilityDate: '2025-10-22'
})
