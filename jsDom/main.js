window.addEventListener("load", () => {
  const div = `<div class="ciao1">wefwewe</div> <div class="ciao1">wefwewe</div> <div class="ciao1">wefwewe</div> <div class="ciao1">wefwewe</div> <div class="ciao1">wefwewe</div> <div class="ciao1">wefwewe</div> <div class="ciao1">wefwewe</div> <div class="ciao1">wefwewe</div> <div class="ciao1">wefwewe</div> <div class="ciao1">wefwewe</div>`;

  document.getElementById("ciao").innerHTML = div;

  document.querySelectorAll(".ciao1").forEach((element) => {
    element.style.color = "red";
  });
});
