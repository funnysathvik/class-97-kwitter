function login(){
    helloinput=document.getElementById("helloinput").value;
    localStorage.setItem("helloinput", helloinput);
    window.location = "kwitter_room.html";
}