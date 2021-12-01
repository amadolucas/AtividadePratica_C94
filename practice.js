
// ADICIONE SUS LINKS FIREBASE AQUI

function addUser()
{
  userName = document.getElementById("userName").value;
  firebase.database().ref("/").child(userName).update({
    purpose : "adicionar usuário"
  });
}


