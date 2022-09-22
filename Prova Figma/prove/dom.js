/*voglio che l'ascolatarore funzioni sulla pagina html*/

window.addEventListener("load", function(){                                                                  
    console.log("ciao add listener")
    document.getElementById("primoDiv").style.backgroundColor="red";
    document.getElementsByClassName("blu")[0].style.backgroundColor="blue"; /*la classe è un array quindi serve anche la posizione dell'elemento */
    document.querySelector(".blu").style.backgroundColor="blue"; /*tramite selettore css */
    document.querySelectorAll(".black")
    for(let i=0;i<this.document.getElementsByTagName("p").length;i++){ //devo dirgli tutti i p tramite questo comando perchè a differenza degli id non sono univoci
        document.getElementsByTagName("p")[i].style.backgroundColor="pink";
    }
    /* let element = this.document.getElementById("button"); 
    element.addEventListener("click")
    
    let textBottone=document.createTextNode("click");
    let creaBottone=document.createElement("button");
    creaBottone.id="nuovoBottone";

    creaBottone.value="click";
    let bottone=document.getElementById("bottone");
    creaBottone.appendChild(textBottone) ;  
    bottone.appendChild(creaBottone);
    } */


 //aggiungo ad un elemento "button" già presente nell'html un evento "ascolto" dei click  
    document.getElementById("bottone").addEventListener("click", function(){
        alert("bottone cliccato!!")
        }
    );


//aggiungere un elemento (da .ppt)
let nodo_bottone_2 = document.createTextNode("nodo bottone2??");
let elemento_bottone_2 = document.createElement("button");
elemento_bottone_2.appendChild(nodo_bottone_2);

let divHtml = this.document.getElementById("posizione");
divHtml.appendChild(elemento_bottone_2);

}
)