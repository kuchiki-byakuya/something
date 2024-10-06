document.getElementById('notifyBtn').addEventListener('click', function() {
    console.log("Button clicked"); // Log when button is clicked

    if ("Notification" in window) {
        console.log("Notification API is supported");

        if (Notification.permission === 'granted') {
            console.log("Permission granted");
            notify();
        } else {
            console.log("Requesting notification permission");
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    console.log("Permission granted after request");
                    notify();
                } else {
                    console.log("Permission denied");
                }
            });
        }
    } else {
        console.log("Notification not supported");
    }
});

function notify() {
    const notification = new Notification("Hello World", {
        body: "This is your device notification!",
        icon: "https://via.placeholder.com/128" // Example icon
    });
    console.log("Notification shown:", notification);
}
