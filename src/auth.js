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
firebase.auth().onAuthStateChanged(user=>{
  if(user) {
    document.getElementById("logOutBtn").classList.remove('hide')
    document.getElementById("userControlDiv").classlist.add('hide')
  } else {
    document.getElementById("logOutBtn").classList.add('hide')
    document.getElementById("userControlDiv").classlist.remove('hide')

  }
})
