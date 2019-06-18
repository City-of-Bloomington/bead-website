importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1ebf2ce2c41dace20382.js",
    "revision": "9549321e190f30a898963ed709657ab9"
  },
  {
    "url": "/_nuxt/2354e3b430aae9d9f169.js",
    "revision": "18245c143553c1242e0ac67a6f219aaf"
  },
  {
    "url": "/_nuxt/a86d1ecda0fa0929e53f.js",
    "revision": "be4338b94d72dfffc2439ce3f312798c"
  },
  {
    "url": "/_nuxt/b756030d5a4dd4230179.js",
    "revision": "78bdcb09697221e2384e75e3211528cf"
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
