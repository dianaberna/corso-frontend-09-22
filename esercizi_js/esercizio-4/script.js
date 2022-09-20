"use strict";

// LINK esercizi -> https://dev.to/codefoxx/25-beginner-javascript-project-ideas-3m9h
//////// ES DEV - 4 /////
const bottone = document.querySelector(".btn");

let email = [];

bottone.addEventListener("click", function () {
  const inputMail = document.querySelector(".inputM").value;
  email.push(inputMail);
  document.getElementById(
    "avviso"
  ).textContent = `Email ${email[0]} inserita correttamente`;
});
