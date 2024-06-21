export default defineNuxtConfig({
  app: {
    baseURL: '/balaji_ksk_git/',
    buildAssetsDir: 'assets',
    pageTransition: { name: 'page', mode: 'out-in', duration: 250 }
  },
  devtools: { enabled: true },
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
  // vuefire: {
  //   auth: { enabled: true, sessionCookie: true },
  //   config: {
  //     apiKey: process.env.apiKey,
  //     authDomain: process.env.authDomain,
  //     projectId: process.env.projectId,
  //     storageBucket: process.env.storageBucket,
  //     messagingSenderId: process.env.messagingSenderId,
  //     appId: process.env.appId
  //   },
  // },

})
// 