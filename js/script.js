// VARS
var nomeUtente = prompt("Come ti chiami?");

var cognomeUtente = prompt("Cognome");

var colorePreferito = prompt("colore preferito?");

var numeroRandom = 21;

var unsafePassword = nomeUtente + cognomeUtente + colorePreferito + numeroRandom.toString();
// toString() non è necessario, ma comunque preferisco metterlo

// OUTPUT
document.getElementById('pwd').innerHTML = unsafePassword;