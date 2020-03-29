const cacheName = "demo-site-v1"
const assets = [
    "/",
    "/index.html",
    "/assets/css/bootstrap.min.css",
    "/assets/css/brands.min.css",
    "/assets/css/fontawesome.min.css",
    "/assets/css/solid.min.css",
    "/assets/js/index.js",
    "/assets/js/bootstrap.bundle.min.js",
    "/assets/js/jquery-3.4.1.slim.min.js",
    "/assets/js/popper.min.js",
    "/assets/webfonts/fa-solid-900.woff2",
    "/assets/webfonts/fa-solid-900.woff",
    "/assets/webfonts/fa-solid-900.ttf",
    "/assets/webfonts/fa-brands-400.svg",
    "/assets/webfonts/fa-solid-900.eot",
    "/assets/webfonts/fa-brands-400.woff2",
    "/assets/webfonts/fa-brands-400.eot",
    "/assets/webfonts/fa-brands-400.woff",
    "/assets/webfonts/fa-solid-900.svg",
    "/assets/webfonts/fa-brands-400.ttf"

]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(cacheName).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener('fetch', event => {
    console.log('Fetch event for ', event.request.url);
    event.respondWith(
      caches.match(event.request)
      .then(response => {
        if (response) {
          console.log('Found ', event.request.url, ' in cache');
          return response;
        }
        console.log('Network request for ', event.request.url);
        return fetch(event.request).then(response => {
            // TODO 5 - Respond with custom 404 page
            return caches.open(staticCacheName).then(cache => {
              cache.put(event.request.url, response.clone());
              return response;
            });
          }); 
      }).catch(error => {
  
        // TODO 6 - Respond with custom offline page
  
      })
    );
  });
  self.addEventListener('activate', event => {
    console.log('Activating new service worker...');
  
    const cacheWhitelist = [cacheName];
  
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });