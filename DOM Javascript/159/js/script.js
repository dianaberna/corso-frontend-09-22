window.addEventListener("load", function(){
    //creo titolo pagina
    let titoloPagina = document.createElement("title");
    let testoT = document.createTextNode("159");
    document.head.appendChild(titoloPagina);
    titoloPagina.appendChild(testoT);
    //creo progressbar fuori da tutti i div
    let progressBar = document.createElement("progress");
    document.body.appendChild(progressBar);
    progressBar.setAttribute("max", "100");
    progressBar.setAttribute("value", "20");
    //creo un div di classe intero (divIntero)
    let divIntero = document.createElement("div");
    document.body.appendChild(divIntero);
    divIntero.setAttribute("class","intero");
    //creo un titolo h2 nel divIntero
    let testoH2 = document.createTextNode("How often do you feel stressed?");
    let elementoH2 = document.createElement("h2");
    elementoH2.appendChild(testoH2);
    divIntero.appendChild(elementoH2);
    //Primo div con all'interno p e img (div1)
    let div1 = document.createElement("div");
    let testoP1 = document.createTextNode("Almost alway");
    let elementoP1 = document.createElement("p");
    let img1 = document.createElement("img");
    img1.setAttribute("src", "img/vectorprimo.svg");
    img1.setAttribute("alt", "Almost");
    div1.appendChild(img1);
    divIntero.appendChild(div1);
    elementoP1.appendChild(testoP1);
    div1.appendChild(elementoP1);
    //Secondo div con all'interno p e img (div2)
    let div2 = document.createElement("div");
    let testoP2 = document.createTextNode("Sometime");
    let elementoP2 = document.createElement("p");
    let img2 = document.createElement("img");
    img2.setAttribute("src", "img/Group.svg");
    img2.setAttribute("alt", "Sometimes");
    div2.appendChild(img2);
    divIntero.appendChild(div2);
    elementoP2.appendChild(testoP2);
    div2.appendChild(elementoP2);
    //Terzo div con all'interno p e img (div3)
    let div3 = document.createElement("div");
    let testoP3 = document.createTextNode("Rarely");
    let elementoP3 = document.createElement("p");
    let img3 = document.createElement("img");
    img3.setAttribute("src", "img/smile.svg");
    img3.setAttribute("alt", "Rarely");
    div3.appendChild(img3);
    divIntero.appendChild(div3);
    elementoP3.appendChild(testoP3);
    div3.appendChild(elementoP3);
    //paragrafo nel divIntero
    let testoP4 = document.createTextNode("Not sure");
    let elementoP4 = document.createElement("p");
    elementoP4.appendChild(testoP4);
    divIntero.appendChild(elementoP4);
})