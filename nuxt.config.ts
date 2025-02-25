// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nitro-cloudflare-dev', '@nuxt/eslint', '@nuxt/ui'],
  components: [
    {
      path: '~/components/atoms',
      pathPrefix: false,
    },
    {
      path: '~/components/molecules',
      pathPrefix: false,
    },
    {
      path: '~/components/organisms',
      pathPrefix: false,
    },
  ],
  devtools: { enabled: false },
  css: ['~/assets/scss/styles.scss'],
  compatibilityDate: '2024-11-01',
  nitro: {
    preset: 'cloudflare_pages',
  },
});
