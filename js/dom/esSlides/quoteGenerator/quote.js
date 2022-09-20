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
  elementCreator(1, "div", " ", "container", "container-text", ".container");
  elementCreator(1, "p", "quote", " ", " ", "#container-text");
  elementCreator(1, "h3", "- Author", " ", " ", "#container-text");

  let quoteBtn = elementCreator(1, "button", "Generate Quote", " ", " ", ".container");
  quoteBtn.addEventListener ("click", () => {
/*     api
    ("https://winterly-backend.herokuapp.com/quote"); */
    console.log(quote);
    document.querySelector("p").innerHTML = "citazione";
  });
});
