// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@nuxtjs/eslint-module', '@nuxtjs/i18n', '@nuxt/ui',
  ],
  colorMode: {
    preference: 'dark'
  }
})
