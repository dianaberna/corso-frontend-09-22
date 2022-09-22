function ciao(){
    /* arrivederci(); */
    return"ciao!";
}

function arrivederci(){
    return "arrivederci!";
}

/* esporto la funzione ciao. Ci puo essere una sola funzione di default */
export default ciao;

export {arrivederci};


/* esporto le funzioni tutte insieme */
/* export {ciao, arrivederci}; */