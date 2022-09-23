"use strict";

// LINK esercizi -> https://dev.to/codefoxx/25-beginner-javascript-project-ideas-3m9h
//////// ES DEV - 7 /////
let d = new Date();
const gg = function () {
  const giorni = ["LUN", "MAR", "MER", "GIO", "VEN", "SAB", "DOM"];
  let day = d.getDay();
  document.querySelector(".cotnainerGiorno").textContent = giorni[day - 1];
};

const hh = function () {
  let h = d.getHours();
  let m = d.getMinutes();
  document.querySelector(".cotnainerOre").textContent = `${h}:${m}`;
};

const AMPM = function () {
  if (d.getHours() < 12) {
    document.querySelector(".cotnainerAMPM").textContent = "AM";
  } else {
    document.querySelector(".cotnainerAMPM").textContent = "PM";
  }
};
//Chiamata funzioni
gg();
hh();
AMPM();
