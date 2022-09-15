console.log("ciao mondo!");

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
function zampe(polli, mucca, maiali)
{
    let zampepolli=polli*2;
    let zampemucca=mucca*4;
    let zampemaiali=maiali*4; 

    let risultato = zampepolli+zampemucca+zampemaiali;
    return risultato;
}
console.log (zampe (2,3,5));

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

//somma numeri
function addUp (a){
    let numero=0;
    let somma=0;
    while (numero <= a){
        somma= somma+numero;
        numero ++;
    }
    console.log(somma);
}
console.log("il risultato della funzione addUp è");
addUp(13);
addUp(4);
addUp(600);

//somma dei numeri di array
function somma_array(vector){
    console.log(vector);
    let somma=0;

}