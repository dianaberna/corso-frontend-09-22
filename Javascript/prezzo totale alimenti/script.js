console.log("prezzo totale alimenti");
function prezzoTotaleAlimenti(alimenti) {
    let totale = 0;
    for (let i = 0; i < alimenti.length; i++) {
        totale = totale + (alimenti[i].price * alimenti[i].quantity);
    }

    return totale.toFixed(2);
}
console.log(
    prezzoTotaleAlimenti([{ product: "milk", quantity: 1, price: 1.5 }])
);
console.log(
    prezzoTotaleAlimenti([
        { product: "milk", quantity: 1, price: 1.5 },
        { product: "cereals", quantity: 1, price: 2.5 },
    ])
);
console.log(
    prezzoTotaleAlimenti([{ product: "milk", quantity: 3, price: 1.5 }])
);
console.log(
    prezzoTotaleAlimenti([
        { product: "milk", quantity: 1, price: 1.5 },
        { product: "eggs", quantity: 12, price: 0.10 },
        { product: "bread", quantity: 2, price: 1.6 },
        { product: "cheese", quantity: 1, price: 4.5 },
    ])
);
console.log(
    prezzoTotaleAlimenti([
        { product: "chocolate", quantity: 1, price: 0.10 },
        { product: "lollipop", quantity: 1, price: 0.20 },
    ])
);