"use strict";

// LINK esercizi -> https://dev.to/codefoxx/25-beginner-javascript-project-ideas-3m9h
//////// ES DEV - 6 /////
const slides = document.querySelectorAll(".containerCarosello");
const btnLeft = document.querySelector(".btn-left");
const btnright = document.querySelector(".btn-right");
const dotContainer = document.querySelector(".dots");

let curSlide = 0;
const maxSlide = slides.length;

const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots();

const attivazioneDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--attivo"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dot__dot--attivo");
};
attivazioneDot(0);

const slideIniziale = function (slide) {
  slides.forEach(
    (e, i) => (e.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  );
  //Prima slide 0% | Seconda slide 100% | Terza slide 200% | Quarta slide 300%
};
slideIniziale(0);

// slider.transform.overflow = "visible";

//Slide dopo
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 2;
  } else {
    curSlide++;
  }

  slideIniziale(curSlide);
  attivazioneDot(curSlide);
};
const beforeSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 3;
  } else {
    curSlide--;
  }

  slideIniziale(curSlide);
  attivazioneDot(curSlide);
};
//Slider a destra
btnright.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", beforeSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArroLeft") beforeSlide();

  e.key === "ArrowRight" && nextSlide();
});
// non funziona
dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    slideIniziale(slide);
    attivazioneDot(slide);
  }
});
