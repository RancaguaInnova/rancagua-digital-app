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
import { StaleWhileRevalidate } from "workbox-strategies"

const self = this

clientsClaim()

// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting()
  }
})
const cacheName = "RancaguaDigital"
const appShellFiles = ["/index.html"]

// Fetching content using Service Worker
self.addEventListener("fetch", (e) => {
  e.respondWith(
    (async () => {
      const r = await caches.match(e.request)
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`)
      if (r) return r
      const response = await fetch(e.request)
      const cache = await caches.open(cacheName)
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`)
      cache.put(e.request, response.clone())
      return response
    })(),
  )
})

let deferredPrompt // Allows to show the install prompt
const installButton = document.getElementById("install_button")

self.addEventListener("beforeinstallprompt", (e) => {
  console.log("beforeinstallprompt fired")
  // Prevent Chrome 76 and earlier from automatically showing a prompt
  e.preventDefault()
  // Stash the event so it can be triggered later.
  deferredPrompt = e
  // Show the install button
  installButton.hidden = false
  installButton.addEventListener("click", installApp)
})
function installApp() {
  // Show the prompt
  deferredPrompt.prompt()
  installButton.disabled = true

  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === "accepted") {
      console.log("PWA setup accepted")
      installButton.hidden = true
    } else {
      console.log("PWA setup rejected")
    }
    installButton.disabled = false
    deferredPrompt = null
  })
}

// Any other custom service worker logic can go here.
