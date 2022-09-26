"use strict";

// LINK esercizi -> https://dev.to/codefoxx/25-beginner-javascript-project-ideas-3m9h
//////// ES DEV - 9 /////
let idNumero = 0;
const bottone = document.querySelector(".btn");
const testo = document.querySelector(".search");
const promemoria = document.querySelector(".promemoria");

function addItem(text) {
  function canc(c) {
    let ce = document.getElementById(`memo${c}`);
    ce.remove();
  }

  const newItem = document.createTextNode(text);
  const cancella = document.createTextNode("❌");
  const newDiv = document.createElement("div");
  const btnCanc = document.createElement("button");

  const titolo2 = document.querySelector(".titolo2");
  if (idNumero >= 0) {
    titolo2.textContent = "Da comprare:";
  }

  promemoria.appendChild(newDiv);
  newDiv.appendChild(newItem);
  btnCanc.appendChild(cancella);
  newDiv.appendChild(btnCanc);
  idNumero++;
  newDiv.setAttribute("class", "testoPromemoria");
  newDiv.setAttribute("id", `memo${idNumero}`);
  btnCanc.setAttribute("id", idNumero);

  btnCanc.addEventListener("click", (e) => canc(e.target.id));
}

document.querySelector(".search").addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    addItem(testo.value);
    testo.value = "";
  }
});

bottone.addEventListener("click", function () {
  addItem(testo.value);
  testo.value = "";
});
