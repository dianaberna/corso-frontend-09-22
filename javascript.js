
console.log("ciao mondo!");


console.log("var a");
var a = 1;
console.log(a);
console.log("tipo di  a: " + typeof (a));
a = "ciao";
console.log(a);
console.log("tipo di  a: " + typeof (a));

console.log("let b");
let b = 2;
console.log(b);

// scope
console.log("INIZIO");
let c = "io sono c";
console.log("fuori dal blocco" + c);
{
    let c = 3;
    console.log("dentro al blocco" + c);
}
console.log("fuori dal blocco" + c);
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
ciaoStrano = 3 + 5 + "ciao";
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
    console.log(typeof (f));
    f++;    // funziona MA È DA EVITARE perchè si converte automaticamente la stringa in numero
    console.log(typeof (f));
} else {
    console.log("sono diversi 5");
};

e = 5;
f = "5";
(e === f) ? console.log("sono uguali 5") : console.log("sono diversi 5"); // operatorio ternario
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
    (typeof (a) == "number" && typeof (b) == "number") ? result = (a * b) : result = "invalid numbers as input";
    return result
}

console.log("\nesercizio 1")
console.log(moltiplicazione(2, 3));
console.log(moltiplicazione(3, -3));
console.log(moltiplicazione(-4, -3));
console.log(moltiplicazione(-4.5, -3.2));
console.log("caio" * 3);  // diverso da ```"caio".repeat(3)```
console.log(moltiplicazione("1", 2));


/* Esercizio 2 */
// Crea una funzione che accetta un numero come unico argomento e restituisce true se è minore o uguale a zero, altrimenti restituisce false.

function lessThanOrEqualToZero(num) {
    (typeof (num) === "number" && num <= 0) ? res = true : res = false;
    return res
}

console.log("\nesercizio 2")
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
    switch (typeof (years)) {
        case "number":
            totDays = years * 365 + " giorni"
            return totDays
        default:
            return "calcAge works with numbers, please retry"
    };
};

console.log("\nesercizio 3")
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

console.log("\nesercizio 4")
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
        return 1 + houses * 5  // 5x + 1
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

console.log("\nesercizio 6");
console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));
console.log(addUp(-600));


/* Esercizio 7 */
/*
Dato un numero compreso tra 1 e 26 (vedere codice ASCII), restituisci quale lettera si trova in quella posizione dell'alfabeto. Restituisce "non valido" se il numero fornito non rientra in tale intervallo o non è un numero intero.
*/

function letterAtPosition(num) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // alphabet = "abcdefghijklmnopqrstuvwxyz";

    if ((num < 1) || (num > 26) || !(parseInt(num) === num)) {
        return `Non Valido: ${num} is type ${typeof (num)}}`
    } else {
        num--;
        // // DEBUG :
        // console.log(alphabet);
        return alphabet[num];
    };

    // TODO : riprodurre l'esempio di Eren Tulumcu, cioè con solo un operatore ternario e una stringa
    // TODO : riprodurre l'esempio di Flavio Mercuri, cioè con solo un charCodeAt
    // TODO : riprodurre l'esempio di Sabrina Petrarulo, cioè con solo un fromCharCode

};

console.log("\nesercizio 7");
console.log(letterAtPosition("1"));
console.log(letterAtPosition("asd"));
console.log(letterAtPosition(1));
console.log(letterAtPosition(26.0));
console.log(letterAtPosition(0));
console.log(letterAtPosition(4.5));


/* Esercizio 8 */
/*
Crea una funzione che accetta due argomenti: il prezzo originale e la percentuale di sconto come numeri interi e restituisce il prezzo finale dopo lo sconto.
*/

function dis(price, sale) {
    if ((typeof (price) !== "number" || typeof (sale) !== "number" || price < 0 && sale < 0)) {
        return "price & sale must be positive numbers"
    }
    // operatori ternari possono essere ritornati da fuori, non con `return` al lor interno
    let res = (parseInt(sale) === sale) ?
        price * (1 - sale / 100) :
        price * (1 - sale);

    return res.toFixed(2)  // per arrotondare alle seconda linea decimale

    // ~~TODO~~ : no idea how to do this without built-in function
    // // NOTE : forse non è necessario perdersi in cavilli
    // res = toString(res)
    // // String.split() )
    // let resParts = res.split(".")
    // res = resParts[0] + "."  + resParts[1].slice(2);
    // return res
};

console.log("\nesercizio 8");
console.log(dis(1500, 50));
console.log(dis(89, 20));
console.log(dis(100, 75));
console.log(dis(-600, -50));
console.log(dis("60", 50));
console.log(dis(3.1415962, 0.1));



/* Esercizio 9 */
/*
Crea una funzione che accetta due numeri e un operatore matematico + - / * ed eseguirà un calcolo con i numeri indicati.
*/

function calculator(a, oper, b) {
    switch (oper) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                return "Impossibile dividere per 0!"
            } else {
                return a / b;
            };
    };
};

console.log("\nesercizio 9");
console.log(calculator(2, "/", 0));
console.log(calculator(2, "+", 2));
console.log(calculator(2, "*", 2));
console.log(calculator(2, "-", 2));
console.log(calculator(4, "/", 2));



/* Esercizio 10 */
/*
Crea una funzione che restituisce la somma di tutti i valori di un array.
*/

function sumArray(arr) {
    // let tot = Number();
    let tot = 0;
    for (let x of arr) { // for-in can be used in general with all objects
        tot += x
    };
    return tot
};

console.log("\nesercizio 10");
console.log(sumArray([1, 2, 4]));
console.log(sumArray([4, 2, 10, 2]));
console.log(sumArray([1]));


/* Esercizio 11 */
/*
Crea una funzione che restituisce il numero di valori uguali a true presenti in un array.
*/

function countTrue(arr) {
    let count = 0;
    if (arr.includes(true)) {
        // my  first use of `forEach` and even inside an arrow function :sweat:
        arr.forEach((element) => {
            if (element === true) { count += 1 }
        }
        )
        return count;
    } else {
        return 0
    };
};

console.log("\nesercizio 11");
console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));


/* Esercizio 12 */
/*
Creare una funzione che restituisca lo spessore (in metri) di un foglio di carta dopo averlo piegato n numero di volte. La carta inizia con uno spessore di 0,5 mm.
*/

function numLayers(folds) {
    // const THICKNESS = 0.5; // mm;
    const THICKNESS = 0.0005; // meters;
    return `${THICKNESS * (2 ** folds)} m`
};

console.log("\nesercizio 12");
console.log(numLayers(1));
console.log(numLayers(4));
console.log(numLayers(21));


/* Esercizio 13 */
/*
Crea una funzione che accetta una stringa, controlla se è un indirizzo email valido e restituisce true o false, a seconda della valutazione.
La stringa deve contenere un carattere @.
La stringa deve contenere un . carattere.
La @ deve avere almeno un carattere davanti. (ad esempio "d@ciao.com" è valido mentre "@ciao.com" non è valido.
Il . e la @ deve trovarsi nei posti appropriati. (ad esempio "hello.email@com" non è valido mentre "mario.rossi@email.com" è valido.
Se la stringa supera questi test,
viene considerata un indirizzo email valido.
*/

function validateEmail(email) {
    const AT = "@";
    const DOT = ".";

    console.log(email);
    // NOTE : I wonder if there is a way to replicate `print(statement, end="")`

    indexOfAt = email.indexOf(AT);
    // indexOfDot = email.indexOf(DOT);
    // if (indexOfAt == 0) {
    //     return false
    // } else if (indexOfAt < indexOfDot) {
    //     return true
    // } else {
    //     return false
    // };

    if (indexOfAt == 0 || indexOfAt == -1) {
        return false
    } else {
        let splittedEmail = email.split(AT)
        // // DEBUG :
        // console.log(splittedEmail)
        // console.log(typeof(splittedEmail[1]))
        if (splittedEmail[1].includes(DOT)) {
            if (splittedEmail[1].includes(AT)) {
                return false
            }
            return true
        };
    return false
    };
};

console.log("\nesercizio 13");
console.log(validateEmail("@gmail.com"));
console.log(validateEmail("hello.gmail@com"));
console.log(validateEmail("gmail"));
console.log(validateEmail("hello@gmail"));
console.log(validateEmail("hello@edabit.com"));
console.log(validateEmail("mario.rossi@email.com"));

console.log(validateEmail("rossi@email@email.com"));


/* Esercizio 14 */
/*
Crea una funzione che accetta due stringhe (p1 e p2 ⁠— che rappresentano i giocatori 1 e 2) come argomenti e restituisce una stringa che indica il vincitore in una partita a Sasso, Carta, Forbici.
Ogni argomento conterrà una singola stringa: "Sasso", "Carta" o "Forbici". Restituisci il vincitore secondo le seguenti regole:
Il sasso batte le forbici / Le forbici battono la carta / La carta batte il sasso
Se p1 vince, restituisci la stringa "Il vincitore è p1". Se p2 vince, restituisci la stringa "Il vincitore è p2" e se p1 e p2 sono gli stessi, restituisci "È un pareggio".
*/

const CASES = [
    ["Rock", "Paper"],            // lose
    ["Scissors", "Paper"],        // win
    ["Paper", "Paper"],           // draw
    ["Rock", "Rock"],             // draw
    ["Scissors", "Rock"],         // lose
    ["Paper", "Rock"],            // win
    ["Rock", "Scissors"],         // win
    ["Scissors", "Scissors"],     // draw
    ["Paper", "Scissors"],        // lose
];

function rps(p1, p2) {
    if (typeof(p1) !== "string" || typeof(p2) !== "string") {
        return `insert only strings like "Rock" "Scissors" and "Paper" `
    }
    // p1 = String.prototype.toLowerCase(p1);
    // p2 = String.prototype.toLowerCase(p2);

    let match = `${p1} vs ${p2}`.toLowerCase()

    let winOrLose = [
        ["rock vs paper", "scissors vs rock", "paper vs scissors" ],    // pl2
        ["scissors vs paper",  "paper vs rock",  "rock vs scissors",],  // pl1
        ["paper vs paper", "rock vs rock", "scissors vs scissors" ],    // draw
    ]

    // TODO :
    // chiedere a Diana perchè questo non funziona
    // rock vs paper" in ["rock vs paper", "scissor vs rock", "paper vs scissors" ]

    if (winOrLose[0].includes(match) ) {
        return `${match} : the winner is p2`
    } else if (winOrLose[1].includes(match)) {
        return `${match} : the winner is p1`
    } else if (winOrLose[2].includes(match)) {
        return `${match} : It's a draw`
    } else {
        return `${match} : ----- "Wait. What?!"` // useful to spot one typo "scissor" instead of "scissors"
    };
};

console.log("\nesercizio 14");
// console.log(rps("Rock", "Paper"));
// console.log(rps("Scissors", "Paper"));
// console.log(rps("Paper", "Paper"));

for (let item of CASES) {
    console.log(rps(...item)); // unpacking with Spread Operator
};


/* Esercizio 14 */
/*
Crea una funzione che accetta due date e restituisce il numero di giorni tra la prima e la seconda data.
*/

const DATES = [
    [new Date("June 14, 2019"), new Date("June 20, 2019")],
    [new Date("December 29, 2019"), new Date("January 1, 2019")],
    [new Date("June 14, 2019"), new Date("June 20, 2019")],
]

function getDays(startDate, endDate) {
    return startDate.toString();
};

console.log("\nesercizio 14");

for (let item of DATES) {
    console.log(getDays(item));
}

