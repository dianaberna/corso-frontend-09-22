console.log("somma di elementi array ");
function sommaElementiArray(array) {
    let somma = 0;
    for (let i = 0; i < array.length; i++) {
        somma = somma + array[i];
    }
    return somma;
}

console.log(sommaElementiArray([1, 2, 4]));
console.log(sommaElementiArray([4, 2, 10, 2]));
console.log(sommaElementiArray([1]));