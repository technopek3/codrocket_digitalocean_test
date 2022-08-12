importScripts("https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyDKkdTUIFed-eOVin480ikowAqq9-qnjH0",
    authDomain: "codrocket-com.firebaseapp.com",
    databaseURL: "https://codrocket-com.firebaseio.com",
    projectId: "codrocket-com",
    storageBucket: "codrocket-com.appspot.com",
    messagingSenderId: "138356924616",
    appId: "1:138356924616:web:40409caa47975728b645fd",
    measurementId: "G-0G00TTYKF3"
});

const messaging = firebase.messaging();
const channel = new BroadcastChannel('fcm-messages');

messaging.onBackgroundMessage(function(payload) {
    channel.postMessage(payload);
});