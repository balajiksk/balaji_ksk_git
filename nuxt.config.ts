export default defineNuxtConfig({
  app: {
    baseURL: '/balaji_ksk_git/',
    buildAssetsDir: 'assets',
    pageTransition: { name: 'page', mode: 'out-in', duration: 250 }
  },
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@pinia/nuxt'],


  css: [
    '@/assets/scss/style.scss'
  ],

})
// 