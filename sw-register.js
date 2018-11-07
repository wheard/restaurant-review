if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
    .then(function() {
      console.log('Registration complete');
    })
    .catch(function() {
      console.log('Registration failed');
    });
}
