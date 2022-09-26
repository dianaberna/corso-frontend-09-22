import {CreaClasse, CreaImm,CreaSenzaAttributi}from "../../funzioniExport.js"

window.addEventListener("load", ()=>{

CreaSenzaAttributi("nav", " ", document.getElementsByClassName("padre")[0]);
CreaImm("img", " ", document.getElementsByTagName("nav")[0], "../immagini3App/Ellipse 130.png", "sempre lui");
CreaImm("img", " ", document.getElementsByTagName("nav")[0], "../immagini3App/Vector (11).png", "sempre lui");
CreaClasse("div", " ", document.getElementsByClassName("padre")[0],"cerchioEsterno");
CreaClasse("div", " ", document.getElementsByClassName("cerchioEsterno")[0],"cerchioRosso");
CreaImm("img", " ", document.getElementsByClassName("cerchioRosso")[0],"../immagini3App/Ellipse 131 (1).png", "cerchio Rosso");
CreaClasse("div", " ", document.getElementsByClassName("cerchioRosso")[0],"caricamentoRosso");
CreaImm("img", " ", document.getElementsByClassName("caricamentoRosso")[0],"../immagini3App/Ellipse 134 (1).png", "cerchio Rosso");
CreaClasse("div", " ",document.getElementsByClassName("cerchioEsterno")[0], "cerchioBlu");
CreaImm("img", " ", document.getElementsByClassName("cerchioBlu")[0],"../immagini3App/Ellipse 132.png", "cerchio Blu");
CreaClasse("div", " ",document.getElementsByClassName("cerchioBlu")[0], "caricamentoBlu");
CreaImm("img", " ", document.getElementsByClassName("caricamentoBlu")[0],"../immagini3App/Ellipse 134.png", "loading blu");
CreaClasse("div", " ", document.getElementsByClassName("cerchioEsterno")[0], "centroCerchio");
CreaSenzaAttributi("p", "3 ", document.getElementsByClassName("centroCerchio")[0]);
CreaSenzaAttributi("p", "4500 ", document.getElementsByClassName("centroCerchio")[0]);
CreaClasse("div", " ", document.getElementsByClassName("padre")[0],"heartSteps");
CreaClasse("div", " ", document.getElementsByClassName("heartSteps")[0], "heart");
CreaImm("img"," ", document.getElementsByClassName("heart")[0],"../immagini3App/Vector (12).png","heart");
CreaSenzaAttributi("p", "Hearts Pts", document.getElementsByClassName("heart")[0]);
CreaClasse("div", " ", document.getElementsByClassName("heartSteps")[0], "steps");
CreaImm("img"," ", document.getElementsByClassName("steps")[0],"../immagini3App/Vector (13).png","heart");
CreaSenzaAttributi("p", "Steps", document.getElementsByClassName("steps")[0]);
CreaClasse("div"," ", document.getElementsByClassName("padre")[0],"calorie");
CreaSenzaAttributi("p", "900", document.getElementsByClassName("calorie")[0]);
CreaSenzaAttributi("p", "0", document.getElementsByClassName("calorie")[0]);
CreaSenzaAttributi("p", "4500", document.getElementsByClassName("calorie")[0]);

let divId=document.createTextNode(" ");
let elementoDivId=document.createElement("div");
elementoDivId.className="calorie";
elementoDivId.id="calorie";
elementoDivId.appendChild(divId);

let nodo1=document.getElementsByClassName("padre")[0];
nodo1.appendChild(elementoDivId);

CreaSenzaAttributi("p", "Cal", document.getElementById("calorie"));
CreaSenzaAttributi("p", "Km", document.getElementById("calorie"));
CreaSenzaAttributi("p", "Steps", document.getElementById("calorie"));

CreaSenzaAttributi("article", " " ,document.getElementsByClassName("padre")[0]);
CreaClasse("div", " ", document.getElementsByTagName("article")[0],"daily");
CreaSenzaAttributi("p", "Your daily goals", document.getElementsByClassName("daily")[0]);
CreaSenzaAttributi("p", "Last 7 days", document.getElementsByClassName("daily")[0]);
CreaClasse("div", " ", document.getElementsByTagName("article")[0],"vector");
CreaSenzaAttributi("p", " ", document.getElementsByClassName("vector")[0]);
CreaImm("img", " ", document.querySelectorAll(".vector>p")[0],"../immagini3App/Vector.png", " ");
CreaClasse("div", " ", document.getElementsByTagName("article")[0],"achieved");
CreaSenzaAttributi("p", "0/7 ", document.getElementsByClassName("achieved")[0]);
CreaSenzaAttributi("p", "Achieved", document.getElementsByClassName("achieved")[0]);
CreaClasse("div", " ", document.getElementsByTagName("article")[0],"settimana");
 for(let i=0;i<7;i++){
    CreaClasse("div"," ", document.getElementsByClassName("settimana")[0],"giorni");
}

for(let i=0;i<7;i++){
    CreaSenzaAttributi("p"," ",document.getElementsByClassName("giorni")[i]);
    CreaSenzaAttributi("p"," ",document.getElementsByClassName("giorni")[i]);
}

for(let i=0; i<7;i++){
    CreaImm("img"," ",document.querySelectorAll(".giorni>p:first-child")[i],"../immagini3App/Ellipse 134 (2).png", " ");
    CreaImm("img"," ",document.querySelectorAll(".giorni>p:nth-child(2)")[i],"../immagini3App/Ellipse 131 (2).png", " ");

} 

CreaSenzaAttributi("article", " ", document.getElementsByClassName("padre")[0]);
CreaClasse("div", " ", document.getElementsByTagName("article")[1]," weekly");
CreaSenzaAttributi("p", " Your weekly target", document.getElementsByClassName("weekly")[0]);
CreaSenzaAttributi("p", " ", document.getElementsByClassName("weekly")[0]);
CreaImm("img", " ", document.querySelectorAll(".weekly>p+p")[0],"../immagini3App/Vector.png", " ");
CreaClasse("div", " ",document.getElementsByTagName("article")[1]," barra");
CreaSenzaAttributi("p", " 10/200", document.getElementsByClassName("barra")[0]);
CreaClasse("div", " ", document.getElementsByClassName("barra")[0],"barraInterno");
CreaSenzaAttributi("p", " ", document.getElementsByClassName("barraInterno")[0]);
CreaImm("img", " ", document.querySelectorAll(".barraInterno>p")[0],"../immagini3App/Line 119.png", " ");
CreaSenzaAttributi("p", " ", document.getElementsByClassName("barraInterno")[0]);

let immId=document.createTextNode(" ");
let elementoImmId=document.createElement("img");
elementoImmId.id="dimensione";
elementoImmId.src="../immagini3App/Line 118.png";

elementoImmId.appendChild(immId);

let nodo2=document.querySelectorAll(".barraInterno>p+p")[0];
nodo2.appendChild(elementoImmId);

CreaClasse("div", " ", document.getElementsByTagName("article")[1]," testo");
CreaSenzaAttributi("p","Lorem ipsum dolor sit amet, consectetur adipiscing elit.Amet elementum libero netus. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet elementum libero netus. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet elementum libero netus. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet elementum libero netus. Lorem ipsum dolor sit amet.", document.getElementsByClassName("testo")[0]);
CreaSenzaAttributi("footer"," ", document.getElementsByClassName("padre")[0]);
CreaSenzaAttributi("div", " ", document.getElementsByTagName("footer")[0]);

for(let i=0; i<4;i++){
    CreaSenzaAttributi("p", " ", document.querySelectorAll("footer>div")[0]);
}

CreaImm("img"," ", document.querySelectorAll("footer>div>p:first-child")[0]," ../immagini3App/Vector (1).png"," ");
CreaImm("img"," ", document.querySelectorAll("footer>div>p:nth-child(2)")[0]," ../immagini3App/Vector (2).png"," ");
CreaImm("img"," ", document.querySelectorAll("footer>div>p:nth-child(3)")[0]," ../immagini3App/Vector (3).png"," ");
CreaImm("img"," ", document.querySelectorAll("footer>div>p:last-child")[0]," ../immagini3App/Vector (4).png"," ");

}) 




