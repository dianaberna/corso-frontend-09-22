console.log("sasso carta forbici");
function sassoCartaForbici(p1, p2) {
    return p1 == p2
        ? `It's a draw`
        : p1 == `Rock` && p2 == "Scissors"
        ? `The winner is p1`
        : p1 == `Rock`
        ? `The winner is p2`
        : p1 == `Paper` && p2 == `Scissors`
        ? `The winner is p2`
        : p1 == `Paper` && p2 == `Rock`
        ? `The winner is p1`
        : p1 == `Scissors` && p2 == `Paper`
        ? `The winner is p1`
        : `The winner is p2`;
}

function sassoCartaForbici2(p1, p2) {
    let w = {
        Rock: "Scissors",
        Scissors: "Paper",
        Paper: "Rock",
    };
    if (p1 === p2) return "It's a draw";
    return `The winner is ${w[p1] === p2 ? "p1" : "p2"}`;
}

console.log(sassoCartaForbici("Rock", "Paper"))
console.log(sassoCartaForbici("Scissors", "Paper"))
console.log(sassoCartaForbici("Paper", "Paper"))
