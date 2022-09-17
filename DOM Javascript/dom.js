//cambio colore di un solo id
alert("ho cambiato colore dell'id colore in rosso");
window.addEventListener("load", function(){
    console.log("cambio colore");
document.getElementById("colore").style.backgroundColor = "red";

//cambio colore di tutti i paragrafi
alert("cambio colore di tutti i paragrafi");
let risultato=document.getElementsByTagName("p");
let indice =0;
while (indice<risultato.length){ //scorre array
    risultato[indice].style.backgroundColor = "royalblue";
    indice++; //scorre e incrementa
}

//genero un paragrafo all'interno di un div
alert("ho cambiato colore dell'id colore in rosso");
let div=document.getElementsByClassName("provajs")[0];  // al primo elemento che ha questa classe aggiungo tutto cioò che ho scritto
let testo=document.createTextNode("sono un testo generato da js"); //creaiamo nodo testo
let paragrafo=document.createElement("p"); //creo elemento p ovvero tag paragrafo
paragrafo.appendChild(testo); //inserisco il testo nel paragrafo
div.appendChild(paragrafo);

//creazione pulsante
alert("creo pulsante cliccami");
var textBottone = document.createTextNode("Cliccami!");
    var creaBottone = document.createElement("button");
    creaBottone.id="nuovoBottone";
    creaBottone.value="provaaa!";
    var demo1 = document.getElementById("demo1");
    creaBottone.appendChild(textBottone);
    demo1.appendChild(creaBottone);

//rimozione elemento ID. Per classe e tag bisogna fare un ciclo for o while
alert("ho rimosso l'elemento con id ciao")
const elemento = document.getElementById("ciao");
elemento.remove();

//clicco bottone ed esce messaggio
let bottone=document.getElementById("myBtn1");
bottone.addEventListener("click", function() {
    alert("Ben fatto!");
  });

  //aggiungo scritta ogni volta che faccio cose sul bottone
  var x = document.getElementById("myBtn");
  x.addEventListener("mouseover", myFunction);
  x.addEventListener("click", mySecondFunction);
  x.addEventListener("mouseout", myThirdFunction);
  
  function myFunction() {
    document.getElementById("demo").innerHTML += "Mouse sopra bottone!<br>";
  }
  
  function mySecondFunction() {
    document.getElementById("demo").innerHTML += "Cliccato!<br>";
  }
  
  function myThirdFunction() {
    document.getElementById("demo").innerHTML += "Mouse spostato dal bottone!<br>";
  }

})
