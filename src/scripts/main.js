//Service Worker
if (navigator.serviceWorker) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').then(reg => {
        }).catch(swErr => {
            console.log(`Service Worker Installation Error: ${swErr}}`)
        });
    });
}