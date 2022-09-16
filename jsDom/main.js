window.addEventListener("load", () => {
  const div = `<div class="ciao1">wefwewe</div> <div class="ciao1">wefwewe</div> <div class="ciao1">wefwewe</div> <div class="ciao1">wefwewe</div> <div class="ciao1">wefwewe</div> <div class="ciao1">wefwewe</div> <div class="ciao1">wefwewe</div> <div class="ciao1">wefwewe</div> <div class="ciao1">wefwewe</div> <div class="ciao1">wefwewe</div>`;

  document.getElementById("ciao").innerHTML = div;

  let dom = document.querySelectorAll(".ciao1");
  dom.forEach((document) => {
    document.style.backgroundColor = "blue";
  });
});
