
window.addEventListener('load', () => {
	/* div wrap */
	const wrap = document.createElement("div");
	const wrapLeft = document.createElement("div");
	const wrapTesto1 = document.createElement("div");
	const wrapTesto2 = document.createElement("div");
	const wrapTesto3 = document.createElement("div");
	const wrapTesto4 = document.createElement("div");
	const subWrapTesto4 = document.createElement("div");
	wrap.id = "wrap";
	wrapLeft.id = "wrap-left";
	subWrapTesto4.id = "sub-wrap";
	wrapTesto1.className = "wrap-text";
	wrapTesto2.className = "wrap-text";
	wrapTesto3.className = "wrap-text";
	wrapTesto4.className = "wrap-text";
	wrapTesto4.id = "wrap-text4"
	document.getElementsByTagName("main")[0].appendChild(wrap);
	wrap.appendChild(wrapLeft);
	wrapLeft.appendChild(wrapTesto1);
	wrapLeft.appendChild(wrapTesto2);
	wrapLeft.appendChild(wrapTesto3);
	wrap.appendChild(wrapTesto4);
	wrapTesto4.appendChild(subWrapTesto4);
	/* titoli h2 + h1*/
	let testoPrimoH2 = document.createTextNode("Navigate");
	const primoH2 = document.createElement("h2");
	let testoSecondoH2 = document.createTextNode("Social Media");
	const secondoH2 = document.createElement("h2");
	let testoTerzoH2 = document.createTextNode("About");
	const terzoH2 = document.createElement("h2");
	let testoH1 = document.createTextNode("TECH-WORLD");
	const myH1 = document.createElement("h1");
	primoH2.appendChild(testoPrimoH2);
	wrapTesto1.appendChild(primoH2);
	secondoH2.appendChild(testoSecondoH2);
	wrapTesto2.appendChild(secondoH2);
	terzoH2.appendChild(testoTerzoH2);
	wrapTesto3.appendChild(terzoH2);
	myH1.appendChild(testoH1);
	subWrapTesto4.appendChild(myH1);
	/* lista primo wrap-text*/
	const uList = document.createElement("ul");
	let testoLi1 = document.createTextNode("Home");
	const li1 = document.createElement("li");
	let testoLi2 = document.createTextNode("Portfolio");
	const li2 = document.createElement("li");
	let testoLi3 = document.createTextNode("Career");
	const li3 = document.createElement("li");
	let testoLi4 = document.createTextNode("Contact Us");
	const li4 = document.createElement("li");
	wrapTesto1.appendChild(uList);
	li1.appendChild(testoLi1);
	uList.appendChild(li1);
	li2.appendChild(testoLi2);
	uList.appendChild(li2);
	li3.appendChild(testoLi3);
	uList.appendChild(li3);
	li4.appendChild(testoLi4);
	uList.appendChild(li4);
	/* paragrafi secondo wrap-text*/
	const p1 = document.createElement("p");
	let testoP1 = document.createTextNode("Facebook");
	const p2 = document.createElement("p");
	let testoP2 = document.createTextNode("Instagram");
	const p3 = document.createElement("p");
	let testoP3 = document.createTextNode("LinkedIn");
	p1.appendChild(testoP1);
	wrapTesto2.appendChild(p1);
	p2.appendChild(testoP2);
	wrapTesto2.appendChild(p2);
	p3.appendChild(testoP3);
	wrapTesto2.appendChild(p3);
	/* paragrafi terzo wrap-text */
	const p4 = document.createElement("p");
	let testoP4 = document.createTextNode("Privacy Policy");
	const p5 = document.createElement("p");
	let testoP5 = document.createTextNode("Terms & Condition");
	p4.appendChild(testoP4);
	wrapTesto3.appendChild(p4);
	p5.appendChild(testoP5);
	wrapTesto3.appendChild(p5);
	/* paragrafi quarto wrap-text */
	const p6 = document.createElement("p");
	let testoP6 = document.createTextNode("Copyright (c)2022");
	const p7 = document.createElement("p");
	let testoP7 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero, orci tempor eget interdum. Egestas fermentum tellus gravida ut mauris, pulvinar libero suspendisse ornare. Viverra nulla aliquam nullam interdum pretium gravida mi. Porttitor duis sagittis vel et.");
	p6.appendChild(testoP6);
	subWrapTesto4.appendChild(p6);
	p7.appendChild(testoP7);
	wrapTesto4.appendChild(p7);
});
