importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/7df383e6a52fc39daaae.js",
    "revision": "c84c0ccc019552a550a59a536aab8721"
  },
  {
    "url": "/_nuxt/a13a280ecb952ceaf432.js",
    "revision": "52ead9e33ea762ef62d118009f16b489"
  },
  {
    "url": "/_nuxt/cfe3f48a93d2ba118700.js",
    "revision": "76527073a36f2a267041773aede2d76b"
  },
  {
    "url": "/_nuxt/ea3338a798c90a0afdeb.js",
    "revision": "1b9601e16a0c0f5181bea05e374df3b2"
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
