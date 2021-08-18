/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.
"use strict"
import { clientsClaim } from "workbox-core"
import { ExpirationPlugin } from "workbox-expiration"
import { precacheAndRoute, createHandlerBoundToURL } from "workbox-precaching"
import { registerRoute } from "workbox-routing"
import { StaleWhileRevalidate, CacheFirst } from "workbox-strategies"
import { NetworkFirst } from "workbox-strategies"

declare const self: ServiceWorkerGlobalScope

clientsClaim()

precacheAndRoute(self.__WB_MANIFEST)

const fileExtensionRegexp = new RegExp("/[^/?]+\\.[^/]+$")
registerRoute(({ request, url }: { request: Request; url: URL }) => {
  // If this isn't a navigation, skip.
  if (request.mode !== "navigate") {
    return false
  }
  if (url.pathname.startsWith("/_")) {
    return false
  }
  if (url.pathname.match(fileExtensionRegexp)) {
    return false
  }

  // Return true to signal that we want to use the handler.
  return true
}, createHandlerBoundToURL(process.env.PUBLIC_URL + "/index.html"))

registerRoute(
  ({ url }) =>
    url.origin === self.location.origin &&
    (url.pathname.endsWith(".png") ||
      url.pathname.endsWith(".ico") ||
      url.pathname.endsWith(".jpg") ||
      url.pathname.endsWith(".jpeg")),
  new StaleWhileRevalidate({
    cacheName: "images",
    plugins: [new ExpirationPlugin({ maxEntries: 50 })],
  }),
)
registerRoute(
  ({ url }) => url.origin === "https://pbs.twimg.com",
  new StaleWhileRevalidate({
    cacheName: "twitter-cache",
    plugins: [new ExpirationPlugin({ maxEntries: 50 })],
  }),
)
registerRoute(
  ({ url }) => url.origin === "https://services.smartrancagua.com",
  new StaleWhileRevalidate({
    cacheName: "smart-rancagua-cache",
    plugins: [new ExpirationPlugin({ maxEntries: 50 })],
  }),
)
registerRoute(
  ({ url }) => url.origin === "https://webviews.smartrancagua.com",
  new StaleWhileRevalidate({
    cacheName: "webviews-smart-rancagua-cache",
    plugins: [new ExpirationPlugin({ maxEntries: 50 })],
  }),
)

registerRoute(
  ({ url }) => url.origin === "https://api.smartrancagua.com",
  new StaleWhileRevalidate({
    cacheName: "api-smart-rancagua-cache",
    plugins: [new ExpirationPlugin({ maxEntries: 50 })],
  }),
)

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting()
  }
})

self.addEventListener("install", function (event) {
  // The promise that skipWaiting() returns can be safely ignored.
  self.skipWaiting()
})

self.addEventListener("push", function (event) {
  const title = "Rancagua Digital"
  const { data } = event

  const text = data ? data.text() : ""
  const options = { body: text }
  event.waitUntil(self.registration.showNotification(title, options))
})

// Cierra la notificacion
self.addEventListener("notificationclose", (e) => {
  console.log("Notificación cerrada", e)
})

self.addEventListener("notificationclick", (e) => {
  const notificacion = e.notification
  const accion = e.action

  console.log({ notificacion, accion })
  console.log(notificacion)
  console.log(accion)

  // e.waitUntil(respuesta)
})
