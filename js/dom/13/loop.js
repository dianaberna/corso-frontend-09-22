
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
		}
	};
	/* elementCreator = (numero, elemento, contenuto, classe, id, genitore)  */
	/* wrap */
	elementCreator (1, "div", " ", " ", "wrap", "main");	
});


