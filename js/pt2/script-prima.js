window.addEventListener("load", function (eventoLoad) {
    /* alert("sono nell'event listener e il body è stato caricato"); */
    console.log("sono nel dom1 nell'event listener");
    document.getElementById("primodiv").style.backgroundColor = "red";

    let bottone = document.getElementById("buttonCiao");
    bottone.addEventListener("click", function(evento){
         console.log("bottone cliccato")
         console.log("stampo il contenuto dell'evento ")
         console.log(evento.target.id)
    })

});

alert("ho caricato il file dom.js e il dom non è ancora caricato");
console.log("sono nel dom1 FUORI event listener");
document.getElementById("terzodiv").style.backgroundColor = "purple";
