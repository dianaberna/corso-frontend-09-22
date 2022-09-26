import {CreaClasse,CreaSenzaAttributi,CreaImm} from "../../funzioniExport.js"
    
window.addEventListener('load', ()=> {
   CreaClasse("div", " ", document.getElementsByClassName("padre")[0],"principale");
   CreaSenzaAttributi("p", "CLICCA IL BOTTONE", document.getElementsByClassName("principale")[0]);
   CreaSenzaAttributi("p", " ", document.getElementsByClassName("principale")[0]);



 let button=document.createTextNode("Generate Quote");
 let elementoButton=document.createElement("button");
 elementoButton.id="button";

 elementoButton.appendChild(button);

 let nodoButton=document.getElementsByClassName("padre")[0];
 nodoButton.appendChild(elementoButton); 

 let bottone=document.getElementById("button");
 
 bottone.onclick=genera;
 
 })

 function genera(){
    const quotes= {
    "-Nelson Mandela" : '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
    "-Walt Disney" : '"The way to get started is to quit talking and begin doing."', 
    "-Steve Jobs" : '"Your time is limited, so don t waste it living someone else s life. Don t be trapped by dogma-which is living with the results of other people s thinking."',
    "-Eleanor Roosevelt" : '"If life were predictable it would cease to be life, and be without flavor."',
    "-Oprah Winfrey" : "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    " -James Cameron" : "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    "-John Lennon" : "Life is what happens when you're busy making other plans."
    }
    
    var autori = Object.keys(quotes)
    var autore =autori[Math.floor(Math.random()* autori.length)];
    var quote=quotes[autore];
    console.log(quote);

    document.getElementsByTagName("p")[0].innerHTML=quote;
    document.getElementsByTagName("p")[1].innerHTML=autore;
    

}