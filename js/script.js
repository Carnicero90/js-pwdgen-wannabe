// VARS
var nomeUtente = prompt("Come ti chiami?") || "";

var cognomeUtente = prompt("Cognome") || "";

var colorePreferito = prompt("colore preferito?") || "";

var numeroRandom = (21).toString();

var unsafePassword = nomeUtente + cognomeUtente + colorePreferito + numeroRandom;
// OUTPUT
document.getElementById('pwd').innerHTML = unsafePassword;