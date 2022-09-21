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

//quote generator da dizionario
window.addEventListener("load", () => {
  /*elementCreator = (1)numero, 2)elemento, 3)contenuto, 4)classe, 5)id, 6)genitore)*/
  elementCreator(1, "main", " ", " ", " ", "body");
  elementCreator(1, "div", " ", "container", " ", "main");
  elementCreator(1, "div", " ", "container", "container-text", ".container");
  elementCreator(1, "p", "citazione", " ", " ", "#container-text");
  elementCreator(1, "h3", "- Autore", " ", " ", "#container-text");

/*   let quotes = [
    {
      "content": "Miao",
      "author": "Mochi"
    },
    {
      "content": "HISS",
      "author": "Evil Mochi"
    },
    {
      "content": "Be yourself; everyone else is already taken.",
      "author": "Oscar Wilde"
    },
    {
      "content": "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
      "author": "Marilyn Monroe"
    },
    {
      "content": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      "author": "Albert Einstein"
    },
    {
      "content": "So many books, so little time.",
      "author": "Frank Zappa"
    }
  ];
  //bottone
  let quoteBtn = elementCreator(1, "button", "Generate Quote", " ", "quoteBtn", ".container");
  quoteBtn.addEventListener ("click", () => {
    let number = Math.floor(Math.random() * quotes.length);
    document.querySelector("h3").innerHTML = `- ${quotes[number].author}`;
    document.querySelector("p").innerHTML = `"${quotes[number].content}"`;
  }); */

  //coppie key/values
  const quotes = [
    { "Mochi": "Miao" },
    { "Evil Mochi": "HISS" },
    { "Oscar Wilde": "Be yourself; everyone else is already taken."},
    { "Marilyn Monroe": "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best" },
    { "Albert Einstein": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."},
    { "Frank Zappa": "So many books, so little time."}
  ];
  //bottone
  let quoteBtn = elementCreator(1, "button", "Generate Quote", " ", "quoteBtn", ".container");
  quoteBtn.addEventListener ("click", () => {
    let number = Math.floor(Math.random() * quotes.length);
    document.querySelector("h3").innerHTML = `- ${Object.keys(quotes[number])}`;
    document.querySelector("p").innerHTML = `"${Object.values(quotes[number])}"`;
  });
});
/* Math.random() * (max - min) + min; */
