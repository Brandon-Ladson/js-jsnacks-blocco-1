// Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
// una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale

// arry di partenza
var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];

// nuovo array in cui inserire la nuova proprietà degli oggetti
var arrayObjCopia = arrayObj;

// ciclo for per ciclare il nuovo array e per aggiungere ai suoi oggetti la nuova proprietà
for (var i = 0; i < arrayObjCopia.length; i++) {

  arrayObjCopia[i].position = generatoreLettereRandom();

}

console.log(arrayObjCopia);

// FUNZIONI
// funzione per generare lettere random
function generatoreLettereRandom() {

  var letteraRandom = "";

  var listaLettere = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < listaLettere.length; i++) {
    letteraRandom = listaLettere.charAt(Math.floor(Math.random() * listaLettere.length));
  }

  return letteraRandom;

}
