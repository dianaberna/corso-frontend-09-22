"use strict";

// LINK esercizi -> https://dev.to/codefoxx/25-beginner-javascript-project-ideas-3m9h
//////// ES DEV - 8 /////
let memoria = [];
let controlloL = 0;
let controlloN = 0;
let risultatoN = 0;
const vt = document.querySelectorAll(".grid-item");
// console.log(vt);

//MANCA: Controllo numeri se metti due segni vicini, manca controlo quozionete n / 0
vt.forEach((d) =>
  d.addEventListener("click", function () {
    const e = d.textContent;

    if ((e === "/") | (e === "+") | (e === "-") | (e === "*")) {
      controlloL++;
      memoria.push(e);
      document.querySelector(".numero").textContent = memoria.join("");
    } else if (e === "C") {
      memoria = [];
    } else if (e === "=") {
      risultatoN = eval(memoria.join(""));
      console.log(risultatoN);
      document.querySelector(".numero").textContent = risultatoN;
      memoria = [];
    } else {
      controlloN++;
      memoria.push(e);
      document.querySelector(".numero").textContent = memoria.join("");
    }
  })
);
