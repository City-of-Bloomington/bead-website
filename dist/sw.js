importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/17188203bdb44537a0de.js",
    "revision": "e49b0c22684625d3b1b9935993d33542"
  },
  {
    "url": "/_nuxt/1ebf2ce2c41dace20382.js",
    "revision": "9549321e190f30a898963ed709657ab9"
  },
  {
    "url": "/_nuxt/2a564270039d251bbd25.js",
    "revision": "a12f4de19119b72abf182360fe62d8c0"
  },
  {
    "url": "/_nuxt/9f40bf62bf99943aafa9.js",
    "revision": "b710da232387d6041bc8de26f981c2c7"
  }
], {
  "cacheId": "bead",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
