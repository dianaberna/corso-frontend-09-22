window.addEventListener("load", function(){
    console.log("ciao")
    document.getElementById("hola").style.backgroundColor = "red"
    for(let i=0;i<document.getElementsByClassName("testi").length;i++)
        document.getElementsByClassName("testi") [i].style.color="white"
    
    i=0
    let sad=this.document.getElementsByClassName("ho")
    while(i<sad.length){
        sad[i].style.color="yellow"
        sad[i].style.backgroundColor="red"
        i++

    }

    i=0
    let sfondo=this.document.getElementsByTagName("body")
    while(i<sfondo.length){
        sfondo[i].style.color="yellow"
        sfondo[i].style.backgroundColor="yellow"
        i++

    }

    let div=document.getElementsByClassName("ho")[0]
    let testo=document.createTextNode("sono un testo <br> ciao a capo")
    let paragrafo=document.createElement("p")
    paragrafo.appendChild(testo)
    div.appendChild(paragrafo)

    var creabottone= document.createElement("button")
    var textbottone= document.createTextNode("Schiacciami")
    creabottone.id="nuovobottone";
    creabottone.value="Schiacciami";
    creabottone.appendChild(textbottone);
    var hola=document.getElementById("hola")
    hola.appendChild(creabottone);






})