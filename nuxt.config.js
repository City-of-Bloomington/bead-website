const pkg = require('./package')
module.exports = {
  mode: 'universal',
  head: {
    title: 'BEAD - Bloomington Entertainment & Arts District',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:      'stylesheet',
        href:     'https://fonts.googleapis.com/css?family=Faustina:400,400i,700,700i'
      }
    ]
  },

  manifest: {
    name:         'BEAD - Bloomington Entertainment & Arts District',
    short_name:   'BEAD',
    description:  'The Bloomington Entertainment & Arts District (BEAD) is a state-designated cultural district and city-led economic development projects.',
    theme_color:  '#FF4164'
  },

  loading: { color: '#FF4164' },

  css: [
    '@/assets/style.scss',
  ],

  plugins: [],

  modules: [
    '@nuxtjs/pwa',
  ],

  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
