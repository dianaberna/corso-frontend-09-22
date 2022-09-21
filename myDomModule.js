/*
 * moved from 13-dom.js
 */

/* crea SOLO un elemento, GENERICO */
function crElem(tag, idOrClass="") {
    let elem = document.createElement(tag);
    /*
    idOrClass :
    - "0_litfit" by id
    - "1_function" by one class
    - "2_function__circle" by more classes // TODO : not yet tested here

    childsContent :
    - formatted as a JSON array [{elem, attributs, content}, {elem, attributs, content}, ... ]
    */
    // TODO : try to change it into a switch-case
    if (idOrClass.split("_")[0] === "0" ) {
        elem.id = idOrClass.split("_")[1];
    } else if (idOrClass.split("_")[0] === "1" ) {
        elem.className = idOrClass.split("_")[1];
    } else if (idOrClass.split("_")[0] === "2" ) {
        idOrClass = idOrClass.split("_")[1]
        for (let _class of idOrClass.split("__")) {
            elem.classList.add(_class);   // UTILE PER AGGIUNGERE PIÙ CLASSI
        };
    }else {
        // NOTE :idOrClass should be undefined or None here OR SORT OF WITH AN EMPTY STRING
    }; // NOTE : l'ho spostata in questa funzione di crea element dall'interno della funzione crFromJson
    return elem
};


/* una funzione per creare un elemento SUL BODY */
function append2body(child, idOrClass="") {
    let elem = crElem(child, idOrClass);
    document.body.appendChild(elem);
    return elem
};

function append2parent(child, parent, idOrClass="") {
    let elem = crElem(child, idOrClass);
    parent.appendChild(elem);
    return elem
};

function nestingFromJson(parent, childrenContent) {


    // it might be counter intuitive with these names, but here is the nesting
    // WARNING: ho refattorizzato lo script e modificato questa funzione solo per innestare tutto il childrenContent dentro un parent
    // parent ~~> elem~~ > newElem > innerElem > child
    // parent ~~> tag >~~ item["elem"] > item["content"]      // item["content"] then holds innerElem[0] and innerElem[1] (last one is the value of innerHTML )
    for (let item of childrenContent) {
        let newElem = append2parent(item["elem"], parent)
        // // DEBUG :
        // console.log(`working for ${item.elem}.${item.attributes[0][1]} `);
        for (let attr of item["attributes"]) {
            // controllo che la prima array-coppia (attr-value) dentro l'array non sia una array-coppia VUOTA
            if (attr.length !== 0){
                // // DEBUG :
                // console.log(item["attributes"]);
                newElem.setAttribute(...attr);
            };
        };
        // check if item.content has a string or more strings inside an array
        if (Array.isArray(item["content"])) {
            for (let innerElem of item["content"]) {
                let child = append2parent(innerElem[0], newElem)
                child.innerHTML = innerElem[1];
            };
        } else {
            newElem.innerHTML = item["content"]
        };
    };
    // NOTE : I don't think I still need to return nothing, anyway I just have a variable for the newElem which will be the last of the childrenContent
    // return elem
};

/* created a class for any kind of HtmlElem */
class HtmlElem {
    // non più variabili, dentro una classe diventano proprietà
    elem = "";
    attributes = [];
    content = ``;

    // creaiamo il costruttore per accedere, quando si crea un'istanza, alle proprietà della classe
    constructor ({ elem, attributes, content }) {
        this.elem = elem;
        this.attributes = attributes;
        this.content = content;
    };

    // NOTE :
    // metodi se mai volessi aggiungere delle funzioni proprie ad ogni istanza della classe
};


export { append2body, append2parent, nestingFromJson, HtmlElem };
