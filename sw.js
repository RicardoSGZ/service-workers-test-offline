var CACHE_NAME = 'mywebcache-v1';
var urlsToCache = [
  //Files to cache
  '/',
  'index.html',
  'favicon.png',
  'res/js/main.js',
  'res/jquery/jquery-3.4.1.min.js',
  'res/css/main.css'
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
          .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
          })
      );
  });

  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });