console.clear;

window.addEventListener("load", function(){

    function ramificaFratelli(parentTag, tag, attributo, valoriAtt){
        
        for(let i=0; i<tag.length; i++){
            let unTag = document.createElement(tag[i]);
            if(attributo[i]!==null){
                unTag.setAttribute(attributo[i],valoriAtt[i]);
            }
            parentTag.appendChild(unTag);    
        }
        return true; //in caso.. di controllo su buon fine o aggiunta gestione errore
    }


    //creo <main></main> in body
    let main = document.createElement("main");
    document.body.appendChild(main);

    //creo primo annidamento
    ramificaFratelli(main,["div","div"],["class","class"],["barra_sx","content"]);

    //creo secondo livello
    let barra_sx=document.querySelector("main .barra_sx");
    ramificaFratelli(barra_sx,["div","div"],["class","class"],["logo","voci_sx"]);
    let content=document.querySelector("main .content");
    ramificaFratelli(content,["div","div"],["class","class"],["nav","belly"]);

    //creo terzo livello
    let logo=document.querySelector("main .barra_sx .logo");
    ramificaFratelli(logo,["span","span"],[null,null]);
    document.querySelector("main .barra_sx .logo span + span").innerHTML="Motiv.";
    
    //struttura pulsantiera a sinistra nel terzo livello
    let nBottoni = 8; //si lascia modificabile il numero di bottoni
    let pulsantiera=document.querySelector("main .barra_sx .voci_sx");
    for(let i=0; i<nBottoni; i++){
        ramificaFratelli(pulsantiera,["button"],["class"],["menu_buttons"]);
    }


    //creo quarto livello
    let SVGlogoCode = `<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect y="0.0742188" width="26.914" height="26.85" rx="6" fill="#A162F7"/> <path d="M9.1273 19.7063L10.8492 17.9843C6.48698 15.344 7.21403 11.3357 8.12284 9.6616L13.5039 14.8992L18.885 9.6616C20.9513 14.1387 17.8805 17.0277 16.0868 17.9126L17.9523 19.7063C24.6248 14.6839 21.3961 7.93966 18.885 6.07422L13.5039 11.4553L7.97934 6.07422C2.09602 11.814 6.25741 18.2713 9.1273 19.7063Z" fill="white"/> </svg>`;
    document.querySelector("main .barra_sx .logo > span").innerHTML = SVGlogoCode;
    
    
    //(4° lvl bottoni) creo i percorsi per gli SVG delle icone per il gruppo bottoni, gli span dentro ai bottoni e li completo
    let = svg_common_path = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">`;

    let bottoni_sx=document.querySelectorAll("main .barra_sx .voci_sx .menu_buttons");
    for(let i=0; i<nBottoni; i++){
        ramificaFratelli(bottoni_sx[i],["span","span"],[null,null]);
        let span_icona=bottoni_sx[i].querySelectorAll("span")[0];
        let span_testo=bottoni_sx[i].querySelectorAll("span")[1];
        span_icona.innerHTML="icona";
        span_testo.innerHTML="testo";
    }
});