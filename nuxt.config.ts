// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    routeRules: {
        // Disable homepage pre-rendered at build time
        '/js': { prerender: false },
        '/tf': { prerender: false },
    },
    app: {
      head: {
          script: [
              { src: 'https://fastdl.l03.dev/js/fontawesome.js', async: true},
          ]

      }},
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    tailwindcss: {
        configPath: '~/tailwind.config.js',
    }
})
