/* console.log("Esercizio 1: posizione nell'alfabeto");
function letterAtPosition(a){
	if (a > 26 || a <= 0 || a % 1 != 0) {
		return "invalid";
	}
	return String.fromCharCode(a + 96);	
}
console.log(letterAtPosition(1));
console.log(letterAtPosition(26.0));
console.log(letterAtPosition(0));
console.log(letterAtPosition(4.5)); */



/* aggiungere formattazione con due decimali, parseFloat().toFixed(2) */
/* console.log("Esercizio 2: Trova lo sconto");
function dis(a, b) {
	return (a * (1 - b / 100)).toFixed(2);
}
console.log(dis(parseFloat(1500), parseFloat(50)));
console.log(dis(parseFloat(89), parseFloat(20)));
console.log(dis(parseFloat(100), parseFloat(75))); */



/* console.log("Esercizio 3: Calcolatrice di base");
function calculator(a, b, c){
	switch (b) {
		case "+":
			return a + c;
		case "-":
			return a - c;
		case "*":
			return a * c;
		case "/":
			if (c === 0) {
				return "Impossibile dividere per 0!";
			}
			return a / c;
	}
}
console.log(calculator(2, "+", 2));
console.log(calculator(2, "*", 2));
console.log(calculator(4, "/", 2));
console.log(calculator(4, "/", 0)); */



/* console.log("Esercizio 4: Fare la somma di N numeri");
function sumArray(a){
	let sum = 0;
	a.forEach(element => sum += element);
	return sum;
}
console.log(sumArray([1, 2, 4]));
console.log(sumArray([4, 2, 10, 2]));
console.log(sumArray([1])); */
/*
for (let i = 0, n = a.length; i < n; i++) {
	sum += a[i];
}
return sum; */




/* console.log("Esercizio 4.1: Somma degli indici pari");
function sumEven(a){
	let sum = 0;
	for(let i = 0; i < a.length; i++) {
		if (i%2 == 0) {
			sum += a[i];
		}
	}
	return sum;
}
console.log(sumEven([0, 2, 1, 4, 1])); */



/* console.log("Esercizio 5: Quante volte è vero?");
function countTrue(a){
	let counter = 0;
	for (let i in a) {
		if (a[i] === true) {
			counter++;
		}
	}
	return counter;
}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([])); */



/* console.log("Esercizio 6: Clona un array"); */
/* 
console.log("Esercizio 7: Piegare un pezzo di carta");
function numLayers(a) {
		let width = 0.0005;
		 for (let i = 0; i < a; i++) {
			width *= 2;
		 }
		 return width +"m";		
}
console.log(numLayers(1));
console.log(numLayers(4));
console.log(numLayers(21)); */
/* console.log(numLayers(parseInt(prompt("")))); */