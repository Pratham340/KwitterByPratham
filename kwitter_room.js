
 var firebaseConfig = {
      apiKey: "AIzaSyCUSMJScnqRbwhZu0_Zh8e7aFUM28l3WNI",
      authDomain: "kwitter-83c3c.firebaseapp.com",
      databaseURL: "https://kwitter-83c3c-default-rtdb.firebaseio.com",
      projectId: "kwitter-83c3c",
      storageBucket: "kwitter-83c3c.appspot.com",
      messagingSenderId: "708710413825",
      appId: "1:708710413825:web:a3006c54300cd4e5673200",
      measurementId: "G-GYTMM3ZYC9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= "<h1>Welcome "+user_name+"!</h1>";

    function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); }
getData();

function addRoom(){
  room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
  purpose: "adding room name"
})
localStorage.setItem("room_name", room_name);
window.location= "kwitter_page.html";
}

function redirectToRoomName(name){
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
