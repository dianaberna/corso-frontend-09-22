
window.addEventListener('load', () => {
	elementCreator = (numero, elemento, contenuto, classe, id, genitore) => {
		for (let i = 0; i < numero; i++){
			let myElement = document.createElement(elemento);
			if (classe != " " ) myElement.className = classe;
			if (id != " ") myElement.id = id;
			if (contenuto != " ") {
				myText = document.createTextNode(contenuto);
				myElement.appendChild(myText);
			}
			document.querySelector(genitore).appendChild(myElement);
			return myElement;
		}
	};
	/*elementCreator = (1.numero, 2.elemento, 3.contenuto, 4.classe, 5.id, 6.genitore)*/

	elementCreator (1, "main", " ", " ", " ", "body");

	/* section search */
	elementCreator (1, "section", " ", " ", "search", "main");
	elementCreator (1, "div", " ", " ", "search-bar", "#search");
	let myInput = elementCreator (1, "input", " ", " ", "", "#search-bar");
	myInput.setAttribute("type","search");
	myInput.setAttribute("placeholder","Search a country, location...");

	/* section description */
	elementCreator (1, "section", " ", "description", " ", "main");
	elementCreator (1, "p", "Seattle, United States", " ", " ", ".description");
	elementCreator (1, "h1", "Discover Seattle", " ", " ", ".description");
	elementCreator (1, "p", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo quis parturient tristique mauris. Amet urna tortor tortor duis tellus risus.", " ", " ", ".description");
	/* div thumbnails */
	elementCreator (1, "div", " ", "thumbnails", " ", ".description");
	elementCreator (1, "div", " ", "images", " ", ".thumbnails");
	for (let i = 0; i < 3; i++){
		a = ["./letters.png", "./needle-blue.png", "./wheel.png"];
		b = ["hotel", "seattle space needle", "seattle great wheel"];
		let myImage = 	elementCreator (1, "img", " ", " ", " ", ".images");
		myImage.src = a[i];
		myImage.alt = b[i];
	}
	elementCreator (1, "button", "31", " ", " ", ".thumbnails");
});


