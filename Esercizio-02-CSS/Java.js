/* Moltiplicazione di due numeri */
function Moltiplicazione(a, b){

    let c = a*b;
    return c;
}
console.log(Moltiplicazione(3,2));
console.log(Moltiplicazione(-3,-6));
console.log(Moltiplicazione(7,3));

/* Minore o uguale a zero */
function lessThanOrToZero(a){
    if(a>0){
        return false;
    } else {
        return true;
    }
}
console.log(lessThanOrToZero(5));
console.log(lessThanOrToZero(0));
console.log(lessThanOrToZero(-2));



/* Convertire anni in giorni*/
function calcAge(a){

    let Giorni = a*365;
    return Giorni;
}
console.log(calcAge(3));

/* Il problema della fattoria */
function animals(a,b,c){
    let polli = a;
    let mucche = b;
    let maiali = c;
    let TotZampe = polli*2 + mucche*4 + maiali*4;
    return TotZampe;
}
console.log(animals(2, 3, 5));
console.log(animals(1, 2, 3));
console.log(animals(5, 2, 8));

/* Case di Fiammiferi */
function matchHouses(n){
    if (n === 0) {
      return "0"
    } else if (n < 0 ) {
      return "Il numero non deve essere negativo."
    } else {
      let a;
      a = (5 * n) + 1;
      return a;
    }    
}  
console.log(matchHouses(1));
console.log(matchHouses(4));
console.log(matchHouses(87));

/* Somma i numeri da un unico numero */
function addUp(a){
        tot = 0;
        while (a>0){
            tot = tot + a;
            a--;
        }
    return tot;
}
console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));

/* Quante volte è vero? */
function CountTrue(a)