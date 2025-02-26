// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate',
    'nitro-cloudflare-dev',
  ],
  devtools: { enabled: false },
  css: ['~/assets/scss/styles.scss'],
  compatibilityDate: '2024-11-01',
  nitro: {
    preset: 'cloudflare_pages',
  },
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
      gitInfo: {
        name: 'davidcc.dev',
        owner: 'davidcastilloc',
        url: 'https://github.com/davidcastilloc/davidcc.dev'
      }
    }
  }
});
