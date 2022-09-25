"use strict";

// LINK esercizi -> https://dev.to/codefoxx/25-beginner-javascript-project-ideas-3m9h
//////// ES DEV - 8 /////
let ris = 0;
let clickOperazione = 0;

//Memoria valori digitati
let n1 = [];
let n2 = [];

const uno = document.querySelector(".uno");
const due = document.querySelector(".due");
const tre = +document.querySelector(".tre").textContent;
const quattro = +document.querySelector(".quattro").textContent;
const cinque = +document.querySelector(".cinque").textContent;
const sei = +document.querySelector(".sei").textContent;
const sette = +document.querySelector(".sette").textContent;
const otto = +document.querySelector(".otto").textContent;
const nove = +document.querySelector(".nove").textContent;
const zero = +document.querySelector(".zero").textContent;

const cancella = document.querySelector(".canc");

//segni
const piu = document.querySelector(".piu");
const meno = document.querySelector(".meno");
const per = document.querySelector(".per");
const diviso = document.querySelector(".diviso");
const punto = document.querySelector(".punto");
const uguale = document.querySelector(".uguale");

//Valori
if (clickOperazione <= 1) {
  uno.addEventListener("click", function () {
    n1.push(uno.textContent);
    document.querySelector(".numero").textContent = n1.join("");
  });
  due.addEventListener("click", function () {
    n1.push(due.textContent);
    document.querySelector(".numero").textContent = n1.join("");
  });
} else {
  uno.addEventListener("click", function () {
    n2.push(uno.textContent);
    document.querySelector(".numero").textContent = n2.join("");
  });
  due.addEventListener("click", function () {
    n2.push(due.textContent);
    document.querySelector(".numero").textContent = n2.join("");
  });
}

//reset
cancella.addEventListener("click", function () {
  n1 = [];
  n2 = [];
  document.querySelector(".numero").textContent = n1.join("");
  document.querySelector(".numero").textContent = n2.join("");
});

//Operazioni

const moltiplicazione = function (n1, n2) {
  const ris = n1 * n2;
  console.log(ris);
};
const divisione = function (n1, n2) {
  clickOperazione++;
  if (n2 > 0) {
    const ris = n1 / n2;
    console.log(ris);
  } else {
    const ris = `Dividi ${n1} per un numero maggiore di zero`;
  }
};
const somma = function (n1, n2) {
  clickOperazione++;
  const ris = n1 + n2;
  console.log(ris, clickOperazione);
};

const differenza = function (n1, n2) {
  clickOperazione++;
  const ris = n1 - n2;
  console.log(ris);
};

piu.addEventListener("click", somma(n1, n2));
per.addEventListener("click", moltiplicazione(n1, n2));
meno.addEventListener("click", differenza(n1, n2));
diviso.addEventListener("click", divisione(n1, n2));

// const equal = function (n1, n2) {
//   piu.addEventListener("click", somma(n1, n2));
//   per.addEventListener("click", moltiplicazione(n1, n2));
//   meno.addEventListener("click", differenza(n1, n2));
//   diviso.addEventListener("click", divisione(n1, n2));
// };

// uguale.addEventListener("click", equal);
