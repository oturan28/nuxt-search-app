// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  extends: [
      'git@bitbucket.org:anwaltde/nuxt-profile-pages'
  ],

  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss']
})
