//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+"onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";

row = name_with_tag +message_with_tag + like_button +span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      like:0,
     message:msg,
     name:username
})
document.getElementById("msg").value="";

}
function updateLike(message_id){
      console.log("clicked on like button"+message_id);
      button_id=message_id
      likes = document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
      like:updated_likes
});
}
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}