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

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.open(cacheName).then(cache=>{
            return fetch(fetchEvent.request).then(response=>{
                cache.put(fetchEvent.request, response.clone())
                return response;
            })
        })
    )
})