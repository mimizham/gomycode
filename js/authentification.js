var email, mdp;
var connect = () => {
    email = document.getElementById('email').value;
    mdp = document.getElementById('pass').value;

    if (email == 'contact@google.com' && mdp == '123456')
        alert("Connecté");
    else
    alert("User ou mot de passe incorrect");
};


document.getElementById('btn').onclick = connect;