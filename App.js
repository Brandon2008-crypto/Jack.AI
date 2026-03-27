let currentUser = null;

function register(){
let u = user.value;
let p = pass.value;

localStorage.setItem(u,p);
alert("Compte créé !");
}

function login(){
let u = user.value;
let p = pass.value;

if(localStorage.getItem(u)==p){
currentUser = u;
login.style.display="none";
app.style.display="block";
}
else{
alert("Erreur");
}
}

function send(){
let msg = document.getElementById("msg").value;

chat.innerHTML += "<p><b>Toi:</b> "+msg+"</p>";

let reply = "Je suis Jack IA 🤖";

if(msg.includes("bonjour")) reply="Salut 👋";
if(msg.includes("ça va")) reply="Oui et toi ?";
if(msg.includes("nom")) reply="Je suis Jack IA";

chat.innerHTML += "<p><b>Jack:</b> "+reply+"</p>";
}
