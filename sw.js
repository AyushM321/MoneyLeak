const CACHE_NAME = "moneyleak-web-v0.7";
const APP_SHELL = [
  "/MoneyLeak/",
  "/MoneyLeak/index.html",
  "/MoneyLeak/manifest.json",
  "/MoneyLeak/version.json",
  "/MoneyLeak/icon-192.png",
  "/MoneyLeak/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key.startsWith("moneyleak-web-") && key !== CACHE_NAME)
        .map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  const documentRequest = request.mode === "navigate" ||
    url.pathname.endsWith("/index.html") ||
    url.pathname.endsWith("/version.json");

  if (documentRequest) {
    event.respondWith(
      fetch(request, { cache: "no-store" }).then(response => {
        if (response.ok) caches.open(CACHE_NAME).then(cache => cache.put(request, response.clone()));
        return response;
      }).catch(() => caches.match(request).then(cached => cached || caches.match("/MoneyLeak/index.html")))
    );
  } else {
    event.respondWith(
      caches.match(request).then(cached => cached || fetch(request).then(response => {
        if (response.ok) caches.open(CACHE_NAME).then(cache => cache.put(request, response.clone()));
        return response;
      }))
    );
  }
});
