console.log("ciao mondo!")

// variabili
console.log("variabile a")
var a = 1;
console.log(a);
a=5;
console.log(a);

console.log("variabile b")
let b = 2;
console.log(b);
b=5;
console.log(b);

// costante
console.log("costante")
const costante = 3;
console.log(costante);

// moltiplicazione
function moltiplicazione (a,b){
    let c = a*b;
    return c;
}
console.log(moltiplicazione(5,2));


//minore uguale
function LessThanOrEqualToZero(a){
    if (a <= 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log (LessThanOrEqualToZero(-5));

//giorni
function calcAge (età){
    return età*365 + " Giorni";
}
console.log (calcAge(65));

//fattoria
function zampe (polli, mucche, maiali){
    let totale=polli*2+mucche*4+maiali*4
    console.log (totale)
}
zampe (2,4,4);

const polli = 20;
const mucche = 14;
const maiali = 6;

const somma = (animals) => {
    console.log("animale", animals);

    if (animals === polli){
        return console.log("totale zampe polli", animals * 2);
    }
    else if (animals === mucche || maiali){
        return console.log ("totale zampe mucche o maiali", animals *4);
    }
}

// fiammiferi
function Case(step){
    let a = step*6;
    step--;

    let risultato= a - step;
    return risultato;
}
let input;
input= 4;
console.log("risultato" + Case(input));