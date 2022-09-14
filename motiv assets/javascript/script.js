console.clear;

//FUNZIONI

function addNumToStr(aNumber, aString)
{
    let strtoint = parseInt(aString); 
    return aNumber+strtoint;
}

function star(a,b){return a*b;}

function minOMax(aNumber){
    return a <= 0 ? true : false
    /* 
    if(aNumber>=0){
        return true;
    }
    else{
        return false;
    } */
}

function anniInGiorni(anni){
    return anni*365;
}

function contaZampe(polli, mucche, maiali){
    const zPolli=2, zMucche=4, zMaiali=4;
    return (zPolli*polli)+(zMucche*mucche)+(zMaiali*maiali);
}

function superSomma(aNumber){
    let somma=0;
    for (i=aNumber; i>0; i--) {
        somma+=i;
    }
    return somma;
}

function matchHouses(step){
    //if(step==0){return 0;}else{return (step*6)-(step-1);}
    return (step==0) ? 0 : (step*6)-(step-1)
}



//CORPO

let num = addNumToStr(4, "4");
let tipo = typeof(num);
console.log(`num è:${num}, il tipo di num è:${tipo}`);

let a=3, b=4;
console.log(`Il prodotto a*b=${star(a,b)}`);

console.log("E' minore uguale a zero? "+minOMax(prompt("Inserisci un numero")));
console.log("I tuoi anni corrispondono a "+anniInGiorni(12)+" giorni");
console.log("Ai tuoi animali corrispondono "+contaZampe(5,5,5)+" zampe");
console.log("La tua super somma è "+superSomma(10));
console.log("Il tuo match conta "+matchHouses(1)+" fiammiferi");
