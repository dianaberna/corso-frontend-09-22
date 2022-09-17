window.addEventListener("load", function(){

    console.log("ciao dom" );
/* document.getElementById("rosa") .style.backgroundColor= "red";
 */


/* let a= document.getElementsByTagName("p");
for(i=0;i<a.length; i++){

  a[i].style.backgroundColor= "orange";
    
  
}
} )

 */


/* let risultato=document.getElementsByTagName ("p")

let indice=0
while(indice<risultato.length){
risultato[indice].style.backgroundColor= "orange";
indice++ */

/* } */


let pulsante= document.createElement("button")
let testoPulsante= document.createTextNode("perchè non cliccarlo")
pulsante.id= "pulsante";
pulsante.appendChild(testoPulsante);
let rosa=document.getElementById("rosa")
rosa.appendChild(pulsante);
pulsante.addEventListener("click",function(){
  alert("è stato installato un virus correttamente");
});


let paragrafo=document.createElement("p")
let testoParagrafo= document.createTextNode("oggi non piove")
paragrafo.id="meteo";
paragrafo.appendChild(testoParagrafo);
let primopar=document.getElementById("primopar")
primopar.insertAdjacentElement("afterend",paragrafo);




})