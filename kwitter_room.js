
var firebaseConfig = {
      apiKey: "AIzaSyCI088XODgwZdZo-P_WfjRlE3wT_n1jWxI",
      authDomain: "kwitter-20f23.firebaseapp.com",
      databaseURL: "https://kwitter-20f23-default-rtdb.firebaseio.com",
      projectId: "kwitter-20f23",
      storageBucket: "kwitter-20f23.appspot.com",
      messagingSenderId: "321255446531",
      appId: "1:321255446531:web:d984679477e5eaf2eed636"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
   function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       
      //Start code
console.log("Room_Name-"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}