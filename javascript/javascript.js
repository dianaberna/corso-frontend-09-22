function moltiplicazione(a, b) {
  let somma = a * b;
  return somma;
}
console.log(moltiplicazione(14, 4));

let a = -1;

if (a <= 0) {
  console.log("true");
} else {
  console.log("false");
}

function giorni(b) {
  const x = 365;
  let totale = b * x;
  console.log(totale);
}

giorni(10);

function zampe(polli, mucche, maiali) {
  let totale = polli * 2 + mucche * 4 + maiali * 4;
  console.log(totale);
}

zampe(4, 4, 7);

let z = 87;
if (z == 1) {
  console.log(7);
} else {
  console.log(1 + 5 * z);
}

let numero = 14;
let somma = 0;
while (numero >= 0) {
  somma = somma + numero;
  numero = numero - 1;
  //console.log("somma="+somma+"numero="+numero)
}
console.log(somma);

console.log("Esercizio nell'alfabeto");

function letterPosition(num) {
  if (num <= 0 || num >= 26) {
    console.log("numero non valido");
  } else {
    return String.fromCharCode(num + 96); //codice ASCII
  }
}

console.log(letterPosition(3));

//const alfabeto=["a","b","c","d","e","f","g","h","i","l","m","n","o","p","q","r","s","t","u","v","z"]

function totaleScontato(prezzo, sconto) {
  let x = (prezzo / 100) * sconto;
  let totale = prezzo - x;
  let tot = totale.toFixed(2);

  return tot;
}
console.log(totaleScontato(522, 28));

console.log("Esercizio calcolatrice");

function calcolatrice(a, s, b) {
  let tot;
  if (s == "/" && (a == "0" || b == "0")) {
    console.log("Impossibile dividere per 0");
  } else {
    if (s == "+") {
      tot = a + b;
      return tot;
    }

    if (s == "-") {
      tot = a - b;
      return tot;
    }

    if (s == "*") {
      tot = a * b;
      return tot;
    }

    if (s == "/") {
      tot = a / b;
      return tot;
    }
  }
}
console.log(calcolatrice(6, "/", 3));

console.log("Es somma array");

const array = [2, 3, 5, 8];
let i = 0;
let somma2 = 0;
while (i < array.length) {
  somma2 = somma2 + array[i];
  i++;
}
console.log(somma2);

console.log("Es true o false");


let indice = 0;
let somma3 = 0;
let finaltrue = 0;
let finalfalse = 0;
const base = ["true", "false", "false", "true", "true", "true"];

while (indice < base.length) {
  somma3 = somma3 + indice;
  if (( base[indice]=="true")) {
    finaltrue++;
  } else {
    finalfalse++;
  }
  indice++;
}
console.log("false="+finalfalse);
console.log("true="+finaltrue);

console.log("Es piegare pezzo di carta");

let spessore= 0.001
let input=21
let spessoreTotale
if(input >0){
 spessoreTotale= spessore*2**(input)/2
}
console.log(spessoreTotale+("metri"))

console.log("Es validare e-mail");

const email("nome","chiocciola",")






