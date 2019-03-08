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
    theme_color:  '#8c28ff'
  },

  loading: { color: '#8c28ff' },

  css: [
    '@/assets/style.scss',
  ],

  plugins: [],

  modules: [
    ['@nuxtjs/pwa', {
      icon: true,
      sizes: [16, 120, 144, 152, 192, 384, 512],
    }]
  ],

  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
