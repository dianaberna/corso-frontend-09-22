window.addEventListener("load",function(){
    // sfondo
    /* let sfondo= document.createElement("section")
    sfondo.className="background";
    document.body.appendChild(sfondo); */

    // div padre
    let divSpeciale = document.getElementById("container");
    
    //div immagine
    let immagine = document.createElement("img");
    immagine.id = "image";
    immagine.setAttribute("src", "unsplash_3n3mPoGko8g.png");
    immagine.setAttribute("alt", "Tazza di Caffè");
    divSpeciale.appendChild(immagine);

    // div contenuto principale
    let divContenuto = document.createElement("div");
    divContenuto.className="text";
    divSpeciale.appendChild(divContenuto);


    // Titolo H2
    
    let nuovoTitoloH2 = document.createElement("h2");
    nuovoTitoloH2.innerHTML="About <span>us</span>";
    divContenuto.appendChild(nuovoTitoloH2);


    // Titolo H3
    let testoTitoloH3 = document.createTextNode("We provide quality coffee, and ready to deliver.");
    let nuovoTitoloH3 = document.createElement("H3");
    nuovoTitoloH3.appendChild(testoTitoloH3);
    divContenuto.appendChild(nuovoTitoloH3);


    // paragrafo
    let testoParagrago = document.createTextNode("We are a company that makes and distributes delicious drinks. our main product is made with a secret recipe and available in stores worldwide.");
    let nuovoParagrafo = document.createElement("p");
    nuovoParagrafo.appendChild(testoParagrago);
    divContenuto.appendChild(nuovoParagrafo);

    // inserimento bottone
    /* let btn = document.getElementsByClassName("button")
    btn.addEventListener("click", () => {
        console.log("sono stato cliccato")
        let nuovoTesto = document.createTextNode("Get your coffee")
        let nuovoElemento = document.createElement("p")
        nuovoElemento.appendChild(nuovoTesto)

}) */
})