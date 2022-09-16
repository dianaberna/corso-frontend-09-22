window.addEventListener("load", function () { // `function(){}` si comporta come una callback
    console.log("Hello There, World");
    document.body.style.backgroundColor = "red";
    document.getElementById("firstID").style.backgroundColor = "blue";  // ce ne stà ovviamente solo uno
    document.getElementById("firstID").style.padding = "0.5rem";  // ce ne stà ovviamente solo uno

    let allParagraphs = document.getElementsByTagName("p");
    for (let i = 0 ; i < allParagraphs.length; i++) {
        allParagraphs[i].style.backgroundColor = "white";  // stessa cosa per qualsiasi elemento
    };

    /* FUNZIONA SOLO PER .querySelector & .querySelectorAll */
    // allParagraphs.forEach(elem => {
    //     elem.style.backgroundColor = "white";
    // });

    document.getElementsByClassName("anyclass")[0].style.backgroundColor = "blue";  // ci si aspetta un risultato multiplo, quindi è necessario un indice di un'array
    document.getElementsByTagName("p")[0].style.background = "green";  // stessa cosa per qualsiasi elemento

    let carlothirdHier = document.querySelectorAll(".carlo-third > p");
    // for (let i = 0 ; i < carlothirdHier.length ; i++) {
    //     carlothirdHier[i].style.backgroundColor = "black";
    //     carlothirdHier[i].style.color = "white";
    // };

    carlothirdHier.forEach(elem => {
        elem.style.backgroundColor = "black";
        elem.style.color = "white";
    });



    /*  */ /* RICORDA forEach CON querySelector */ /*  */
    // let acronymSpan = document.getElementsByClassName("acronym");
    // for (let i=0 ; i < acronymSpan.length ; i++) {
    //     acronymSpan[i].style.textDecoration = "underline";
    // };

    let acronymSpan = document.querySelectorAll(".acronym");
    acronymSpan.forEach(elem => {
        elem.style.textDecoration = "underline";
    });

    let classanyLastChild = document.querySelector(".classany > p:last-child");
    classanyLastChild.style.backgroundColor = "purple" ;


/*     What a confusion... */
    // 1. first we Create Text Node,
    // 2. then Create the Element
    // 3. we append Text Node to the Element as a Child
    // 4. finally append Element to the Id
    let kingUK = document.getElementById("king-of-UK");
    let newTitle = document.createTextNode("Nuovo Titolo & Nome Per Carlo Windsor");
    let newH2 = document.createElement("h2");
    newH2.appendChild(newTitle);
    kingUK.appendChild(newH2);

    // TODO : vorrei questo titolo sopra a tutto nel terzo div


    // initialized a button
    let textButton = document.createTextNode("Click Me!");
    let createButton = document.createElement("button");

    createButton.id="hail-king"
    createButton.title="What are you waiting for? Click Here!"

    createButton.appendChild(textButton);
    kingUK.appendChild(createButton);

    // TODO : aggiungere una funzione con addElementListener per il bottone appena creato "#hail-king"
});