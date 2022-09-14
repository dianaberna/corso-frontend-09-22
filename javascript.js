
console.log("ciao mondo!");


console.log("var a");
var a = 1 ;
console.log(a);
console.log("tipo di  a: "+typeof(a));
a = "ciao";
console.log(a);
console.log("tipo di  a: "+typeof(a));

console.log("let b");
let b = 2 ;
console.log(b);

// scope
console.log("INIZIO");
let c = "io sono c";
console.log("fuori dal blocco"+c);
{
        let c = 3;
        console.log("dentro al blocco"+c);
}
console.log("fuori dal blocco"+c);
console.log(c)


// constante
console.log("const CONSTANTE");
const CONSTANTE = 3;
console.log(CONSTANTE);
// CONSTANTE = 5;


// operatori
let variabile1 = "ciao" + 3; // concatena stringa e numero in `ciao3`
console.log(variabile1);
let variabile2 = "1" + "5"; // concatena due stringhe in `ciao3`
console.log(variabile2);
let ciaoStrano = "ciao" + 3 + 5;
console.log(ciaoStrano);
ciaoStrano = 3 + 5 + "ciao" ;
console.log(ciaoStrano);

let incremento = 4;
console.log(incremento);
incremento++;  // incremento unitario
console.log(incremento);
console.log(incremento++);      // prima stampato poi incrementato
console.log(++incremento);    // prima incrementatto poi stampato
console.log(incremento);

console.log(5 == "5");
console.log(5 === "5");  // verifica l'uguaglianza anche dei tipi
let e = 5;
let f = "5";
if (e == f) {
        console.log("sono uguali 5");
        console.log(typeof(f));
        f++;    // funziona MA È DA EVITARE perchè si converte automaticamente la stringa in numero
        console.log(typeof(f));
} else {
        console.log("sono diversi 5");
};

e = 5;
f = "5";
(e === f) ? console.log("sono uguali 5") : console.log("sono diversi 5") ; // operatorio ternario
/*
if (e === f) {
        console.log("sono uguali 5");
} else {
        console.log("sono diversi 5");
};
*/


// operatori logici più rilevanti per il ciaoStrano (`&&` `||` `!`) povero JS, ha solo quelli


// switch statements
const EXPR = "Papayas";
switch (EXPR) {
        case "Oranges":
                console.log("Oranges are $0.59 a pound.");
                break;
        case "Mangoes":
        case "Papayas":
                console.log("Papayas and mangoes are sold out.");
                break;
        default:
                console.log(`Sorry, we are out of ${EXPR}`);

}


/* Esercizio 1 */
// crea un funzione di moltiplicazione tra due numeri come argomenti e rilasci il risultato
function moltiplicazione(a, b) {
        (typeof(a) == "number" && typeof(b) == "number") ? result = (a * b) : result = "invalid numbers as input";
        return result
}

console.log(moltiplicazione(2, 3));
console.log(moltiplicazione(3, -3));
console.log(moltiplicazione(-4, -3));
console.log(moltiplicazione(-4.5, -3.2));
console.log("caio" * 3);  // diverso da ```"caio".repeat(3)```
console.log(moltiplicazione("1", 2));


/* Esercizio 2 */
// Crea una funzione che accetta un numero come unico argomento e restituisce true se è minore o uguale a zero, altrimenti restituisce false.

function lessThanOrEqualToZero(num) {
        (typeof(num) === "number" && num <= 0) ? res = true : res = false ;
        return res
}

console.log(-2);
console.log(lessThanOrEqualToZero(-2));
console.log(0);
console.log(lessThanOrEqualToZero(0));
console.log(1);
console.log(lessThanOrEqualToZero(1));
console.log("-2");
console.log(lessThanOrEqualToZero("-2"));


/* Esercizio 3 */
// Creare una funzione che prenda l'età in anni e restituisca l'età in giorni.

function calcAge(years) {
        // switch (typeof(years)) {
        //                 case "number":
        //                 totDays = years * 365
        //                 return totDays
        //         return "calcAge works with integers, please retry"
        //                 return "Please, enter your age in numbers"
        //         default:
        //                 return "calcAge works with integers, please retry"
        // }
        // switch (Number.parseInt(years) === years) {
        switch (typeof(years)) {
                case "number":
                        totDays = years * 365 + " giorni"
                        return totDays
                default:
                        return "calcAge works with numbers, please retry"
        };
};

console.log("esercizio 3")
console.log(calcAge(20.5));
console.log(calcAge(65));
console.log(calcAge(0));
console.log(calcAge(20));

/* Esercizio 4 */
/*
In questa sfida, un contadino ti chiede di dirgli quante zampe si possono contare tra tutti i suoi animali. L'agricoltore alleva tre specie: polli = 2 zampe, mucche = 4 zampe, maiali = 4 zampe
L'agricoltore ha contato i suoi animali e ti dà un subtotale per ogni specie. Devi implementare una funzione che restituisca il numero totale di zampe di tutti gli animali.
*/

function animals(chickens, cows, pigs) {
        if (chickens < 0 || cows < 0 || pigs < 0) {
                return `Wait wwwhat?! How can you have negative animals?\nchickens ${chickens}, cows ${cows}, pigs ${pigs}.`
        } else {
                return chickens * 2 + (cows + pigs) * 4
        };
};

console.log("esercizio 4")
console.log(animals(2, 3, 5));
console.log(animals(1, 2, 3));
console.log(animals(5, 2, 8));
console.log(animals(-1, -2, 4));




/* Esercizio 5 */
/*
Crea una funzione che prenda un numero (passaggio) come argomento e restituisca il numero di fiammiferi in quel passaggio. Vedere i passaggi 1, 2 e 3 nell'immagine.
*/

function matchHouses(houses) {
        if (houses < 1) {
                return "Limit Case of no houses or negative houses"
        } else {
                return 1 + houses * 5
        };
};

console.log("esecizio 5");
console.log(matchHouses(1));
console.log(matchHouses(4));
console.log(matchHouses(87));
console.log(matchHouses(-1));



/* Esercizio 6 */
/*
Crea una funzione che accetta un numero come argomento. Somma tutti i numeri da 1 al numero passato alla funzione. Ad esempio, se l'input è 4, la tua funzione dovrebbe restituire 10 perché 1 + 2 + 3 + 4 = 10.
*/


function addUp(num) {
        if (num < 0 || parseInt(num) !== num) {
                return "Please, input a positive integer"
        } else {
                /* con formula matematica */
                // return (num + 1) * num / 2

                let total = 0;
                /* con for-loop */
                // for (i = 1; i <= num; i++) {
                //         total += i
                // };
                // return total

                /* con for-loop */
                while (num > 0) {
                        total += num
                        num--
                };
                return total
        };
};

console.log("esercizio 6");
console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));
console.log(addUp(-600));


/* Esercizio 7 */
/*
Crea una funzione che accetta due argomenti: il prezzo originale e la percentuale di sconto come numeri interi e restituisce il prezzo finale dopo lo sconto.
*/

function dis(price, sale) {
        if ((typeof(price) !== "number" || typeof(sale) !== "number" || price < 0 && sale < 0 ))  {
                return "price & sale must be positive numbers"
        }
        // operatori ternari possono essere ritornati da fuori, non con `return` al lor interno
        let res = (parseInt(sale) === sale) ?
                price * (1 - sale/100) :
                price * (1 - sale);

        // return res.toFixed(2)  // per arrotondare alle seconda linea decimale

        // TODO : no idea how to do this without built-in function
        res = toString(res)
        // String.split() )
        let resParts = res.split(".")
        res = resParts[0] + "."  + resParts[1].slice(2);
        return res
};

console.log("esercizio 7");
console.log(dis(1500, 50));
console.log(dis(89, 20));
console.log(dis(100, 75));
console.log(dis(-600, -50));
console.log(dis("60", 50));
console.log(dis(3.1415962, 0.1));