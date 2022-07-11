export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: false,

  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'fr',
      translate: 'no'
    },
    title: 'Web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'google', content: 'notranslate' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  env: {
    version: 'v1.0.0'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/styles/index.css', 'remixicon/fonts/remixicon.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/element-ui', mode: 'client' },
    { src: '@/plugins/vue-apexcharts', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/google-fonts',
    '@nuxtjs/moment',
    '@nuxt/typescript-build',
    ['nuxt-storm', { nested: true }]
  ],

  /*
   ** @nuxtjs/style-resources
   */
  styleResources: {
    scss: ['@/styles/app.scss']
  },

  /*
   ** @nuxtjs/google-fonts
   */
  googleFonts: {
    display: 'swap',
    families: {
      'Work+Sans': [400, 600, 700]
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
  ],

  moment: {
    defaultLocale: 'fr',
    locales: ['fr']
  },

  generate: {
    subFolders: false
  },

  router: {
    extendRoutes: (routesIn) => {
      routesIn.forEach((r) => {
        if (/\d/.test(r.path)) console.log(r.path);
      });
      return routesIn;
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    }
  }
};
