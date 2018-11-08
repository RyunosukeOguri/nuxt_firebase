module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt.js * Firebase PWA',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js * Firebase = SPA * SSR * PWA * Serverless' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  buildDir: '../functions/nuxt',
  build: {
    publicPath: '/assets/',
    extractCSS: true,
    // babel: {
    //   presets: [
    //     'env',
    //     'stage-0'
    //   ],
    //   plugins: [
    //     ['transform-runtime', {
    //       polyfill: true,
    //       regenerator: true
    //     }],
    //   ],
    // },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            configFile: '.eslintrc.js'
          }
        })
      }
    }
  },
  /*
  ** PWA
  */
  modules: [
    '@nuxtjs/onesignal', // pwaの前に定義
    '@nuxtjs/pwa'
  ],
  //アプリホーム画面
  manifest: {
    name: 'Nuxt.js * Firebase PWA',
    short_name: 'NuxtPWA',
    title: 'NuxtPWA',
    'og:title': 'NuxtPWA',
    description: 'Nuxt.js * Firebase PWA',
    'og:description': 'Nuxt.js * Firebase PWA',
    lang: 'ja',
    theme_color: '#ffffff',
    background_color: '#ffffff'
  },
  //プッシュ通知
  oneSignal: {
    init: {
      appId: '0fdda5f1-897e-4653-9ffc-d3b6a211eaab',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: true
      }
    }
  },
  // workbox: {
  //   dev: false, //開発環境でもPWAできるように
  // }

  router: {
    middleware: 'authenticated'
  },

  css: [
    '~/assets/scss/main.scss',
  ],
}

