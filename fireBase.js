var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyCtyfh8QMQ5EHrfvWCJcpUXRwMQ8_sdLTg",
  authDomain: "login-with-firebase-2f68e.firebaseapp.com",
  databaseUrl: "https://login-with-firebase-2f68e-default-rtdb.firebaseio.com",
  projectId: "login-with-firebase-2f68e",
  storageBucket: "login-with-firebase-2f68e.appspot.com",
  messagingSenderId: "971487506563",
  appId: "1:971487506563:web:11c1bbb92fe88786242bb6",
  measurementId: "G-73SZ28NLPX"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


