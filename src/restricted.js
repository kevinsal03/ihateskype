if(store.get('token') == undefined){
  window.location.href = "index.html";
} else {
  console.log("logged in");
  console.log(store.get('token'));
  console.log(store.get('user'));
}
