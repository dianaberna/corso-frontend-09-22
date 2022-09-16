

console.log("variabile a")
var a = 1;
console.log(a);
let b = 2;
console.log(b);

const c = 3;
console.log(c);




function moltiplicazione(a,b){
   let risultato=a*b;
   return risultato;
}

console.log(moltiplicazione(5,2));
console.log(moltiplicazione(10,10));



/* funzione diseguaglianza */


function diseguaglianza(a){
     if (a <= 0) {
        console.log("true");
    
    } else {
        
    console.log("false")
    
    }
    
    
}

diseguaglianza(10)
diseguaglianza(-5)




function diseguaglianza(b){
    if (b <= 0) {
       return true;
   
   } else {
       
   return false;
   
   }
   
   
}

console.log(diseguaglianza(10));
console.log(diseguaglianza(-5));







function giorni(età){
    let risultato= età*365;
    return risultato;

}
let età=1;
console.log(giorni(età,365));


function numero(polli,mucche,maiali){

    let risultato1 =2 * polli;
    let risultato2 =4 * mucche;
    let risultato3 =4 * maiali;
    let risultato4 =risultato1 + risultato2 +risultato3;
    return risultato1, risultato2, risultato3,risultato4;



}

let polli=1;
let mucche=10;
let maiali=10
console.log(numero(1,10,10));




function fiammiferi(step){
  
if(step<0){
    return "errore";
}
let somma=0;
if(step==0){
    return 0;
}
else {
    somma=6+((step-1)*5);
}
return somma;
}
    
console.log(fiammiferi(0))
 console.log(fiammiferi(1))
 console.log(fiammiferi(87))



function contaNumeri(o){
let numero=0;
let somma=0;
while(numero <o) {
    numero ++;
    somma= somma+numero;
}
return somma;
}
 console.log(contaNumeri(4));
 console.log(contaNumeri(13));





function alfabeto(posizione){

   if
    (posizione >= 1 && posizione <= 26 && posizione % 1== 0)  /* % 1==0(solo numeri interi) */ {

        return String.fromCharCode(posizione + 96);


    }else {
        return "scorretto";
    }

  }
    
console.log(alfabeto(1));



function prezzo(x){

let prezzoScontato = (x /100) * 30;
let prezzo = x;

let risultatoFinale =  prezzoScontato + prezzo;
/* return prezzoScontato,prezzo,risultatoFinale; */
if  (x % 1 == 0) {

  return  prezzoScontato,prezzo,risultatoFinale;
} else {

    return "non valido";
}



}

console.log(prezzo(100));
console.log(prezzo(100.1));
