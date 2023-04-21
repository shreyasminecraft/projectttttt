
const firebaseConfig = {
      apiKey: "AIzaSyBzkiOdHbxGU4C-XFYUPp6l1QbtEEREJXA",
      authDomain: "qwittttter.firebaseapp.com",
      databaseURL: "https://qwittttter-default-rtdb.firebaseio.com",
      projectId: "qwittttter",
      storageBucket: "qwittttter.appspot.com",
      messagingSenderId: "315840308963",
      appId: "1:315840308963:web:5201bceba7f428766b07d6"
    };
    firebase.initializeApp(firebaseConfig);
    
    var username = localStorage.getItem("user");
    document.getElementById("welcome_message").innerHTML = "Welcome  " + username+ "!";

