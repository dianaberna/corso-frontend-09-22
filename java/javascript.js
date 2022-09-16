console.log("ciao mondo!");
/* let input = prompt("Inserisci un numero");
console.log(input); */

console.log("variabile a");
var a = 1;
console.log(a);
console.log("il tipo di a è : " + typeof a);
a = "ciao";
console.log(a);
console.log("il tipo di a è : " + typeof a);
console.log("variabile b");
let b = 2;
console.log(b);
b = 5;
console.log(b);

let d = 4.6;
console.log("il tipo di d è : " + typeof d);

a = 10;
a = a + "ciao";
console.log(a);
console.log(typeof a);

// scope

console.log("INIZIO");
let c = "io sono c"; // scope globale
console.log("prima del blocco: " + c);
{
    let c = 4;
    console.log("sono nel blocco: " + c);
}
console.log("dopo il blocco: " + c);

console.log(c);
console.log("FINE");

// costante

console.log("costante");
const costante = 3;
console.log(costante);
/* costante = 4;  */
{
    const nuovaCostante = 5;
    console.log(nuovaCostante);
}
/* console.log(nuovaCostante) */

// operatori

let variabile = "ciao" + 3; // ciao3
console.log(variabile);
let variabile2 = "1" + "5";
console.log(variabile2);
console.log("il tipo di variabile2 è : " + typeof variabile2);

let conversioneVariabile2 = parseInt(variabile2);
console.log(conversioneVariabile2);
console.log("il tipo di variabile2 è : " + typeof conversioneVariabile2);

let ciao = "ciao" + 3 + 5;
console.log(ciao);

let incremento = 4;
{
    incremento++; // incremento = incremento + 1
    console.log(incremento);
    console.log(incremento++);
    console.log(incremento);
    console.log(++incremento);
    console.log(incremento);
}
console.log(incremento);

let e = 10;
let f = 5;
console.log(e / f);
console.log(e % f);

console.log(10 % 2);
console.log(11 % 2);

console.log("---- ");
e = 3;
f = 3;
if (e == f) {
    console.log("sono uguali 1");
} else {
    console.log("sono diversi 1");
}

e = 4;
f = "4";
if (e == f) {
    console.log("sono uguali 2");
    console.log(e + f);
    f++;
    console.log(f);
} else {
    console.log("sono diversi 2");
}

e = 4;
f = "4";
if (e === f) {
    console.log("sono uguali 3");
} else {
    console.log("sono diversi 3");
}
e === f ? console.log("sono uguali 3") : console.log("sono diversi 3");

const sconto = 50;
let settembre = 9;
let ottobre = 10;
// dall'esterno ricevo il giorno
//  input: meseInput = 9 giornoInput = 14
let meseInput = 10;
let giornoInput = 10;
if (
    (meseInput == settembre || meseInput == ottobre) &&
    giornoInput >= 5 &&
    giornoInput <= 11
) {
    console.log("applico uno sconto del " + sconto + " %");
} else {
    console.log("non hai sconti");
}

// funzioni
function ciaoMondo() {
    console.log("ciao");
}

ciaoMondo();

function somma(a, b) {
    let risultato = a + b;
    console.log(risultato);
    return risultato;
}

/* console.log(risultato) */
console.log("---");
console.log("---");
console.log("---");
console.log(somma(1, 6));
somma(2, 3);

// if

/* 
if (condizione) {
    // se la condizione risulta vera / verificata
} else {
    // se la condizione risulta falsa / non verificata
}
*/

let g = 10;

if (g == 10) {
    console.log("è dieci");
}

if (g == 10) {
    console.log("è dieci");
} else {
    console.log("non è dieci");
}

// operatore ternario
g == 10 ? console.log("è dieci") : console.log("non è dieci");

if (g == 10) {
    console.log("è dieci");
} else {
    console.log("non è dieci");
    if (g == 20) {
        console.log("è venti");
    }
}

if (g == 10) {
    console.log("è dieci");
} else if (g == 20) {
    console.log("è venti");
}

// switch

let expr = "Papayas"; // questo è l'input dell'utente
switch (expr) {
    case "Oranges":
        console.log("Oranges are $0.59 a pound.");
        break;
    case "Mangoes":
    case "Papayas":
        console.log("Mangoes and papayas are $2.79 a pound.");
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
    case "Apple": 
        console.log("bla bla bla")
    default:
        console.log('non è un frutto');
}

// loop