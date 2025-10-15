const CACHE_NAME = 'iolelearn-v1';
const STATIC_CACHE_URLS = [
  '/',
  '/playground',
  '/dashboard',
  '/courses',
  '/static/css/app/layout.css',
  '/static/chunks/main-app.js',
  '/static/chunks/app-pages-internals.js'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(STATIC_CACHE_URLS);
      })
      .catch(error => {
        console.log('Cache installation failed:', error);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - serve from cache when possible
self.addEventListener('fetch', event => {
  // Only cache GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request)
          .then(response => {
            // Don't cache non-successful responses
            if (!response.ok) return response;

            // Clone the response for caching
            const responseClone = response.clone();

            // Cache successful responses
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseClone);
              });

            return response;
          })
          .catch(() => {
            // Return offline fallback if available
            if (event.request.destination === 'document') {
              return caches.match('/');
            }
          });
      })
  );
});