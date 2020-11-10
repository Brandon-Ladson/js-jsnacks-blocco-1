// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente

// array di partenza
var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

// richesta numero iniziale
var numeroMin = parseInt(prompt("scrivi un numero da 0 a 6"));

// richesta numero finale
var numeroMax = parseInt(prompt("scrivi un numero da 0 a 6"));

// nuovo array da riempire con gli elementi selezionati
var newArray = [];

// versione con gli estremi esclusi
newArray.push(myArray.slice(numeroMin, numeroMax -1));

// versione con gli estremi inclusi
// newArray.push(myArray.slice(numeroMin -1, numeroMax));

console.log(newArray);
