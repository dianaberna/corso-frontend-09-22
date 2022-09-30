"use strict";

// LINK esercizi -> https://dev.to/codefoxx/25-beginner-javascript-project-ideas-3m9h
//////// ES DEV - 10 /////
const billAmount = document.querySelector(".billAmount");
const guestAmount = document.querySelector(".guestAmount");
const service = document.querySelector("select");

const btn = document.getElementById("submit");

function addElement() {
  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

btn.addEventListener("click", function () {
  const bill = +billAmount.value;
  const number = +guestAmount.value;
  const percent = +service.value;
  const tip = bill * number * percent;
  const tot = bill + tip;

  //Creazione div
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `La mancia da lasciara è ${tip}€, devi pagare ${tot}€`;
  newDiv.setAttribute("class", "risultato");
  const target = document.querySelector(".containerApp");
  target.parentNode.insertBefore(newDiv, target);
});
