if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(console.log('Service Worker: Registered'));
}

window.addEventListener('offline', function(event){
    console.log("You lost connection.");
    window.location.href = "offline.html";
});

window.addEventListener('online', function(event){
    console.log("You are connected.");
    window.location.href = "index.html";
});