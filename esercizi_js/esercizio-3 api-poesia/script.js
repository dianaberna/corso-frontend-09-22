"use strict";

// LINK esercizi -> https://dev.to/codefoxx/25-beginner-javascript-project-ideas-3m9h
//////// ES DEV - 3 /////
const btnGenerator = document.querySelector(".btn");

//fetch -> promise interna alla fetch
async function esprimiPoetiFetch() {
  let result = await fetch("https://poetrydb.org/random");
  const resultPArray = await result.json();
  let poesia = " ";
  //Ci sarebbe da 'pulire il testo della poesia
  if (resultPArray[0].lines.length < 50) {
    const stringPoesia = resultPArray[0].lines.join("\n");
    poesia = `${stringPoesia}  `;
  } else {
    poesia = "Non ho ancora caricato la poesia su misura per te, genera anora";
    poeta = "";
  }
  const poeta = resultPArray[0].author;
  return [poesia, poeta];
}

btnGenerator.addEventListener("click", async function cambiaNome() {
  await esprimiPoetiFetch();
  const poesia = await esprimiPoetiFetch();

  // document.getElementById("poesia").textContent = poesia;
  document.getElementById("poesia").textContent = poesia[0];
  document.getElementById("poeta").textContent = poesia[1];
});
