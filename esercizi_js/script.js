"use strict";

//ESERCIZIO 1 - slide48
console.log("--Esercizio 1--");
// Crea una funzione che accetta due numeri
// come argomenti e ne restituisce la moltiplicazione.

function moltiplicazione(a, b) {
  const prodotto = a * b;
  console.log(prodotto);
}
moltiplicazione(2, 10);

//ESERCIZIO 2 - slide 49
console.log("--Esercizio 2--");
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
console.log("--Esercizio 3--");
// Creare una funzione che prenda l'età in anni e restituisca l'età in giorni.

function etaGiorni(e) {
  const eGiorni = e * 365;
  console.log(eGiorni);
}
etaGiorni(22);

//ESERCIZIO 4 - slide 51
console.log("--Esercizio 4--");
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
console.log("--Esercizio 5--");
function matchHouses(n) {
  const nFiammiferi = 6 * n - (n - 1);

  console.log(`Numero di fiammiferi ${nFiammiferi}`);
}
matchHouses(87);

//ESERCIZIO 6 - slide 53
console.log("--Esercizio 6--");
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
console.log("--Esercizio 7--");
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
console.log("--Esercizio 8--");
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
console.log("--Esercizio 9--");

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
console.log("--Esercizio 10--");

function sumArray(arr) {
  let somma = 0;
  for (let i = 0; i < arr.length; i++) {
    somma = somma + arr[i];
  }
  console.log(somma);
}

sumArray([1, 2, 4]);

//Esercizio 11 - Quante volte è vero?
console.log("--Esercizio 11--");
function countTrue(arr) {
  let somma = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) somma++;
  }
  console.log(somma);
}
countTrue([true, false, false, true, false]);

// ES. 12 Validare un’e-mail
console.log("--Esercizio 12--");

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

//Esercizio 13 - Clona un array
console.log("--Esercizio 13--");
const insieme = [
  [2, 4],
  [5, 6],
];

function flatte(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.push(...arr[i]);
  }
  console.log(arr2);
}
flatte(insieme);

// Esercizio 14 - Piegare un pezzo di carta
console.log("--Esercizio 14 - Piegare un pezzo di carta--");
//pieghe -> n numero di volte
//carta inizia con uno spessore di 0,5 mm
function numLayers(p) {
  const spessoreInput = 0.5 / 100;
  const spessoreTot = 2 ** p * spessoreInput;
  console.log(spessoreTot);
}
numLayers(21);

// Esercizio 15 -- Sasso, carta, forbici
console.log("--Esercizio 15 - Sasso, carta, forbici--");
// sasso batte le forbici
// Le forbici battono la carta
// La carta batte il sasso
let puntiP1 = 0;
let puntiP2 = 0;
const puntate = 3;
let p1, p2;
for (let i = 0; i < puntate; i++) {
  console.log(`Round ${i + 1}° `);

  p1 = Math.floor(Math.random() * puntate);
  if (p1 == 0) {
    p1 = "sasso";
  } else if (p1 == 0) {
    p1 = "carta";
  } else if ((p1 = "forbici")) {
    p1 = "forbici";
  }
  //Se sei coraggios* accendi il prompt e cancella p2 = 'forbici' ;)
  //   p2 = prompt("Scegli tra sasso, carta, forbici");
  p2 = "forbici";

  if (p1 === p2) {
    console.log("Pari");
  } else if (
    (p2 === "carta" && p1 === "sasso") ||
    (p2 === "sasso" && p1 === "forbici") ||
    (p2 === "forbici" && p1 == "carta")
  ) {
    puntiP2++;
    console.log(`Hai battuto Terminator 🤖, se a ${puntiP2} punti`);
  } else {
    puntiP1++;
    console.log(
      `Terminator 🤖 vince, se a ${puntiP2} punti mentre terminator ha ${puntiP1}`
    );
  }
}
