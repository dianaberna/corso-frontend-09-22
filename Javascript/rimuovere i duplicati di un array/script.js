console.log("rimuovere i duplicati di un array");
function soloUnici(valore, indice, singolo) {
    return singolo.indexOf(valore) === indice;
}

function rimuoviDuplicati(array) {
    let risultato = array.filter(soloUnici);
    return risultato
}
console.log(rimuoviDuplicati([1, 0, 1, 0]));
console.log(rimuoviDuplicati(["The", "big", "cat"]));
console.log(rimuoviDuplicati(["John", "Taylor", "John"]));