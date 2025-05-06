// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/image', '@pinia/nuxt'],
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
    }
  }
});