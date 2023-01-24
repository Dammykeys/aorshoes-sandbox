//instal service worker
self.addEventListener("install", e => {
    e.waitUntil(
        //create cache called static
        caches.open("static").then(cache => {
            //upload into cache
            return cache.addAll([
                "./",
                "./src/styles/style.css",
                "./src/scripts/main.js",
                "./images/aor_logo308.png",
                "./images/aor_logo192.png",
                "./images/aor_logo384.png",
            ]).then(() => self.skipWaiting());
        })
    );
})

self.addEventListener("fetch", e => {
    e.respondWith(
        //create cache called static
        caches.match(e.request).then(response => {
            //upload into cache
            console.log("new sw!");
            return response || fetch(e.request);
        })
    );
})