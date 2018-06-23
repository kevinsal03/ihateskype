var firebase = require('firebase');
var firebaseApp = require('./firebase.js');

//Sign Up Handler

document.getElementById("signUpBtn").addEventListener('click', e=>{
  const email = document.getElementById("signUpEmailInput").value;
  const pass = document.getElementById("signUpPasswordInput").value;
  firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
   console.log(error.message);
  });
})

//Login Handeler
document.getElementById("loginBtn").addEventListener('click', e=>{
  const email = document.getElementById("loginEmailInput").value;
  const pass = document.getElementById("loginEmailInput").value;
  const promise = firebase.auth().signInWithEmailAndPassword(email, pass);
  promise.catch(e=>{ console.log(e.massage)})
})

//Logout Handler
document.getElementById("logOutBtn").addEventListener('click', e=>{
  firebase.auth().signOut();
  console.log('logged out')
})

//Check if Signed in
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("logOutBtn").show
    document.getElementById("userControlDiv").hide
  } else {
    // No user is signed in.
    document.getElementById("logOutBtn").hide
    document.getElementById("userControlDiv").show
  }
});
