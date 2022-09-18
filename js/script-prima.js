
window.addEventListener("load", function () {
    alert("sono nell'event listener e il body è stato caricato")
    console.log("sono nel dom1 nell'event listener");
    document.getElementById("primodiv").style.backgroundColor = "red";
});

alert("ho caricato il file dom.js e il dom non è ancora caricato")
console.log("sono nel dom1 FUORI event listener");
document.getElementById("terzodiv").style.backgroundColor = "purple";