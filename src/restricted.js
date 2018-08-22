if(store.get('token') == undefined){
  window.location.href = "index.html";
} else {
  console.log("logged in");
  console.log(store.get('token'));
  console.log(store.get('user'));
  console.log(store.get('uid'));
}
function signOut(){
  store.delete('token');
  store.delete('user');
  store.delete('uid')
  window.location = window.location;
}
