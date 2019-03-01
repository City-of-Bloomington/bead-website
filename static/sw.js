importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/4718f196c878590d2e58.js",
    "revision": "01e5ad7186f379cda1e21afc064a3800"
  },
  {
    "url": "/_nuxt/6e3f7bc7c43a8dec0c18.js",
    "revision": "e54c90be37d81bf66bf08a069086931b"
  },
  {
    "url": "/_nuxt/aee848827a6122b8eda3.js",
    "revision": "977d2d1f4dfc929d4fb594a0c888d592"
  },
  {
    "url": "/_nuxt/c0188f3b75d88cda2886.js",
    "revision": "19e3bbc91ce91e8c07d2b84c53a0f18c"
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
