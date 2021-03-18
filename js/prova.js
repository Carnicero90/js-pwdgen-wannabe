/*  commento
    multi
    linea
*/

var nomeUtente = prompt("Come ti chiami?");

var cognomeUtente = prompt("Cognome");

var colorePreferito = prompt("colore preferito?");

var numeroRandom = 21;

var unsafePassword = nomeUtente + cognomeUtente + colorePreferito + numeroRandom;

document.getElementById('pwd').innerHTML = unsafePassword;