import {CreaClasse,CreaSenzaAttributi} from "../../funzioniExport.js"

window.addEventListener("load", ()=>{
CreaClasse("div", " ", document.getElementsByClassName("padre")[0], "mainClass");
CreaSenzaAttributi("p", "Scrivi il messaggio", document.getElementsByClassName("mainClass")[0]);
CreaSenzaAttributi("hr"," ",document.getElementsByClassName("mainClass")[0]);

CreaClasse("div", " ",document.getElementsByClassName("padre")[0],"messaggio")
CreaSenzaAttributi("p", "Inserisci il messaggio", document.getElementsByClassName("messaggio")[0]);

let inp=document.createTextNode(" ");
let ElementoInp= document.createElement("input");
ElementoInp.type="text";
ElementoInp.value=" ";

ElementoInp.appendChild(inp);

let nodo=document.getElementsByClassName("messaggio")[0];
nodo.appendChild(ElementoInp);

CreaClasse("button", "SUBMIT", document.getElementsByClassName("messaggio")[0],"button");
CreaClasse("p"," ",document.getElementsByClassName("messaggio")[0], "out");

let bottone=document.getElementsByClassName("button")[0];
bottone.addEventListener("click",()=>{
    AggMessaggio(ElementoInp);

})
 
document.getElementsByTagName("input")[0].addEventListener('keydown', (event)=>{
    if(event.key=='Enter'|| event.key==' ') {

        AggMessaggio(ElementoInp);
    }
   
    

})

})

function AggMessaggio(text){
let valore=text.value;
document.getElementsByClassName("out")[0].innerHTML=valore;

}