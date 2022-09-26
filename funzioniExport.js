function CreaSenzaAttributi(elemento, contenuto, posizione){
    let Contenuto=document.createTextNode(contenuto);
    let Elemento=document.createElement(elemento);
    Elemento.appendChild(Contenuto);

    posizione.appendChild(Elemento);
}

function CreaClasse(tag,contenuto,posizione,att){
    let Tag=document.createElement(tag);
    let Contenuto=document.createTextNode(contenuto);
    Tag.className=att;
    Tag.appendChild(Contenuto);

    posizione.appendChild(Tag);
}

function CreaImm(elemento,contenuto,posizione,src,alt){
    let Contenuto=document.createTextNode(contenuto);
    let Elemento=document.createElement(elemento);
    Elemento.src=src;
    Elemento.alt=alt;
    Elemento.appendChild(Contenuto);

    posizione.appendChild(Elemento);
}

export {CreaClasse,CreaSenzaAttributi,CreaImm} 
