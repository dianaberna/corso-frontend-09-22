console.log("casa di fiammiferi");
function numeroDiFiammiferi(step) {
    return step == 0 ? 0 : step * 5 + 1;
}
console.log(numeroDiFiammiferi(0)); // se step=0 restituisce 0
console.log(numeroDiFiammiferi(1));
console.log(numeroDiFiammiferi(4));
console.log(numeroDiFiammiferi(87));