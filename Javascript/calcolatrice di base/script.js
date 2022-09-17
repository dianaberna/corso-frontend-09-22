console.log("calcolatrice di base");
function calcolatrice(a, operazione, b) {
    switch (operazione) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/": {
            return b == 0 ? "Impossibile dividere per 0!" : a / b;
        }
    }
}

console.log(calcolatrice(2, "/", 0));
console.log(calcolatrice(2, "+", 2));
console.log(calcolatrice(2, "*", 2));
console.log(calcolatrice(4, "/", 2));