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
function matchHouses(n) {
  const nFiammiferi = 6 * n - (n - 1);

  console.log(`Numero di fiammiferi ${nFiammiferi}`);
}
matchHouses(87);

//ESERCIZIO 6 - slide 53
// 1 + 2 + 3 + 4 = 5

function addUp(n) {
  let somma = 0;
  for (let i = 0; i <= n; i++) {
    somma = somma + i;
  }
  console.log(somma);
}
addUp(13);

//ESERCIZIO 7 - slide 53
// Dato un numero compreso tra 1 e 26

function letterAtPosition(l) {
  if (l % 2 === 0 && l >= 1 && l <= 26) {
    const lettereAlfabeto = "abcdefghijklmnopqrstuvwxyz";
    // const lA = lettereAlfabeto.split("");
    const lA = [...lettereAlfabeto];
    console.log(`La lettera che corrisponde al tuo numero è ${lA[l - 1]}`);
  } else {
    console.log("invalid");
  }
}
letterAtPosition(26);

//ESERCIZIO 8 - Trova lo sconto - slide 57
// Crea una funzione che accetta due argomenti:
//il prezzo originale
//la percentuale di sconto come numeri interi
//restituisce il prezzo finale dopo lo sconto.

function dis(prezzo, percentuale) {
  const valorePercentuale = percentuale / 100;
  const valore = prezzo - prezzo * valorePercentuale;
  console.log(`${valore.toFixed(1)} €`);
}
dis(99, 20);

//ESERCIZIO 9 -Calcolatrice di base - slide 58
// Crea una funzione che accetta due numeri
//un operatore matematico   / *
// eseguirà un calcolo con i numeri indicati.

function calculator(num1, operator, num2) {
  if (operator === "+") {
    console.log(num1 + num2);
  } else if (operator === "-") {
    console.log(num1 - num2);
  } else if (operator === "*") {
    console.log(num1 * num2);
  } else if (operator === "/") {
    if (num2 > 0) {
      console.log(num1 / num2);
    } else {
      console.log("Impossibile dividere per 0!");
    }
  } else {
    console.log("Puoi inserire solo + - / *");
  }
}
calculator(4, "/", 0);

//ESERCIZIO 10 - Fare la somma di N numeri

function sumArray(arr) {
  let somma = 0;
  for (let i = 0; i < arr.length; i++) {
    somma = somma + arr[i];
  }
  console.log(somma);
}

sumArray([1, 2, 4]);

//Esercizio 11 - Quante volte è vero?
function countTrue(arr) {
  let somma = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) somma++;
  }
  console.log(somma);
}
countTrue([true, false, false, true, false]);

// ES. Validare un’e-mail

function validateEmail(e) {
  if (e.includes("@") && e.includes(".")) {
    const ePrima = e.split("@");
    if (ePrima[0].length > 0) {
      if (ePrima[1].includes(".")) {
        return true;
      } else {
        return false;
      }
    } else {
      return "Il caraterrere non è valido manca lettera prima di @";
    }
  } else {
    return "Devi inserire una @ o un .";
  }
}
console.log(validateEmail("aaa.@gmailcom"));

//Esercizio 11 - Clona un array
// function flatte(arr){
//     const arr2 = [];
//     for (let i = 0; i < arr.length; i++){
//         arr =[...arr2]
//     }
// }
