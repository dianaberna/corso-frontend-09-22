window.addEventListener("load", () => {
  elementCreator = (numero, elemento, contenuto, classe, id, genitore) => {
    for (let i = 0; i < numero; i++) {
      let myElement = document.createElement(elemento);
      if (classe != " ") myElement.className = classe;
      if (id != " ") myElement.id = id;
      if (contenuto != " ") {
        myText = document.createTextNode(contenuto);
        myElement.appendChild(myText);
      }
      document.querySelector(genitore).appendChild(myElement);
      return myElement;
    }
  };
  /*elementCreator = (1)numero, 2)elemento, 3)contenuto, 4)classe, 5)id, 6)genitore)*/
  elementCreator(1, "main", " ", " ", " ", "body");
  elementCreator(1, "div", " ", "container", " ", "main");
  elementCreator(
    1,
    "h1",
    "Click the button below to generate a random gradient hex color combination",
    " ",
    " ",
    ".container"
  );

  /* h2 con stringa e hex */
  let randomColor = ["ffffff", "ffffff"];
  let s =
    "linear-gradient(to right, #" +
    randomColor[0] +
    ", " +
    "#" +
    randomColor[1] +
    ")";
  elementCreator(1, "h2", "background: " + s, " ", " ", ".container");
  /* bottone */
  let myButton = elementCreator(
    1,
    "button",
    "Click Me",
    " ",
    "myButton",
    ".container"
  );
  myButton.addEventListener("click", () => {
    randomColor = [
      Math.floor(Math.random() * 16777215).toString(16),
      Math.floor(Math.random() * 16777215).toString(16),
    ];
    s =
      "linear-gradient(to right, #" +
      randomColor[0] +
      ", " +
      "#" +
      randomColor[1] +
      ")";
    document.body.style.background = s;
    document.getElementsByTagName("h2")[0].innerHTML = "background: " + s;
  });
});
