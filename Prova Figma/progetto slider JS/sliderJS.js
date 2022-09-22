window.addEventListener ("load", function(){
    console.log("Documento caricato");



    /* funzione generica per la creazione dei vari elementi html (div, paragrafi etc) */
    function creaElemento(tag,contenuto,posizione){ /* do il nome alla funzione e gli assegno tre paramenti: il tag html, il contenuto (variabile a piacere) e la posizione rispetto al codice html (dentro cosa viene annidato il nuovo elemento) */
        let elemento = document.createElement(tag); /* creo la variabile generica "elemento" e gli dico che creata dentro il document */
        let contenutoElemento = document.createTextNode (contenuto); /* creo il contenuto testuale del nuovo elemento */
        elemento.appendChild(contenutoElemento); /* appendo il nodo del testo (contenutoElemento) all'elemento creato */
        posizione.appendChild(elemento); /* indico la posizione html in cui il nuovo elemento deve essere creato */
        return elemento; /* restituisco la funzione quando richiamata */
    }

    /* contenitore principale */
    let portfolio = creaElemento("section","",document.body);
    portfolio.setAttribute("id", "portfolio");

    /* div dello slider */
    let slider = creaElemento("div","", portfolio);
    slider.setAttribute("class","slider");

        /* inserisco (append) sfondo (che non è il background color) nello slider */
        let imgSfondo = creaElemento ("img", "immagine di sfondo dello slider", slider);
        /* dico a js il percorso da cui recuperare l'immagine e il testo alternativo */
        imgSfondo.setAttribute("src", "sfondo.png");
        imgSfondo.setAttribute("alt", "sfondo dello slider");
        imgSfondo.setAttribute("id","imgSfondo");

        /* creo il bottone di sinistra */
        let buttonLeft = creaElemento("button","", slider);
        buttonLeft.setAttribute("id", "left");
        buttonLeft.setAttribute("onclick","scorri_immagine(-1)");

            /* inserisco svg della direzione*/
            let sinistra = creaElemento("img","", buttonLeft)
            sinistra.setAttribute("src","left.png");
            sinistra.setAttribute("alt", "sinistra");
            /* sinistra.setAttribute("onclick","scorri_immagine(-1)"); */

        /* creo il bottone di destra */
        let buttonRight = creaElemento("button","", slider);
        buttonRight.setAttribute("id", "right");
        buttonRight.setAttribute("onclick","scorri_immagine(1)");

            /* inserisco svg della direzione*/
            let destra = creaElemento("img","", buttonRight)
            destra.setAttribute("src","right.png");
            destra.setAttribute("alt", "destra");
            /* destra.setAttribute("onclick","scorri_immagine(1)"); */



        /* TODO:creo contenitore immagini da scorrere*/
        let contenitore = creaElemento("div", "", slider);
        contenitore.setAttribute("class","contenitore");
        
        
        let segnaposto=0;

        

            /* creo oggetti immagini da scorrere */
            let img1 =creaElemento("img","", contenitore);
            img1.setAttribute("id","img1");
            img1.setAttribute("src","page01.png");
            img1.setAttribute("alt","immagine1");

             let img2 =creaElemento("img","", contenitore);
            img1.setAttribute("id","img2");
            img1.setAttribute("src","page02.png");
            img1.setAttribute("alt","immagine2");

            let img3 =creaElemento("img","", contenitore);
            img1.setAttribute("id","img3");
            img1.setAttribute("src","page03.png");
            img1.setAttribute("alt","immagine3");



        
        

       
        

        



    /* div del testo/portfolio (fratello dello slider) */
   /* let textSection = creaElemento("div","", portfolio);
   textSection.setAttribute("class","text");
 */
        /* titolo della sezione testuale (in H1) */
        /* let titoloPortfolio = creaElemento ("h1","Portfolio",textSection); */

        /* linea di separazione tra titolo e testo */
        /* let riga =creaElemento("hr","", textSection); */

        /* paragrafo contentente testo della sezione*/
        /* let testo = creaElemento("p", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."+
        "Morbi risus duis nibh laoreet. Malesuada luctus tincidunt"+
        "tortor consectetur netus facilisi dapibus laoreet orci."+
        "Viverra amet maecenas consectetur tincidunt felis, pretium"+
        "posuere ut sapien. Cursus lacus vitae purus est viverra eu"+
        "ornare tellus augue. Proin risus, sed diam ac. Aliquet.",textSection); */

        /* creo il bottone, figlio della textSection*/
       /*  let bottone =creaElemento("button", "View All", textSection);
        bottone.setAttribute("id","view");
 */







    /* creo il div principale dentro cui annidare tutto il resto del contnuto richiamanto la funzione generica creaElemento. Gli dico che l'elemento è un div, che conterrà il testo "questo è il div principale" e che dovrà andare a posizionarsi dentro il body (annidarsi dento il body)*/
    /* let divPrincipale = creaElemento("div","",document.body); */
    


    /* let divPrincipale=document.getElementsByTagName("div")[0];  eliminare?*/

    /* creo un sotto div all'interno del div principale, sfruttando sempre la funzione generica creaElemento */
    /* let div2livello = creaElemento("div","",divPrincipale); */

    

    /* creo degli span all'interno del primo div annidato, sfruttando sempre la funzione generica creaElemento */
    /* let div1_2livello = creaElemento("div","primo span",div2livello);
    let div2_2livello = creaElemento("div","",div2livello);
    div2_2livello.setAttribute("id", "portfolio"); */
    
    /* let div3 = creaElemento("div", "", div2_2livello)
    let titoloPortfolio = creaElemento("h1", "Portfolio", div3);
    let parSpan2 = creaElemento("p", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi risus duis nibh laoreet. Malesuada luctus tincidunt tortor consectetur netus facilisi dapibus laoreet orci. Viverra amet maecenas consectetur tincidunt felis, pretium posuere ut sapien. Cursus lacus vitae purus est viverra eu ornare tellus augue. Proin risus, sed diam ac. Aliquet.", div3); */
    
    /* appendo un'immagine dentro al div 2 livello */
    /* let img1 = creaElemento ("img", "immagine 01 dello slider", div1_2livello); */

    /* dico a js il percorso da cui recuperare l'immagine e il testo alternativo */
    /* img1.setAttribute("src", "sfondo.png");
    img1.setAttribute("alt", "sfondo dello slider"); */


        /* creo il nodo relativo al testo del nuovo elemento */
        /* let divPrincipale = document.createElement("div");  */

        /* creo il nuovo elemento (il div proncipale dentro cui annidare gli altri) */
        /* let contenutoDivPrincipale = document. createTextNode ("Questo è il div principale")
 */
        /* appendo il nodo testo al div principale */
        /* divPrincipale.appendChild(contenutoDivPrincipale); */



        /* appendo il div principale al body */
        /* document.body.appendChild(divPrincipale); */




    /* creazione di un div in JS dentro divPrincipale */


        /* creo il nodo relativo al testo del nuovo elemento */
        /* let div1 = document.createElement("div"); */

        /* creo il nuovo elemento (il div1  dentro cdivPrincipale) */
/*         let contenutoDiv1 = document.createTextNode ("Questo è il div1") 
 */
        /* appendo il nodo testo al div principale */
/*         div1.appendChild(contenutoDiv1);
 */

        /* appendo il div principale al divPrincipale */
/*         divPrincipale.appendChild(div1);
 */



    /* let body = document.getElementsByTagName("body");
    let testoDiv = document.createTextNode("div principale")
    let divPrincipale = document.createElement("div")
    nuovoDiv.appendChild(testoDiv)
    body.appendChild(divPrincipale) */



} /* fine function di window.addEventListener */
) /* fine window.addEventListener */

 /*funzione che scorre l'array */
 function scorri_immagine (i){
    let segnaposto=i;
    
let img1 =document.getElementById("img1");
let img2 =document.getElementById("img2");
let img3 =document.getElementById("img3");

console.log(i);

        /* creo array delle immagini */ 
        let array = [img1,img2,img3];


   /*  for(j=0; j < array.length; j++){
         (array[j]);
    } */

    /* gestisco il loop delle immagini */
if (segnaposto > array.length -1){
segnaposto=0;
}
if (segnaposto < 0){
segnaposto = array.lenght -1;
}
};


