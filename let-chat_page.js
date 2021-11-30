const firebaseConfig = {
    apiKey: "AIzaSyAwNgtnDxLcllGUpKU_UEYtXHLeMxBoJi8",
    authDomain: "let-chat-313b6.firebaseapp.com",
    databaseURL: "https://let-chat-313b6-default-rtdb.firebaseio.com",
    projectId: "let-chat-313b6",
    storageBucket: "let-chat-313b6.appspot.com",
    messagingSenderId: "692251292857",
    appId: "1:692251292857:web:e064812134ce149cdc5768"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg=document.getElementById("msg").value;

  firebase.database().ref(room_name).push({
        name : user_name,
        msg : msg,
        like :0  
      })    
}

