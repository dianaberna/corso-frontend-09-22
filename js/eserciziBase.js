/* esercizi base js */



/* console.log("Esercizio 1: moltiplicazione");
function moltiplicazione(a, b){
	return a * b;
}
console.log(moltiplicazione(3,2));
console.log(moltiplicazione(-3,-6));
console.log(moltiplicazione(7,3)); */
/* console.log(prodotto); */

/* function moltiplicazione(a, b){
	let prodotto2 = a * b;
	return prodotto2;
}
console.log("\n" +moltiplicazione(3,2));
console.log(moltiplicazione(-3,-6));
console.log(moltiplicazione(7,3)); */
/* console.log(prodotto2); */



/* console.log("Esercizio 2: minore o uguale di zero");
function lessThanOrEqualToZero(a){
	return a <= 0 ? true : false;
}
console.log(lessThanOrEqualToZero(5));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2)); */



/* console.log("Esercizio 3: Convertire anni in giorni");
function calcAge(a){

	return a * 365;
}
console.log(calcAge(65));
console.log(calcAge(0));
console.log(calcAge(20)); */



/* console.log("Esercizio 4: il problema della fattoria");
function animals(a, b, c){
	return (a * .5 + b + c) * 4;
}
console.log(animals(2, 3, 5));
console.log(animals(1, 2, 3));
console.log(animals(5, 2, 8));
 */



/* console.log("Esercizio 5: Case di fiammiferi");
function matchHouses(a) {
	if (a == 0) {
		return 0;
	}
	return a * 6 - (a - 1);

}
console.log(matchHouses(0));
console.log(matchHouses(1));
console.log(matchHouses(4));
console.log(matchHouses(87));  */



console.log("Esercizio 6.1: somma i numeri da un unico numero -for-");
function addUp(a){
	let somma = 0;
	for (let i = 0; i <= a; i++) {
		somma += i;
	}	
	return b;
}
console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));

console.log("Esercizio 6.2: somma i numeri da un unico numero -while-");
function addUp(a){
	let somma = 0, numero = 0;
	while (numero <= a){
		somma = somma + numero;
		numero++;
	}
	return somma;
}
console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));