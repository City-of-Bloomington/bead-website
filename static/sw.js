importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/4c8f63f2948303c02dbe.js",
    "revision": "320d87fe030cbeb2d79d6986e1f8d7a2"
  },
  {
    "url": "/_nuxt/99b92af45a63fcb3e2d2.js",
    "revision": "d610d2288ff2fff4cf9040100374d64f"
  },
  {
    "url": "/_nuxt/a13a280ecb952ceaf432.js",
    "revision": "52ead9e33ea762ef62d118009f16b489"
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
