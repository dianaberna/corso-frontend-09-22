console.log("posizione nell'alfabeto ");
function letteraInPosizione(posizione) {
    if (posizione >= 1 && posizione <= 26 && posizione % 1 == 0) {
        return String.fromCharCode(posizione + 96);
    } else {
        return "invalid";
    }
}

console.log(letteraInPosizione(1));
console.log(letteraInPosizione(26.0));
console.log(letteraInPosizione(0));
console.log(letteraInPosizione(4.5));