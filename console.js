// // Somma elementi Array

// console.log("--- Somma elementi array ---");
// {
//   let sumArray = [20, 30, 40];
//   let sum = 0;
//   sumArray.forEach((element) => {
//     sum = sum + element;
//   });
//   console.log(sum);
// }

// // Rimuovere duplicati array

// console.log("--- Rimozione duplicati array ---");
// let myArray = [0, 0, 0, 5, 5, 7, 7, 32, 5, 73, 2, 3, 5, 3];
// console.log("Array originale " + myArray);
// function CleanArray(arrayToCheck) {
//   if (Array.isArray(arrayToCheck)) {
//     let newArray = [];
//     arrayToCheck.forEach((element) => {
//       if (!newArray.includes(element)) {
//         newArray.push(element);
//       }
//     });
//     return newArray;
//   } else {
//     return "Data is not an array";
//   }
// }
// console.log(CleanArray(myArray));

// // Calcolo prezzo totale

// console.log("--- Calcolo prezzo totale ---");
// function priceSum(products) {
//   try {
//     let parsedProducts = JSON.parse(products);
//     let sum = 0;
//     parsedProducts.forEach((element) => {
//       sum = sum + element.price * element.quantity;
//     });
//     return sum;
//   } catch (error) {
//     return error;
//   }
// }

// let productsString =
//   '[{"product": "Milk","quantity": 1,"price": 1.50},{"product": "Car","quantity": 1,"price": 2},{"product": "Fruit","quantity": 6,"price": 2}]';
// console.log(priceSum(productsString));

// // Lettera alfabeto

console.log("--- Trova lettera alfabeto ---");
function trovaLettera(x) {
  if (x > 26 || x < 1 || !Number.isInteger(x)) {
    return false;
  }
  return String.fromCharCode(x + 96);
}
console.log(trovaLettera(27));

// //Controllo stringa email

// console.log("--- Valida Email ---");

// function controlloStringaEmail(email = "") {
//   try {
//     if (email.includes("@") && email.includes(".")) {
//       let stringArray = email.split("@");
//       if (stringArray.lastIndexOf() < 2) {
//         if (stringArray[0].includes("@") || stringArray[1].includes("@")) {
//           return false;
//         }
//         if (
//           (stringArray[0].length > 0 && !stringArray[0].includes(".")) ||
//           (stringArray[0].length > 0 &&
//             stringArray[0].includes(".") &&
//             stringArray[1].includes("."))
//         ) {
//           return true;
//         } else {
//           return false;
//         }
//       } else {
//         return false;
//       }
//     } else {
//       return false;
//     }
//   } catch (error) {
//     return error;
//   }
// }

// console.log(controlloStringaEmail("test.test@gmai.com"));

// let listElements = [
//   { name: "John", age: "21", budget: 23000 },
//   { name: "Steve", age: "32", budget: 40000 },
//   { name: "Martin", age: "16", budget: 2700 },
// ];

// let jsonList = JSON.stringify(listElements);

// function totalBudget(list) {
//   let total = 0;
//   listElements.forEach((element) => {
//     total = total + element.budget;
//   });
//   return total;
// }
// console.log(totalBudget(listElements));

// console.log(Date());

window.addEventListener("load", ()=> {
  document.querySelectorAll('p').forEach(element =>
    element.style.backgroundColor = "red"
    );
  });
