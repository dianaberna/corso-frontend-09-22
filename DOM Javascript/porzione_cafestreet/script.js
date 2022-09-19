window.addEventListener("load", function(){
//creo titolo pagina
let titoloPagina = document.createElement("title");
let testoT = document.createTextNode("Recensione");
document.head.appendChild(titoloPagina);
titoloPagina.appendChild(testoT);
//div box
let divBox = document.createElement("div");
document.body.appendChild(divBox);
divBox.className="box";
//div1
let div1 = document.createElement("div");
let imgRec = document.createElement("img");
imgRec.setAttribute("class", "img-recensore");
imgRec.setAttribute("src", "naura.png");
imgRec.setAttribute("alt", "Recensione Naura");
div1.appendChild(imgRec);
divBox.appendChild(div1);
//div2
let div2 = document.createElement("div");
let testoP2 = document.createTextNode("Naura Silvana");
let elementoP2 = document.createElement("p");
div1.appendChild(div2);
elementoP2.appendChild(testoP2);
div2.appendChild(elementoP2);
//stelle intere e div3
let div3 = document.createElement("div");
div2.appendChild(div3);
for(let i=0; i<4; i++){
    let imgStar1 = document.createElement("img");
    imgStar1.setAttribute("class", "star");
    imgStar1.setAttribute("src", "vector.svg");
    imgStar1.setAttribute("alt", "");
    div3.appendChild(imgStar1);
}
//stella divisa
let imgStar5 = document.createElement("img");
imgStar5.setAttribute("class", "star");
imgStar5.setAttribute("src", "vectormezzo.svg");
imgStar5.setAttribute("alt", "");
div3.appendChild(imgStar5);
//div4 e paragrafo
let div4 = document.createElement("div");
div4.className="testo-recensione";
let testoP4 = document.createTextNode('"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis."');
let elementoP4 = document.createElement("p");
divBox.appendChild(div4);
elementoP4.appendChild(testoP4);
div4.appendChild(elementoP4);
})
