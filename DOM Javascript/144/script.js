window.addEventListener("load", function(){
//titolo
let titoloPagina = document.createElement("title");
let testoT = document.createTextNode("Phone");
document.head.appendChild(titoloPagina);
titoloPagina.appendChild(testoT);
//div Box
let divBox = document.createElement("div");
divBox.className="box";
document.body.appendChild(divBox);
//div cerchio dentro div box
let divCerchio = document.createElement("div");
divBox.appendChild(divCerchio);
divCerchio.className="cerchio";
//img dentro div cerchio
let img1 = document.createElement("img");
img1.setAttribute("src", "vector.png");
img1.setAttribute("alt", "");
divCerchio.appendChild(img1);
//h2 dentro div box
let elementoH2 = document.createElement("h2");
let testoH2 = document.createTextNode("Email sent");
elementoH2.appendChild(testoH2);
divBox.appendChild(elementoH2);
//p dentro div box
let elementoPBox = document.createElement("p");
let testoPBox = document.createTextNode("A magic link has been delivered to your email address. Please check your inbox.");
elementoPBox.appendChild(testoPBox);
divBox.appendChild(elementoPBox);
//creo elemento footer
let footerPagina = document.createElement("footer");
document.body.appendChild(footerPagina);
//div boxetto
let divBoxetto = document.createElement("div");
document.body.appendChild(divBoxetto);
divBoxetto.setAttribute("class", "boxetto");
//creo bottone in div boxetto
let elementoButton = document.createElement("button");
let testoButton = document.createTextNode("Open email app");
elementoButton.appendChild(testoButton);
divBoxetto.appendChild(elementoButton);
//creo p in div boxetto
let elementoPBoxetto = document.createElement("p");
let testoPBoxetto = document.createTextNode("Go back");
elementoPBoxetto.appendChild(testoPBoxetto);
divBoxetto.appendChild(elementoPBoxetto);
})