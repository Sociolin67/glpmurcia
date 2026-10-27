// Service Worker — GLP Murcia PWA (v2)
// Cambie CACHE_NAME (v3, v4…) cada vez que quiera forzar la renovación de la copia offline.
const CACHE_NAME = 'glpmurcia-v3';
const ASSETS = [
  '/',
  '/index.html',
  '/index-en.html',
  '/noticias.html',
  '/noticias-en.html',
  '/logias.html',
  '/logias-en.html',
  '/contacto.html',
  '/contacto-en.html',
  '/404.html',
  '/logo.png',
  '/escudo-glp-murcia.png',
  '/icon-192x192.png',
  '/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => Promise.all(ASSETS.map(url => cache.add(url).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Red primero; si no hay conexión, copia guardada; si tampoco, página 404/offline.
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // no tocar GoatCounter, Google Fonts, Formspree…
  event.respondWith(
    fetch(req)
      .then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
        }
        return response;
      })
      .catch(() =>
        caches.match(req).then(hit =>
          hit || (req.mode === 'navigate' ? caches.match('/404.html') : undefined)
        )
      )
  );
});
