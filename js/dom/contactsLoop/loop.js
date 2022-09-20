
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
	elementCreator (1, "div", " ", " ", "wrap-left", "#wrap");
	elementCreator (1, "div", " ", "wrap-text", "wrap-right", "#wrap");
	elementCreator (3, "div", " ", "wrap-text", " ", "#wrap-left");
	elementCreator(1, "div", " ", " ", "sub-wrap-right", "#wrap-right");
	
	/* titoli + liste + p*/
	elementCreator (1, "h2", "Navigate", " ", " ", ".wrap-text");
	elementCreator(1, "ul", " ", " ", " ", ".wrap-text");
	for (let i = 0; i < 4; i++) {
		a = ["Home", "Portfolio", "Career", "Contacts Us"];
		elementCreator(1, "li", a[i], " ", " ", "ul");
	}
	elementCreator (1, "h2", "Social Media", " ", " ", ".wrap-text:nth-child(2)");
 	elementCreator(1, "ul", " ", " ", " ", ".wrap-text:nth-child(2)");
	for (let i = 0; i < 2; i++) {
		a = ["Facebook", "Instagram", "LinkedIn"];
		elementCreator(1, "li", a[i], " ", " ", ".wrap-text:nth-child(2) > ul");
	}
	elementCreator (1, "h2", "About", " ", " ", ".wrap-text:nth-child(3)");
	elementCreator(1, "ul", " ", " ", " ", ".wrap-text:nth-child(3)");
	for (let i = 0; i < 2; i++) {
	   a = ["Privacy Policy", "Terms & Condition"];
	   elementCreator(1, "li", a[i], " ", " ", ".wrap-text:nth-child(3) > ul");
	}
	elementCreator(1, "h1", "TECH-WORLD", " ", " ", "#sub-wrap-right");
	elementCreator(1, "p", "Copyright (c)2022", " ", " ", "#sub-wrap-right");
	elementCreator(1, "p", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero, orci tempor eget interdum. Egestas fermentum tellus gravida ut mauris, pulvinar libero suspendisse ornare. Viverra nulla aliquam nullam interdum pretium gravida mi. Porttitor duis sagittis vel et.", " ", " ", "#wrap-right");

});


