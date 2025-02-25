// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nitro-cloudflare-dev', '@nuxt/eslint', '@nuxt/ui'],
  devtools: { enabled: false },
  css: ['~/assets/scss/styles.scss'],
  compatibilityDate: '2024-11-01',
  nitro: {
    preset: 'cloudflare_pages',
  },
});
