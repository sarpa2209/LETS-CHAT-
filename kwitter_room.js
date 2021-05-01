
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBl9O4PYrMkNjkGup8FtKC6zBnA8aPlJDc",
      authDomain: "kwitter-db914.firebaseapp.com",
      databaseURL: "https://kwitter-db914-default-rtdb.firebaseio.com",
      projectId: "kwitter-db914",
      storageBucket: "kwitter-db914.appspot.com",
      messagingSenderId: "803173121337",
      appId: "1:803173121337:web:0ad38faa7066b33678fce8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+user_name+"!";

    function addroom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding roomname"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("roomname-"+Room_names);
       row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>"
      //Start code
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
      localStorage.removeItem("room_name")
      localStorage.removeItem("user_name")
      window.location="index.html"
}


