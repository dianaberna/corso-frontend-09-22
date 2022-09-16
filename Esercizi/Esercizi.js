/* Esercizio2 */
console.log("----------------ESERCIZIOOO 2 ---------------");
function unNumero(numero){
    numero <= 0 ? console.log(false):console.log(true);
}
/* var numeriDaProva = [1,2,3,4,5,6,7,0,-1]; */

unNumero(2);
unNumero(0);
unNumero(10);
/* TEST */
/* console.log("TEST FOR :");
for(var i in numeriDaProva) {unNumero(i);};
 */

/* esercizio 3 */
console.log("----------------ESERCIZIOOO 3 ---------------");
function yearsToDays (year){
    console.log(year*365);
}

yearsToDays(25)
yearsToDays(15)
yearsToDays(15)
/* esercizio 4 */
console.log("----------------ESERCIZIOOO 4 ---------------ES. Il problema della fattoria");
function calcolaZampe(polli,mucche,maiali){
    console.log(polli*2+mucche*4+maiali*4);

}

calcolaZampe(2, 3, 5);
calcolaZampe(1, 2, 3) ;
calcolaZampe(5, 2, 8);

/* esercizio 5 */
console.log("----------------ESERCIZIOOO 5 ---------------ES. Somma i numeri da un unico numero");
function sommaNumeri (numero){
    let sommatore =numero;
    for (var x= 0;x<numero;x++ ){
        sommatore+=x;
    }
    console.log(sommatore);
}

sommaNumeri(4);
sommaNumeri(13);
sommaNumeri(600);


/* Esercizio 5 */

console.log("----------------ESERCIZIOOO 5 ---------------ES. Case di fiammiferi");//Fiammiferi

function prendeNumero(passaggio){
    passaggio >= 1 ? console.log(passaggio*6-passaggio+1) : console.log("Non puoi mettere un numero minore di 1");
}

prendeNumero(1);
prendeNumero(4);
prendeNumero(87);


console.log("----------------ESERCIZIOOO 6 ---------------Quante volte è vero? ");

/* Esercizio 6 */


function countTrue(conta){
    var count =0;
    for (var i=0;i<conta.length;i++){
        conta[i] == true ? count++: null;
    }
    console.log(count);
}
countTrue([true, false, false, true, false]);
countTrue([false, false, false, false]);
countTrue([]);

console.log("----------------ESERCIZIOOO 7 ---------------CALCOLATRICE");


function calcolatrice (n1,op,n2){
    op == "*" ? console.log(n1*n2): op == "/" ? console.log(n1/n2):op == "+" ? console.log(n1+n2) :op == "-" ? console.log(n1-n2):console.log("e niente");
}
calcolatrice(2,"*",2);
calcolatrice(2,"+",2);
calcolatrice(2,"/",2);
calcolatrice(2,"-",2);


console.log("----------------ESERCIZIOOO 8 ---------------TROVA SCONTO");

function dis(prezzo,sconto){
    console.log(prezzo-(prezzo*sconto/100));
}
dis(1500,50);
dis(89,20);
dis(100,75);

console.log("----------------ESERCIZIOOO 9 ---------------ES. Posizione nell alfabeto ");

function letterAtPosition(num){
    const alfabeto ="ABCDEFGHILMNOPQRSTUVZ";

    /*  console.log("lunghezza : "+alfabeto.length) 21  */
    /* condizione ? 
    da fare
     : else  */
    num-1 >=0 && num <= alfabeto.length  ?
     console.log(alfabeto[num-1].toLowerCase())
     :console.log("invalid number") ;
}
letterAtPosition(22);
letterAtPosition(0);
letterAtPosition(1);
letterAtPosition(4);
letterAtPosition(7);

console.log("----------------ESERCIZIOOO  --------------- //Fare la somma di N numeri");

function sommaArray(a){
    let y = 0;
    for (var z in a){
        y += a[z];
    }
    console.log(y);
}

sommaArray([1, 2, 4]);
sommaArray([4, 2, 10, 2]) ;
sommaArray([1]) ;



console.log("----------------ESERCIZIOOO 10 --------------- // DA FINIRE ES.  Clona un array");
//DA FINIRE
function flatten(arr){
    var arr2 = [];
    for(var x of arr){
        for(var z in x){
            arr2.push(x[z]);
        }
    }
        
    
    console.log(arr2);

}

flatten([[1,2],[3,4]]);
flatten([["a","b"],["c","d"]]);
flatten([true,false],[false,false]);


console.log("----------------ESERCIZIOOO 11 --------------- Piegare un pezzo di carta");

function toMeter(num){
   var risultato=0.5;
    for(var i = 0; i<num;i++){
        risultato = risultato*2;
    }
    console.log(risultato);
}
toMeter(1);
toMeter(4);
toMeter(21);

console.log("----------------ESERCIZIOOO 12 --------------- Validare un e-mail");

function validaEmail (mail){
    mail.includes("@",1) && mail.includes(".",3) ?
     console.log("l'email è corretto : ",mail):
     console.log("non va bene correggi l'email: ",mail);
}

validaEmail("a@gssa.agas");
validaEmail(".a@gssaagas");
validaEmail("a@g.ssaagas");

console.log("----------------ESERCIZIOOO 12 --------------- VSasso, carta, forbici");

function sassoCartaForbici(p1,p2){
    var m = ['sasso','carta','forbice'];
    p1==p2 ? console.log("Pareggio P1 : ",p1,"P2 :",p2): p1==m[0]&& p2==m[1] ? console.log("Ha vinto : P2",p1,p2): p1==m[1] && p2==m[0] ? console.log("Ha vinto : P1"):
    p1 == m[0] && p2 ==m[2] ? console.log("Ha vinto: P1",p1,p2): p2 == m[2] && p1 == m[2] ? console.log("Ha vinto: P2",p1,p2):p1==m[2]&&p2==m[0]?console.log("Ha vinto: P2",p1,p2) 
    :console.log("Manca qualcosa");
}
sassoCartaForbici("sasso","forbice");
sassoCartaForbici("forbice","sasso");
sassoCartaForbici("carta","sasso");
sassoCartaForbici("sasso","sasso")
sassoCartaForbici("a","a")


console.log("----------------ESERCIZIOOO 12 --------------- Quanti giorni tra due date");


function getDays(g1,g2){
    ((g1-g2)/86400/1000) >=0?console.log((g1-g2)/86400/1000):console.log((g2-g1)/86400/1000);
}

getDays(new Date("June 14, 2019"), new Date("December 10, 2019"));
getDays(new Date("June 14, 2019"),new Date("June 10, 2019"));
getDays(new Date("June 14, 2019"),new Date("June 10, 2018"));
getDays(new Date("June 14, 2016"),new Date("June 10, 2018"));
getDays(new Date("January 10, 2016"),new Date("June 10, 2018"));


console.log("----------------ESERCIZIOOO 13 --------------- Rimuovere i duplicati da un array");

function removeDup(arr) {
    let firststato = [];
    for(var i=0;i<arr.length;i++){
       !firststato.includes(arr[i]) ? firststato.push(arr[i]):null;
    }
    console.log(firststato);
}

removeDup([1, 0, 1, 0]);
removeDup(["The", "big", "cat"]);
removeDup(["John", "Taylor", "John"]);

console.log("----------------ESERCIZIOOO 14 --------------- Calcola il prezzo totale dei generi alimentari");

function getTotalPrice(prodotto,quantita,prezzo){
    console.log()
}
var milk = {
    "product": "Milk",
    "quantity": 1,
    "price": 1.50
  };
  for (let prov in milk)console.log(prov, milk[prov]);
  
  console.log(milk.product);

/* alternative */
/* console.log("ciao mondo");
console.log("alternativo 1");

function moltiplicatore (num1,num2){
    return num1*num2;
}

let risultato = moltiplicatore(3,2);

console.log(risultato);

console.log(moltiplicatore(3,2));
console.log(moltiplicatore(-3,-6));
console.log(moltiplicatore(7,3));


/* alternative */
/* console.log("alternativo 2");

console.log(3*2);
console.log(-3*-6);
console.log(7*3);
 */
/* alternative */
/* console.log("alternativo 3");

function moltiplicatore2 (num1,num2){
    console.log(num1*num2);
}


let a = moltiplicatore2(1,2);
moltiplicatore2(3,2);
moltiplicatore2(-3,-6);
moltiplicatore2(7,3); 

 */
