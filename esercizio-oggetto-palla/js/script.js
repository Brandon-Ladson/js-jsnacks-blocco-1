// 1A:
// Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla
// Peso = 10
// 1B:
// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
// 10:31 consegna

var palla = {
  "nome": "palla",
  "peso": 10
};

console.log(palla);

var pesoPallaUtente = parseInt(prompt("inserisci il peso che vuoi dare alla palla"));

palla.peso = pesoPallaUtente;

console.log(palla);
