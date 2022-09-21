"use strict";

// LINK esercizi -> https://dev.to/codefoxx/25-beginner-javascript-project-ideas-3m9h
//////// ES DEV - 5 /////
let count = 0;
const btnDiminuisci = document.querySelector(".btn-dim");
const btnAumenta = document.querySelector(".btn-aum");

function modificaTesto() {
  document.getElementById("testo").innerHTML = count;
}
btnDiminuisci.addEventListener("click", function () {
  count--;
  modificaTesto();
});
btnAumenta.addEventListener("click", function () {
  count++;
  modificaTesto();
});
