// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.
var listaBici = [

  {
    "nome": "mountain",
    "peso": 10
  },

  {
    "nome": "bmx",
    "peso": 7
  },

  {
    "nome": "corsa",
    "peso": 3
  },

  {
    "nome": "grazziella",
    "peso": 5
  }

];

var pesoMinore = listaBici[0];

for (var i = 0; i < listaBici.length; i++) {

  if (listaBici[i].peso < pesoMinore.peso) {
    pesoMinore = listaBici[i];
  }

}

console.log("con un peso di " + pesoMinore.peso + " kg " + "la bici più leggera è: " + pesoMinore.nome);
