window.addEventListener('load', ()=> {

/* let inputEs=document.createTextNode("sono  la prova");
let nuovo=document.createElement("input");

nuovo.appendChild(inputEs);

let qui=document.getElementsByClassName("padre")[0];
qui.insertAdjacentElement("afterbegin", nuovo) */

function CreaElemento(tag,contenuto,posizione){
    let Contenuto=document.createTextNode(contenuto);
    let Tag=document.createElement(tag);
    Tag.appendChild(Contenuto);

    posizione.appendChild(Tag);
}


const div=document.createTextNode(" ");
const elementDiv=document.createElement("div");

elementDiv.appendChild(div);

let nodo=document.getElementsByClassName("padre")[0];
nodo.appendChild(elementDiv);

const divImage=document.createTextNode(" ");
const elementDivImage=document.createElement("div");
elementDivImage.className="image";

elementDivImage.appendChild(divImage);

let nodo1=document.querySelectorAll(".padre>div")[0];
nodo1.appendChild(elementDivImage);

let svg=document.createTextNode(" ");
let elementSvg=document.createElement("img");
elementSvg.src="./immagini/Vector (7).png";

elementSvg.appendChild(svg);

let nodo2=document.getElementsByClassName("image")[0];
nodo2.appendChild(elementSvg);


let paragrafo=document.createTextNode("Mindfulness");
let elementPar=document.createElement("p");

elementPar.appendChild(paragrafo);

let nodo3=document.getElementsByClassName("image")[0];
nodo3.appendChild(elementPar);

let svg2=document.createTextNode(" ");
let elementoSvg2=document.createElement("img");
elementoSvg2.src="./immagini/Vector (8).png";

elementoSvg2.appendChild(svg2);

let nodo4=document.getElementsByClassName("image")[0];
nodo4.appendChild(elementoSvg2);

let div2=document.createTextNode(" ");
let elementodiv2=document.createElement("div");

elementodiv2.appendChild(div2);

let nodo5=document.getElementsByClassName("image")[0];
nodo5.insertAdjacentElement("afterend", elementodiv2);


let immagine=document.createTextNode(" ");
let elementoImg=document.createElement("img");
elementoImg.alt="techno fever robot";
elementoImg.src="./immagini/5729762 1.png";

elementoImg.appendChild(immagine);

let nodo6=document.querySelectorAll(".image+div")[0];
nodo6.appendChild(elementoImg);

let par=document.createTextNode(" Manage stress with mindfulness");
let elementoPar=document.createElement("p");

elementoPar.appendChild(par);

let nodo7=document.querySelectorAll(".image+div")[0];
nodo7.appendChild(elementoPar);

let divText=document.createTextNode(" ");
let elementoDivTex=document.createElement("div");
elementoDivTex.className="bodyText";

elementoDivTex.appendChild(divText);

let nodo8=document.getElementsByClassName("padre")[0];
nodo8.insertAdjacentElement("beforeend", elementoDivTex);

let paragrafoDivText=document.createTextNode(" When someone is described as being mindful, it typically meansthey pay attention to what is happening to the mind, body, andsurroundings, and they remain present while both curious andcompassionate. But what does mindfulness do? One of the bestdefinitions comes from Dr. Shauna Shapiro (2020).");
let elementoParDivText=document.createElement("p");
elementoParDivText.appendChild(paragrafoDivText);

let nodo9=document.getElementsByClassName("bodyText")[0];
nodo9.appendChild(elementoParDivText);

let footer=document.createTextNode(" ");
let elementoFooter=document.createElement("footer");

elementoFooter.appendChild(footer);

let nodo10=document.getElementsByClassName("bodyText")[0];
nodo10.insertAdjacentElement("afterend",elementoFooter);

let prova=document.createTextNode(" ");
let provaElemento=document.createElement("div");
provaElemento.className="button";

provaElemento.appendChild(prova);
let nodoprova=document.getElementsByTagName("footer")[0];
nodoprova.appendChild(provaElemento);


let bottone=document.createTextNode("NEXT");
let elementoBottone=document.createElement("button");
elementoBottone.appendChild(bottone);

let nodo11=document.getElementsByClassName("button")[0];
nodo11.appendChild(elementoBottone);

elementoBottone.onclick=elementoBottone.remove();
})

