console.log("ciao mondo!");
/* let input = prompt("Inserisci un numero");
console.log(input); */


// variabili 
console.log("-------- variabili --------")
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
console.log("-------- scope --------")
console.log("INIZIO");
let c = "io sono c"; // global scope
console.log("prima del blocco: " + c);
{
    let c = 4; // block scope
    console.log("sono nel blocco: " + c);
}
console.log("dopo il blocco: " + c);

console.log(c);
console.log("FINE");

// costante
console.log("-------- costante --------")
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
console.log("-------- operatori --------")
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
    console.log(++incremento); // incremento + 1 = incremento 
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
if (e == f) { // con == verifico il contenuto
    console.log("sono uguali 2");
    console.log(e + f);
    f++;
    console.log(f);
} else {
    console.log("sono diversi 2");
}

e = 4;
f = "4";
if (e === f) { // con === verifico il contenuto e il tipo di dato
    console.log("sono uguali 3");
} else {
    console.log("sono diversi 3");
}
e === f ? console.log("sono uguali 3") : console.log("sono diversi 3");


const sconto = 50;
let settembre = 9;
let ottobre = 10;
// dall'esterno ricevo il giorno
// input: meseInput = 9 giornoInput = 14
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
console.log("-------- funzioni --------")
/* 
    function nome(parametro1, parametro2){
        corpo della funzione
        return valore
    }

    nome(parametro1, parametro2) --> quando richiamo la funzione otterrò proprio il valore che ho nel return

*/
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

// condizionali 
console.log("-------- condizionali --------")
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
// (condizione) ? true : false
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

// loop / cicli 
console.log("-------- loop --------")
let valore = 0;
while ( valore <= 4){
    console.log("ciao")
    valore++;
}

for( valore=0; valore<= 4; valore++){
    console.log("ciao")
}

valore = 0;
do{
    console.log("ciao");
    valore++
}while(valore<=4)

// array 
console.log("-------- array --------")
let array = [ 1, 2, 5 ];
/*
 in posizione 0 ho 1
 in posizione 1 ho 2
 in posizione 2 ho 5 

 attenzione! si inizia a contare sempre da zero
*/
console.log("tipo dell'array: "+typeof array)
console.log(array)
console.log("lunghezza ="+array.length);
console.log("primo elemento="+array[0]+" secondo elemento="+array[1]+" terzo elemento="+array[2]);

console.log("--- stampo array con while ---")
let indice = 0;
while(indice < array.length){
    console.log("elemento = "+array[indice])
    indice++;
}
console.log("--- stampo array con for ---")
for(let nuovoIndice = 0; nuovoIndice < array.length; nuovoIndice++){
    console.log("elemento = "+array[nuovoIndice])
}

// somma di tutti gli elementi di array 
//somma = array[0]+array[1]+array[2]+

function sommaArray(array){
    let somma2 = 0;
    for(let indice = 0; indice < array.length; indice++){
        somma2 = somma2 + array[indice];
    }
    return somma2;
}

console.log(sommaArray(array));

// con la push inserisco un valore e con la pop estraggo l'ultimo inserito 

// push -> 2
// push -> 2, 6
// push -> 2, 6, 19 
// pop -> 2, 6 (toglie l'ultimo)

let arrayNuovo = [];
console.log(arrayNuovo);
arrayNuovo.push(2);
console.log(arrayNuovo);
arrayNuovo.push(6);
console.log(arrayNuovo);
arrayNuovo.push(19);
console.log(arrayNuovo);

arrayNuovo.pop();
console.log(arrayNuovo);

// array con dati di diverso tipo 
let arrayStrano = ["ciao", 3, false, [2, 3]]

let indiceStrano = 0;
while(indiceStrano < arrayStrano.length){
    console.log("elemento = "+arrayStrano[indiceStrano])
    indiceStrano++;
}

console.log(sommaArray(arrayStrano));

// creo dinamicamente un array
let nuovoArray = new Array();
console.log(typeof nuovoArray);

let arrayNuovo2 = [1, 2, 3, 4];

// indexOf -> ritorna l'indice di un elemento
let posizione = arrayNuovo2.indexOf(3)
console.log(posizione)

// funzioni sulle stringhe
console.log("-------- funcioni sulle stringhe --------")
let persone = ["Mario", "Gigi", "Pietro", "Luigi", "Giuseppe", "Gigi"];
// splice() ->
persone.splice(2, 1)
console.log("stampo persone " + persone)
// includes() -> verifica se l'elemento tra parentesi è contenuto nell'array
console.log(persone.includes("Luisa")); // falso
console.log(persone.includes("Gigi"));  // vero
// find() -> ricerca un valore e si ferma la prima volta che lo trova (anche se ce ne sono altre)
let arrayNumeri = [1, 4, -9, 20, 3, -2, 0]
let trovato = arrayNumeri.find(element => element >= 3);
console.log("trovato = "+trovato)
// filter() crea un nuovo array con tutti gli elementi che superano il test implementato dalla funzione fornita.
const parole = [
    "salice",
    "abete",
    "ippocastano",
    "pino",
    "olmo",
  ];
const risultato = parole.filter((parola) => parola.length > 4);
console.log("risultato della find= "+risultato);

// template literal
let numero = 5;
console.log("numero = "+numero);
console.log("-------- template literal --------")
console.log(`numero = ${numero}`);

// spread operator
/* Spalma il contenuto di un array (o di un json) dentro qualcos altro
Quello che si dovrebbe fare è controllare a mano per ogni elemento
se esiste già nel nuovo array sostituirlo o aggiungerlo come nuovo
Con lo spread operator lo fai con una parola*/
console.log("-------- spread operator --------")
console.log(arrayNuovo2)
console.log(...arrayNuovo2)

let x = [2, 4, 8];
let y = [4, 5, 6];

let z = [...x, ...y];
let z1 = [x, y];
console.log("x = " + x);
console.log("y = " + y);
console.log("z = " + z);
console.log("z1 = " + z1);

console.log("---");
console.log(x);
console.log(...x);
console.log("---");

// map -> crea un nuovo array con gli elementi risultanti dalla chiamata di map
console.log("--- map ---");
const array1 = [1, 4, 9, 16];
const map1 = array1.map((x) => x * 2);
console.log(map1);


// oggetti 
console.log("-------- oggetti --------")
let utente = {nome: "Mario", cognome: "Rossi"};
console.log(utente.cognome)
console.log(utente["cognome"])

const persona = {
    nome: {
      primo: "Bob",
      ultimo: "Smith",
    },
  };
console.log(persona.nome.primo);
console.log(persona["nome"]["primo"]);

console.log("-------- json --------")
let provaJson = {
    id: "0001",
    type: "donut",
    name: "Cake",
    ppu: 0.55,
    batters: {
      batter: [
        { id: "1001", type: "Regular" },
        { id: "1002", type: "Chocolate" },
        { id: "1003", type: "Blueberry" },
        { id: "1004", type: "Devil's Food" },
      ],
    },
    topping: [
      { id: "5001", type: "None" },
      { id: "5002", type: "Glazed" },
      { id: "5005", type: "Sugar" },
      { id: "5007", type: "Powdered Sugar" },
      { id: "5006", type: "Chocolate with Sprinkles" },
      { id: "5003", type: "Chocolate" },
      { id: "5004", type: "Maple" },
    ],
};


console.log(provaJson["name"])
for (e of provaJson.topping) {
    console.log(e);
}

