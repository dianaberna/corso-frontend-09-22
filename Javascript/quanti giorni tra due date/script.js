console.log("quanti giorni tra due date")
function quantiGiorni(primaData, secondaData){
    const unGiorno = 24 * 60 * 60 * 1000;
    return diffDays = Math.round(Math.abs((primaData - secondaData) / unGiorno));
}

console.log(quantiGiorni(new Date("June 14, 2019"), new Date("June 20, 2019")))
console.log(quantiGiorni(new Date("December 29, 2018"), new Date("January 1, 2019")))
console.log(quantiGiorni(new Date("July 20, 2019"), new Date("July 30, 2019")))