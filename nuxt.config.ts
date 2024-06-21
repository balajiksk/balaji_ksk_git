export default defineNuxtConfig({
  app: {
    baseURL: '/balaji_ksk_git/',
    buildAssetsDir: 'assets',
    pageTransition: { name: 'page', mode: 'out-in', duration: 250 }
  },
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    'vuetify-nuxt-module',
    'nuxt-icon',
    '@pinia/nuxt',
    // 'nuxt-vuefire',
  ],
  css: [
    '@/assets/scss/style.scss'
  ],
  imports: {
    dirs: ['./stores'],
  }
})
