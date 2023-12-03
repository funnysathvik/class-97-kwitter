var firebaseConfig = {
      apiKey: "AIzaSyD4Talg8b5vsilEK_YfPcRZxE4gr2c--I0",
      authDomain: "kwitter-5c34c.firebaseapp.com",
      databaseURL: "https://kwitter-5c34c-default-rtdb.firebaseio.com",
      projectId: "kwitter-5c34c",
      storageBucket: "kwitter-5c34c.appspot.com",
      messagingSenderId: "425177677992",
      appId: "1:425177677992:web:2d1489e4fc9a5feeae829d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("helloinput");
    document.getElementById("user_name").innerHTML="Welcome "+username+" !";
    function addroom(){
     room_name= document.getElementById("add_room").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    }
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_names -" + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirecttoRoomName(this.id)' >#" +Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
function redirecttoRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}