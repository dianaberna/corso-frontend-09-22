/* Esercizi Avanzati */

// TODO
/* console.log("Esercizio 0: è palindroma?");
function isPalindrome(a){

	return a;
}
console.log(isPalindrome("ciao"));
console.log(isPalindrome("otto"));
 */



/* console.log("Esercizio 1: Validare un'e-mail");
function validateEmail(s){
	return /([A-Za-z0-9])+\.?([A-Za-z0-9])+\@([A-Za-z])+\.([A-Za-z0-9]){3}/.test(s);
}
console.log(validateEmail("@gmail.com"));
console.log(validateEmail("hello.gmail@com"));
console.log(validateEmail("gmail"));
console.log(validateEmail("hello@gmail"));
console.log(validateEmail("hello@edabit.com"));
 */
/* /([0-9]|[a-z]|[A-Z])+\.?([0-9]|[a-z]|[A-Z])+\@(|[a-z]|[A-Z])+\.([0-9]|[a-z]|[A-Z]){3}/
range [A-Za-z0-9] */



/* console.log("Esercizio 2: Sasso, carta, forbici");
function rps(p1, p2){
	let win = {
		Rock :"Scissor",
		Paper: "Rock",
		Scissor: "Paper"
	};
	if (p1 === p2) {
		return "It's a draw";
	}
	// operatore ternario?
	if (win[p1] === p2) {
		return "The winner is p1";
	}
	return "The winner is p2";
}
console.log(rps("Rock", "Paper"));
console.log(rps("Scissor", "Paper"));
console.log(rps("Paper", "Paper")); */



/* console.log("Esercizio 4: Quanti giorni tra due date");
function getDays(a, b) {
	//24 * 60 * 60 * 1000 un giorno in ms
	return Math.round(Math.abs(((b - a) / (24 * 60 * 60 * 1000))));
}
//date è in millisecondi 
console.log(getDays(new Date("June 14, 2019"), new Date("June 20, 2019")));
console.log(getDays(new Date("December 29, 2018"), new Date("January 1, 2019")));
console.log(getDays(new Date("July 20, 2019"), new Date("July 30, 2019")));  */



//--implementazione orribile
/* console.log("Esercizio 5.1: rimuovere i duplicati da un array")
function removeDups(a){
	let counter = 0;
	for (let i = 0; i < a.length; i++){
		for (let j = 0; j < i; j++){
			if (a[i] === a[j]) {
				a.splice(i, 1);
			}
		}
	}
	return a;
}
console.log(`${removeDups([1, 0, 1, 0])}`);
console.log(`${removeDups(["The", "big", "cat"])}`);
console.log(`${removeDups(["John", "Taylor", "John"])}`); */

// -- splice() mi inquieta
/* console.log("Esercizio 5.1: rimuovere i duplicati da un array")
function removeDups(a){
	let counter = 0;
	for (let i = 0; i < a.length; i++){
		for (let j = 0; j < i; j++){
			if (a[i] === a[j]) {
				a.splice(i, 1);
			}
		}
	}
	return a;
}
console.log(`${removeDups([1, 0, 1, 0])}`);
console.log(`${removeDups(["The", "big", "cat"])}`);
console.log(`${removeDups(["John", "Taylor", "John"])}`); */

//mah?
/* console.log("Esercizio 5.3: rimuovere i duplicati da un array")
function removeDups(a){
	return [...new Set(a)];
}
console.log(`${removeDups([1, 0, 1, 0])}`);
console.log(`${removeDups(["The", "big", "cat", "cat", "dog"])}`);
console.log(`${removeDups(["John", "Taylor", "John"])}`); */

//filter()
/* console.log("Esercizio 5.4: rimuovere i duplicati da un array")
	function checkDups(element, index, a) {
		return a.indexOf(element) === index;
	}
	function removeDups(a) {
		return a.filter(checkDups);
	}
console.log(`${removeDups([1, 0, 1, 0])}`);
console.log(`${removeDups(["The", "big", "cat", "cat", "dog"])}`);
console.log(`${removeDups(["John", "Taylor", "John"])}`); */




/* console.log("Esercizio 6: Ottieni la somma del budget delle persone") 
function getBudgets(obj) {
	let sum = 0;
	obj.forEach(item =>{sum += item.budget});
	return sum;
}
console.log(
    getBudgets([
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve", age: 32, budget: 40000 },
        { name: "Martin", age: 16, budget: 2700 },
    ])
);
console.log(
    getBudgets([
        { name: "John", age: 21, budget: 29000 },
        { name: "Steve", age: 32, budget: 32000 },
        { name: "Martin", age: 16, budget: 1600 },
    ])
); */



/* console.log("Esercizio 7: Calcola il prezzo totale dei generi alimentari") 
function getTotalPrice(obj){
	let sum = 0;
	obj.forEach(item =>{sum += (item.quantity * item.price)});
	return sum.toFixed(2);
}
console.log(getTotalPrice([
	{ product: "milk", quantity: 1, price: 1.5 }
])
);
console.log(
	getTotalPrice([
        { product: "milk", quantity: 1, price: 1.5 },
        { product: "cereals", quantity: 1, price: 2.5 },
    ])
);
console.log(
    getTotalPrice([
		{ product: "milk", quantity: 3, price: 1.5 }])
);
console.log(
    getTotalPrice([
        { product: "milk", quantity: 1, price: 1.5 },
        { product: "eggs", quantity: 12, price: 0.10 },
        { product: "bread", quantity: 2, price: 1.6 },
        { product: "cheese", quantity: 1, price: 4.5 },
    ])
);
console.log(
    getTotalPrice([
        { product: "chocolate", quantity: 1, price: 0.10 },
        { product: "lollipop", quantity: 1, price: 0.20 },
    ])
); */
