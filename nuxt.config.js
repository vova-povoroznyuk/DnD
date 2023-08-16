export default {
  head: {
    title: 'plyar-list',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~/assets/styles/_export.scss'],

  plugins: [
    '~/plugins/axios',
    '~/plugins/repository',
    '~/plugins/init',
    { src: '~/plugins/vue-js-modal', mode: 'client' },
    '~/plugins/vualidate',
  ],

  components: false,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    'vue-ssr-carousel/nuxt',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/toast',
  ],
  toast: {
    position: 'top-right',
    duration: 3000,
    keepOnHover: true,
    singleton: true,
  },
  axios: {
    baseURL: process.env.API,
  },
  sitemap: {
    gzip: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
    },
  },

  robots: {
    UserAgent: '*',
    Disallow: '/',
  },
  build: {},
  server: {
    port: process.env.PORT || 3000,
  },
}
