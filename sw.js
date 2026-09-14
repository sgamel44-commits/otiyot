// Minimal service worker: cache the app shell so Otiyot loads offline after the
// first visit. Cross-origin calls (Sefaria API, Google Fonts) always go to the
// network and are never cached here.
const CACHE = 'otiyot-v1';
const SHELL = ['./', './index.html', './manifest.json', './icon-192.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Only handle same-origin requests; let API/font requests pass through.
  if (url.origin !== self.location.origin) return;
  e.respondWith(
    caches.match(req).then(cached =>
      cached || fetch(req).catch(() => caches.match('./index.html'))
    )
  );
});
