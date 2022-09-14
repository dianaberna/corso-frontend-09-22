// Crea una funzione che accetta due numeri come argomenti e ne restituisce la moltiplicazione.

const moltiplicazione = (som1, som2) => console.log(som1 * som2);

moltiplicazione(2, 5);

// Crea una funzione che accetta un numero come unico argomento e restituisce true se è minore o uguale a zero, altrimenti restituisce false.
const confronto = (num) => console.log(num <= 0);

confronto(4);

// Creare una funzione che prenda l'età in anni e restituisca l'età in giorni.
const calcGiorni = (age) => console.log("age", age * 365);

calcGiorni(65);

// In questa sfida, un contadino ti chiede di dirgli quante zampe si possono contare tra tutti i suoi animali. L'agricoltore alleva tre specie: polli = 2 zampe, mucche = 4 zampe, maiali = 4 zampe
// L'agricoltore ha contato i suoi animali e ti dà un subtotale per ogni specie. Devi implementare una funzione che restituisca il numero totale di zampe di tutti gli animali.

const polli = 20;

const mucche = 14;

const maiali = 6;

const somma = (animal) => {
  console.log("animale", animal);

  if (animal === polli) {
    return console.log("totale zampe polli", animal * 2);
  } else if (animal === mucche || maiali) {
    return console.log(`totale zampe mucche o maiali`, animal * 4);
  }
};
somma(maiali);
