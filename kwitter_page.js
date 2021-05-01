//YOUR FIREBASE LINKS
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

    room_name=localStorage.getItem("room_name")
    user_name=localStorage.getItem("user_name")

    function send(){
          msg=document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0

      });
      document.getElementById("msg").value="";
      
    }
    

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];

//End code
      } });  }); }
getData();
