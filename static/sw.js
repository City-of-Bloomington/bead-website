importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1ebf2ce2c41dace20382.js",
    "revision": "9549321e190f30a898963ed709657ab9"
  },
  {
    "url": "/_nuxt/9950538d0caa19d0b2af.js",
    "revision": "a4a06cf2dffc9b8d0e3a292c8b8cf9e2"
  },
  {
    "url": "/_nuxt/b756030d5a4dd4230179.js",
    "revision": "78bdcb09697221e2384e75e3211528cf"
  },
  {
    "url": "/_nuxt/d6fc6c159d1ff536fc8d.js",
    "revision": "8cb8b982a0aab42ff2073aa932c9b3d5"
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
