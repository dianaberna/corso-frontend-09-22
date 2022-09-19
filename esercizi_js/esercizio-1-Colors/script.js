"use strict";

// LINK esercizi -> https://dev.to/codefoxx/25-beginner-javascript-project-ideas-3m9h
//////// ES DEV - 1 /////
const buttomContainer = document.querySelector(".btn");

const change = buttomContainer.addEventListener("click", function () {
  const rgb = [];

  for (let i = 0; i < 3; i++) {
    rgb.push(Math.floor(Math.random() * 255));
  }
  document.body.style.backgroundColor = `rgb(${rgb.join(",")})`;
});
