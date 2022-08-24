importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/52d22d0.js",
    "revision": "06be5d3cd5d515b27db29686f0c9d8e0"
  },
  {
    "url": "/_nuxt/6072007.js",
    "revision": "0d57f8152ef92a5743333ef2fbe61f47"
  },
  {
    "url": "/_nuxt/9aa9d5e.js",
    "revision": "b53921ba81f2318b1649dd2ebed87404"
  },
  {
    "url": "/_nuxt/a16867e.js",
    "revision": "2abed821003758d6dca8c293d186c162"
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
