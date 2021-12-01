
// ADICIONE SUS LINKS FIREBASE AQUI
var firebaseConfig = {
  apiKey: "AIzaSyA7EszbUgXdQWS_snLMP2srIa6bWyP3Y6M",
  authDomain: "testeaula-25aa9.firebaseapp.com",
  databaseURL: "https://testeaula-25aa9-default-rtdb.firebaseio.com",
  projectId: "testeaula-25aa9",
  storageBucket: "testeaula-25aa9.appspot.com",
  messagingSenderId: "345316708710",
  appId: "1:345316708710:web:8f2f1bedef2b41f0d8f8a7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser()
{
  userName = document.getElementById("userName").value;
  firebase.database().ref("/").child(userName).update({
    purpose : "adicionar usuário"
  });
}


