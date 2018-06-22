import { keys } from './keys';
var firebase = require('firebase');

//define keys from keys.js
var firebaseApiKey = keys.FIREBASE_KEY;
var firebaseMessagingSenderId = keys.FIREBASE_MSG_SEND_ID;

// Initialize Firebase
var config = {
  apiKey: firebaseApiKey,
  authDomain: "ihateskype-4d692.firebaseapp.com",
  databaseURL: "https://ihateskype-4d692.firebaseio.com",
  projectId: "ihateskype-4d692",
  storageBucket: "ihateskype-4d692.appspot.com",
  messagingSenderId: firebaseMessagingSenderId
};
firebase.initializeApp(config);
