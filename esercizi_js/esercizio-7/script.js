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
  if (m > 10) {
    document.querySelector(".cotnainerOre").textContent = `${h}:${m}`;
  } else {
    document.querySelector(".cotnainerOre").textContent = `${h}:0${m}`;
  }
};

const AMPM = function () {
  if (d.getHours() < 12) {
    document.querySelector(".cotnainerAMPM").textContent = "AM";
  } else {
    document.querySelector(".cotnainerAMPM").textContent = "PM";
  }
};

//Import bacground
const container = document.querySelector(".container");

function newBackGround(background) {
  document.querySelector(
    ".container"
  ).style.backgroundImage = `url(${background})`;
}

function getPhotos(images) {
  images.map((image) => {
    console.log(image);
  });
}

async function setImgBackground() {
  let day = d.getDay();
  let imgUrl = " ";
  let result = await fetch("https://api.pexels.com/v1/search?query=universe", {
    headers: {
      Authorization: "563492ad6f917000010000018e7df5e85c834bdaac8b311cf6c8d1ad",
    },
  });
  const resultImgArray = await result.json();
  const immagineUrl = resultImgArray.photos[day].src.large;
  console.log(resultImgArray.photos[0]);
  newBackGround(immagineUrl);
}
setImgBackground();

//Chiamata funzioni
gg();
hh();
AMPM();
