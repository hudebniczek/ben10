
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('qr-app').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icon.png',
        './libs/html5-qrcode.min.js'
      ]);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
