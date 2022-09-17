console.log("budget totale");
function budgetTotale(oggetto) {
    let totale = 0;
    for (let i = 0; i < oggetto.length; i++) {
        totale = totale + oggetto[i].budget;
    }

    return totale;
}

console.log(
    budgetTotale([
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve", age: 32, budget: 40000 },
        { name: "Martin", age: 16, budget: 2700 },
    ])
);

console.log(
    budgetTotale([
        { name: "John", age: 21, budget: 29000 },
        { name: "Steve", age: 32, budget: 32000 },
        { name: "Martin", age: 16, budget: 1600 },
    ])
);