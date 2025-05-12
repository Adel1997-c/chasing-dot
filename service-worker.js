self.addEventListener("install", e => {
    self.skipWaiting();
});

self.addEventListener("fetch", e => {
    // Just let the browser handle requests normally
});
