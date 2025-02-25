import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxt/eslint', 'pinia-plugin-persistedstate/nuxt'],
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
  piniaPluginPersistedstate: {
    storage: 'localStorage',
  },
});
