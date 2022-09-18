window.addEventListener("load", function(){
    let bottone = document.getElementById("bottone");
    const par2 = document.getElementsByTagName("p")[1];
    par2.style.backgroundColor = "red"

    bottone.addEventListener("click", function(){
        const paragrafo = document.getElementById("paragrafo");
        const titolo = document.getElementById("titolo");
        titolo.insertAdjacentElement("afterend", paragrafo);
        
        par2.parentNode.style.backgroundColor = "blue"
    })
    

})

