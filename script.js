console.log("ciao mondo!");
var a=2;
console.log(a);
a="ciao";
console.log(a);
a="ciao2";
console.log(a);


console.log("HolaHola");
let b = 2;
console.log(b);
b="ciaolet";
console.log(b);


const costante = 3;
console.log(costante);


function moltiplicazione (a,b) {
    let c = a*b;
    return c;
}

console.log (moltiplicazione(5,2));
console.log (moltiplicazione(-3,-6));
console.log (moltiplicazione(7,3));

function lessThanOrEqualToZero (a) {
    let b = (a<=0);
    return b;
}

console.log (lessThanOrEqualToZero (5));
console.log (lessThanOrEqualToZero (0));
console.log (lessThanOrEqualToZero (-2));

let r = 5;
if (r<=0) {
    console.log ("vero");
} 
else {
    console.log ("nonèvero");
}

{let r = 0;
if (r<=0) {
    console.log ("vero");
} 
else {
    console.log ("nonèvero");
}
}

{let r = -2;
if (r<=0) {
    console.log ("vero");
} 
else {
    console.log ("nonèvero");
}
}

function multi (a,b) {
    let c = (a*b);
    return c
}
console.log (multi(65,365));
console.log (multi(0,365));
console.log (multi(20,365));


/* esercizio fattoria */


function zampe (a,b,c) {
    let d=(a*2+b*4+c*4);
    return d;
}

console.log (zampe(2,3,5));
console.log (zampe(1,2,3));
console.log (zampe(5,2,8));

/* esercizio fiammiferi */

function fiammiferi (a,b,c) {
    let d = (a-b)
    let e = (d*5)
    let f = (e+c)
    return f;
}

console.log (fiammiferi(1,1,6));
console.log (fiammiferi(4,1,6));
console.log (fiammiferi(87,1,6));



function addUp (z) {
        let numero = 0;
        let somma = 0;
        {while (numero<=z) {
            somma = somma + numero
            numero++;

        }

    }

}
console.log (addUp(6));

/* esercizio lettere */

function letter(num) {
    if(num<=0 || num >=26){
        console.log("non valido")
    } else{
        return String.fromCharCode(num+96)
    }}

console.log(letter(5))
console.log(letter(1))


/* prezzo scontato */

let prezzo=0;
let sconto=0;

function trovasconto(prezzo, sconto){
    let percentuale=sconto*0.01;
    let prezzoscontato=prezzo-(prezzo*percentuale);
    console.log(prezzoscontato);
    console.log(percentuale);
    return prezzoscontato.toFixed(2);
}

console.log(trovasconto(39,7));

/* array */

const array=[6,2,22,2];

function sommaArray(array){
    let somma=0;
    for (element of array){
        somma=somma+element;
    }
    console.log(somma);
}
console.log(sommaArray(array));