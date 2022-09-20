"use strict";

// LINK esercizi -> https://dev.to/codefoxx/25-beginner-javascript-project-ideas-3m9h
//////// ES DEV - 2 /////
const btnSelect = document.querySelector(".btn");

//Creare estetica bottone

//crea eventLiostener click btn
btnSelect.addEventListener("click", function () {
  //Creare funzione creasfondo colore in automatico
  function backgroundImageCreate() {
    const rgb1 = [];
    const rgb2 = [];

    for (let i = 0; i < 3; i++) {
      rgb1.push(Math.floor(Math.random() * 255));
      rgb2.push(Math.floor(Math.random() * 255));
    }
    document.body.style.backgroundImage = `linear-gradient(to right, rgb(${rgb1.join(
      ","
    )}), rgb(${rgb2.join(",")}))`;
    document.getElementById("hexcode1").textContent = rgb1;
    document.getElementById("hexcode2").textContent = rgb2;
  }

  //   function changeColorTesti() {
  //     function colorf() {
  //       document.getElementById("testoChange1").style.color = "#ffffff";
  //       document.getElementById("testoChange2").style.color = "#ffffff";
  //     }
  //     function colorc() {
  //       document.getElementById("testoChange1").style.color = "#cccccc";
  //       document.getElementById("testoChange2").style.color = "#cccccc";
  //     }
  //     function color9() {
  //       document.getElementById("testoChange1").style.color = "#999999";
  //       document.getElementById("testoChange2").style.color = "#999999";
  //     }
  //     function color6() {
  //       document.getElementById("testoChange1").style.color = "#666666";
  //       document.getElementById("testoChange2").style.color = "#666666";
  //     }
  //     function color3() {
  //       document.getElementById("testoChange1").style.color = "#666666";
  //       document.getElementById("testoChange2").style.color = "#666666";
  //     }
  //     function color0() {
  //       document.getElementById("testoChange1").style.color = "#000000";
  //       document.getElementById("testoChange2").style.color = "#000000";
  //     }
  //     setTimeout(colorf, 200);
  //     setTimeout(colorc, 400);
  //     setTimeout(color9, 600);
  //     setTimeout(color6, 800);
  //     setTimeout(color0, 1000);
  //   }

  //Chiamata funzioni
  backgroundImageCreate();
  //   changeColorTesti();
});
