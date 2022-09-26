import {CreaClasse,CreaSenzaAttributi} from "../../funzioniExport.js"
let ArrRgb=["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];
let Color1 = "";
let Color2 = "";
let Indice = 0;


window.addEventListener("load", ()=>{
    CreaSenzaAttributi("p"," GENERA COMBINAZIONI RANDOM DI COLORI ",document.getElementsByClassName("padre")[0]);
    CreaSenzaAttributi("p", " ", document.getElementsByClassName("padre")[0]);
    CreaClasse("button", "Cliccami per cambiare colore", document.getElementsByClassName("padre")[0],"button");

    let bottone=document.getElementsByClassName("button")[0];
    bottone.addEventListener('click', ()=>{
        ChangeColor();

    })

})


function ChangeColor(){
    for(let i=0; i<6; i++)
    {
        Indice=Math.floor(Math.random()*ArrRgb.length);
        Color1 += ArrRgb[Indice];
        Indice=Math.floor(Math.random()*ArrRgb.length);
        Color2 += ArrRgb[Indice];
        let Change=document.body.style.background= `linear-gradient(-90deg, #${Color1}, #${Color2})`;
        document.getElementsByTagName("p")[1].innerHTML=Change;

    }

    Color1="";
    Color2="";
}



/* function ChangeColor(){
    let Color1=Math.floor(Math.random()*255);
    let Color2=Math.floor(Math.random()*255);

    console.log("ciao");
    let Change=document.body.style.background= `linear-gradient(#${Color1}, #${Color2})`;
    document.getElementsByTagName("p")[1].innerHTML=Change;

} */