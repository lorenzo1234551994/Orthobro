/* Orthoguide — Service Worker v2
   ------------------------------------------------------------------
   IMPORTANTE: a ogni modifica di index.html cambia CACHE_VERSION
   (orthoguide-v1 -> orthoguide-v2 -> ...). È così che agli utenti
   che hanno già installato l'app compare l'avviso "Aggiorna".
   ------------------------------------------------------------------ */

const CACHE_VERSION = 'orthoguide-v1';

const PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-192.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
  './favicon-32.png'
];

/* INSTALL — precarica lo scheletro dell'app.
   Niente skipWaiting() qui: il nuovo SW resta in attesa finché
   l'utente non tocca "Aggiorna", così i contenuti non cambiano
   sotto le dita mentre sta leggendo. */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) =>
      // addAll fallisce tutto se un file manca: li aggiungo uno a uno
      Promise.all(
        PRECACHE.map((url) =>
          cache.add(new Request(url, { cache: 'reload' })).catch(() => null)
        )
      )
    )
  );
});

/* Il pulsante "Aggiorna" del kit invia questo messaggio */
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// ACTIVATE — elimina le cache vecchie
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// FETCH
self.addEventListener('fetch', (event) => {
  const req = event.request;

  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;

  // Navigazione (apertura app): rete prima, cache come rete di sicurezza
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((c) => c.put('./index.html', copy));
          return res;
        })
        .catch(() =>
          caches.match('./index.html').then((r) => r || caches.match('./'))
        )
    );
    return;
  }

  // Tutto il resto: cache prima, poi rete
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((c) => c.put(req, copy));
        }
        return res;
      });
    })
  );
});
