window.addEventListener("load", function () { // `function(){}` si comporta come una callback
    console.log("Hello There, World");
    document.body.style.backgroundColor = "red";
    document.getElementById("firstID").style.backgroundColor = "blue";  // ce ne stà ovviamente solo uno
    document.getElementById("firstID").style.padding = "0.5rem";  // ce ne stà ovviamente solo uno

    alert(document.getElementById("firstID").style.cssText);

    /* MEMENTO */
    // per farlo in un'unica riga con una stringa e in sintassi CSS 😎
    document.getElementById("firstID").style.cssText = "background-color: blue; padding: 0.5rem;"

    // Utile per aver l'elenco completo delle proprietà di un elemento
    alert(document.getElementById("firstID").style.cssText);

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



    // MEMENTO
    /*  */ /* RICORDA for-loop CON getElementByClassName */ /*  */
    // let acronymSpan = document.getElementsByClassName("acronym");
    // for (let i=0 ; i < acronymSpan.length ; i++) {
        //     acronymSpan[i].style.textDecoration = "underline";
    // };

    /*  */ /* RICORDA forEach CON querySelector */ /*  */
    let acronymSpan = document.querySelectorAll(".acronym");
    acronymSpan.forEach(elem => {
        elem.style.textDecoration = "underline dotted";
    });

    let classanyLastChild = document.querySelector(".classany > p:last-child");
    classanyLastChild.style.backgroundColor = "purple" ;


    /*     What a confusion... */
    // 1. first we Create Text Node,
    // 2. then Create the Element
    // 3. we append Text Node to the Element as a Child
    // 4. finally append Element to the Id
    let kingUK = document.getElementById("king-of-UK");
    kingUK.style.margin = "10px"
    let newTitle = document.createTextNode("Nuovo Titolo & Nome Per Carlo Windsor");
    let newH2 = document.createElement("h2");
    // contenuto del tag appeso come figlio
    newH2.appendChild(newTitle);    // padre.appendChild(figlio)
    // kingUK.appendChild(newH2);

    // titolo h2 appeso come e dove vogliamo, diverso da appeso come ultimo fratello dentro il padre
    kingUK.insertAdjacentElement("beforebegin", newH2);    // elemnto.insertAdjacentElement(posizione, adiacenteElemento)
    /* tutti i valori per l'argomento `position` */
    // position: "beforebegin" | "afterbegin" | "beforeend" | "afterend"

    // TODO : vorrei questo titolo sopra a tutto nel terzo div


    // bottone inizializzato
    let textButton = document.createTextNode("Click Me!");
    let createButton = document.createElement("button");

    createButton.id="hail-king"
    createButton.title="What are you waiting for? Click Here!"

    // bottone appeso come figlio
    createButton.appendChild(textButton);
    kingUK.appendChild(createButton);

    let hailButton = document.getElementById("hail-king");
    // let textHailButton = document.createTextNode("LONG LIVE THE KING!");
    hailButton.addEventListener("click", function(){
        hailButton.innerHTML= "LONG LIVE THE KING!";
    });

    let hrElementsAll = document.getElementsByTagName("hr");
    // meglio salvarsi la lunghezza in una varibile fissa
    let hrElementsAll_length = hrElementsAll.length
    for (let i = 0 ; i < hrElementsAll_length ; i++) {  // rimpiazzo . con _ per aver length fissa
        // // DEBUG : se non fosse una varibile fissa, length e i variano, incontrandosi a metà strada
        // console.log(hrElementsAll.length);
        hrElementsAll[0].remove();
        alert(`Removed horizontal line #${i + 1}`);
    };

    function createNewElem(parent, element, text){
        let textCreated = document.createTextNode(text);
        let elementCreated = document.createElement(element);
        let parentNode = document.getElementById(parent);

        elementCreated.appendChild(textCreated);
        parentNode.appendChild(elementCreated);
    };

    createNewElem("firstID", "p", "New paragraph");
});