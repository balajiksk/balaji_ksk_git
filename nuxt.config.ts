export default defineNuxtConfig({
  target: 'static',
  router: {
    base: '/balaji_ksk_git/'
  },
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@pinia/nuxt'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in', duration: 250 }
  },
  css: [
    '@/assets/scss/style.scss'
  ],

})
// 