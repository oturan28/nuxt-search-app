// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  extends: [
    'github:oturan28/nuxt-shell-app',
  ],

  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss']
})
