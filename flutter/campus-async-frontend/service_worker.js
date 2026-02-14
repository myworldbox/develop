/*
  Minimal service worker inspired by Metahkg.
  - precaches nothing (Flutter build artifacts are hashed),
  - caches API responses using NetworkFirst,
  - caches static assets with StaleWhileRevalidate.
*/

const STATIC_CACHE = 'app-static-v1';
const API_CACHE = 'app-api-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Stale-while-revalidate for static assets (script, css, images)
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // API: NetworkFirst
  if (url.pathname.startsWith('/api')) {
    event.respondWith(networkFirst(req));
    return;
  }

  // static/asset resources on same origin: StaleWhileRevalidate
  if (req.destination === 'script' || req.destination === 'style' || req.destination === 'image') {
    event.respondWith(staleWhileRevalidate(req));
    return;
  }
  // default: passthrough
});

async function networkFirst(req) {
  try {
    const response = await fetch(req);
    if (response && response.ok) {
      const cache = await caches.open(API_CACHE);
      cache.put(req, response.clone()).catch(() => {});
    }
    return response;
  } catch (e) {
    const cache = await caches.open(API_CACHE);
    const cached = await cache.match(req);
    if (cached) return cached;
    return new Response(null, { status: 503, statusText: 'Service Unavailable' });
  }
}

async function staleWhileRevalidate(req) {
  const cache = await caches.open(STATIC_CACHE);
  const cached = await cache.match(req);
  const networkFetch = fetch(req).then((response) => {
    if (response && response.ok) cache.put(req, response.clone()).catch(() => {});
    return response;
  }).catch(() => null);

  return cached || (await networkFetch) || new Response(null, { status: 504 });
}

// allow client to skip waiting
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
