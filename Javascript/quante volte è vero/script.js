console.log("quante volte è vero");
function quantiTrue(array) {
    let contatore = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == true) {
            contatore++;
        }
    }
    return contatore;
}
console.log(quantiTrue([true, false, false, true, false]));
console.log(quantiTrue([false, false, false, false]));
console.log(quantiTrue([]));