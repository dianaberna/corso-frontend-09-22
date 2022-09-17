console.log("trova lo sconto");
function trovaSconto(prezzo, sconto) {
    return prezzo - (prezzo * sconto) / 100;
}

console.log(trovaSconto(1500, 50));
console.log(trovaSconto(89, 20));
console.log(trovaSconto(100, 75));