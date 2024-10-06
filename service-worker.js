self.addEventListener('push', function(event) {
    const options = {
        body: event.data ? event.data.text() : 'Default notification body',
        icon: 'https://via.placeholder.com/128' // Your icon URL
    };
    event.waitUntil(
        self.registration.showNotification('Hello World', options)
    );
});
