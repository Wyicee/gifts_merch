// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/image', '@pinia/nuxt', '@nuxt/fonts'],
    fonts: {
        families: [
            { name: 'Gilroy', provider: 'none', },
        ]
    },
    image: {
        format: ['webp'],
    },
    icon: {
        customCollections: [
            {
                prefix: 'gm-icon',
                dir: './public/icons',
            },
        ],
    },
    css: [
        'assets/styles/main.scss'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
          @use "assets/styles/vars.scss" as *;
          @use "assets/styles/utils.scss" as *;
          @use "assets/styles/media.scss" as *;
          `
                }
            }
        },
        ssr: {
            noExternal: ['bem-cn-lite']
        },
        optimizeDeps: {
            include: ['bem-cn-lite']
        },
    }
});