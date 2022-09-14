"use strict";

//ESERCIZIO 1 - slide48
// Crea una funzione che accetta due numeri
// come argomenti e ne restituisce la moltiplicazione.

function moltiplicazione(a, b) {
  const prodotto = a * b;
  console.log(prodotto);
}
moltiplicazione(2, 10);

//ESERCIZIO 2 - slide 49
// Crea una funzione che accetta un numero come unico argomento
// e restituisce true se è minore o uguale a zero, altrimenti restituisce false.

function lessThanOrEqualToZero(a) {
  if (a <= 0) {
    return true;
  } else {
    return false;
  }
}
console.log(lessThanOrEqualToZero(5));

//ESERCIZIO 3 - slide 50
// Creare una funzione che prenda l'età in anni e restituisca l'età in giorni.

function etaGiorni(e) {
  const eGiorni = e * 365;
  console.log(eGiorni);
}
etaGiorni(22);

//ESERCIZIO 4 - slide 51
// polli = 2 zampe, mucche = 4 zampe, maiali = 4 zampe
// dà un subtotale per ogni specie

function animalsFeet(p, mu, ma) {
  const pFeet = 2 * p;
  const muFeet = 4 * mu;
  const maFeet = 4 * ma;
  console.log(pFeet + muFeet + maFeet);
}
animalsFeet(2, 3, 5);

//ESERCIZIO 5 - slide 52
