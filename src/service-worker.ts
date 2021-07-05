/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

import { clientsClaim } from "workbox-core"
import { ExpirationPlugin } from "workbox-expiration"
import { precacheAndRoute, createHandlerBoundToURL } from "workbox-precaching"
import { registerRoute } from "workbox-routing"
import { StaleWhileRevalidate, CacheFirst } from "workbox-strategies"
import { NetworkFirst } from "workbox-strategies"

declare const self: ServiceWorkerGlobalScope

clientsClaim()

let manifest = self.__WB_MANIFEST

/* let urlPrecache = {
  url: "https://services.smartrancagua.com/rancagua/applications",
  revision: "1",
}
manifest.push(urlPrecache)
urlPrecache = {
  url: "https://services.smartrancagua.com/rancagua/tweets",
  revision: "2",
} 
manifest.push(urlPrecache)*/

precacheAndRoute(manifest)

const fileExtensionRegexp = new RegExp("/[^/?]+\\.[^/]+$")
registerRoute(
  // Return false to exempt requests from being fulfilled by index.html.
  ({ request, url }: { request: Request; url: URL }) => {
    // If this isn't a navigation, skip.
    if (request.mode !== "navigate") {
      return false
    }

    // If this is a URL that starts with /_, skip.
    if (url.pathname.startsWith("/_")) {
      return false
    }

    // If this looks like a URL for a resource, because it contains
    // a file extension, skip.
    if (url.pathname.match(fileExtensionRegexp)) {
      return false
    }

    // Return true to signal that we want to use the handler.
    return true
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + "/index.html"),
)

registerRoute(
  /\.(?:png|gif|jpg|svg|ico)$/,
  new StaleWhileRevalidate({
    cacheName: "images-cache",
    plugins: [new ExpirationPlugin({ maxEntries: 50 })],
  }),
)

registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) =>
    url.pathname.endsWith("/tweets") ||
    url.pathname.endsWith("/applications") ||
    url.pathname.endsWith("/events"),
  new StaleWhileRevalidate({
    cacheName: "smart-rancagua-cache",
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  }),
)

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting()
  }
})

// Any other custom service worker logic can go here.
