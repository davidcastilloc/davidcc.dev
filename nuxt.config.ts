// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxt/eslint', 'pinia-plugin-persistedstate/nuxt'],
  components: [
    {
      path: '~/components/atoms',
      pathPrefix: false,
    },
  ],
  devtools: { enabled: false },
  css: ['~/assets/scss/styles.scss'],
  compatibilityDate: '2024-11-01',
  nitro: {
    preset: 'cloudflare-pages',
  },
});
