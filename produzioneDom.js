window.addEventListener("load",function(){






    let sfondo= document.createElement("div");
    sfondo.className="container";
    document.body.appendChild(sfondo);

    let font= document.createElement("link");
    font.setAttribute("href","https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Work+Sans:wght@400;600&display=swap");
    document.body.appendChild(font);


/* nav che contiene le icone del menù */

    let menùIniziale=document.createElement("nav");
    menùIniziale.id="barraMenù";
    document.body.appendChild(menùIniziale);

   /* icone dentro il nav */


   const icona1= new Image(15,15);
   icona1.src="https://cdn-icons-png.flaticon.com/512/271/271220.png";
   icona1.id="prima";
   menùIniziale.appendChild(icona1);
   barraMenù.appendChild(icona1);

let paragrafo=document.createElement("p");
let scritta=document.createTextNode("Share");
paragrafo.id="testo";
paragrafo.appendChild(scritta);
menùIniziale.appendChild(paragrafo);
barraMenù.appendChild(paragrafo);



   const icona2=new Image(15,15);
   icona2.src="Vector.png";
   icona2.id="seconda";
   menùIniziale.appendChild(icona2);
   barraMenù.appendChild(icona2);

/* div pulsanti */

   let pulsantoni=document.createElement("div");
   pulsantoni.id="pulsanti";
   menùIniziale.appendChild(pulsantoni);
   menùIniziale.insertAdjacentElement("afterend",pulsantoni);

   /* pulsanti */


   let pulsante=document.createElement("button");
   let scrittaPul=document.createTextNode("description");
   const img1=new Image(15,15);
   img1.src="icona pulsante1.png";
   pulsante.appendChild(img1);
   pulsante.appendChild(scrittaPul);
   pulsantoni.appendChild(pulsante);
   

   let pulsante2=document.createElement("button");
   let scrittaPul2=document.createTextNode("description");
   const img2=new Image(15,15);
   img2.src="icona pulsante2.svg";
   pulsante2.appendChild(img2);
   pulsante2.appendChild(scrittaPul2);
   pulsantoni.appendChild(pulsante2);

   let pulsante3=document.createElement("button");
   let scrittaPul3=document.createTextNode("description");
   const img3=new Image(15,15);
   img3.src="icona pulsante3.svg";
   pulsante3.appendChild(img3);
   pulsante3.appendChild(scrittaPul3);
   pulsantoni.appendChild(pulsante3);

/* div rettangolo bianco */


let rett=document.createElement("div");
   rett.id="rettangolo";
   pulsantoni.appendChild(rett);
   pulsantoni.insertAdjacentElement("afterend",rett);

   /* dentro il rettangolo bianco */


let scrittina=document.createElement("p");
let dentro=document.createTextNode("Something cool");
scrittina.id="testo1";
scrittina.appendChild(dentro);
rett.appendChild(scrittina);
const img4=new Image(15,15);
img4.src="stellina.svg";
img4 .className="stella";
scrittina.appendChild(img4);

const img5=new Image(15,15);
img5.src="stellina.svg";
scrittina.appendChild(img5);

const img6=new Image(15,15);
img6.src="stellina.svg";
scrittina.appendChild(img6);

const img7=new Image(15,15);
img7.src="stellina.svg";
scrittina.appendChild(img7);

const img8=new Image(15,15);
img8.src="stellina2.svg";
scrittina.appendChild(img8);


let scrittina2=document.createElement("p");
let dentro2=document.createTextNode("Size: 7.60 fl oz/ 225 ml");
scrittina2.appendChild(dentro2);
scrittina2.id="testo2";
scrittina.appendChild(scrittina2);
scrittina.insertAdjacentElement("afterend",scrittina2);

let scrittina3=document.createElement("p");
let dentro3=document.createTextNode("(150 reviews)");
scrittina3.appendChild(dentro3);
scrittina3.id="testo3";
scrittina2.appendChild(scrittina3);
   scrittina2.insertAdjacentElement("afterend",scrittina3);


})