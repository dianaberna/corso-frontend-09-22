// const authors = ["a", "a", "b", "c"];
// let counts = {};
// authors.forEach(function (x) {
//     console.log(counts.toString());
//     counts[x] = (counts[x] || 0) + 1;
// });

// alert("ALT!");


function numInt (end) {
    /* to give a random interger in range from 0 to end [0, end] */
    return Math.floor(Math.random() * end)
};

function numToHex (num) {
    /* Convert decimal number to hexadecimal string */
    // checking input is an integer
    if (parseInt(num) === num) {
        let res = num.toString(16)   // convert with base 16 into hexadecimal
        // DEBUG : WHAT'S GOING ON?
        // to make sure to have hexadecimal string described with 3 digits
        if (res.length < 2) {res = "0" + res};
        return res
    } else {
        throw "TypeError: to get hexadecimal string insert a integer number"
    };
};

function hexToNum (hex) {
    /* Convert hexadecimal string to decimal number */
    let hexdigits = "0123456789abcdef"
    // checking input is a string
    if (typeof(hex) === "string") {
        // TODO : not yet valid for all chars outside hexdigits
        if ((hex.includes("g"))) { throw `Your hex ${hex} does not includes any ${hexdigits}`};
        let res = parseInt(hex, 16)   // convert with base 16 into decimal
        // DEBUG : WHAT'S GOING ON?
        // to make sure to have decimal string described with 3 digits
        if (res < 100) {res = "0" + res};
        if (res < 10) {res = "0" + res};
        return res;
    } else {
        throw "TypeError: to get integer number insert a hexadecimal string"
    };
};


function hexGen () {
    /* Hex number Generator */
    // let num = () => {
    //     return Math.floor(Math.random() * 255 + 1) // I think I didn't even need that +1 (for human)
    // };
    return numToHex(numInt(255));
};

// TODO : NOT YET FIXED
// TODO : NEW BUG... FIXME :
// WHEN I WANT TO SEE THE HEX AKA RGB ALL OF THEM GETS undefined
// I THOUGHT THE PROBLEM COULD BE INSIDE THE 3 DIGITS RULES I MADE (CHECK ALL " DEBUG : WHAT'S GOING ON?!" )
function hashHexToRGB (hashHex) {
    hashHex = hashHex.replace("#", "");
    let red = hexToNum(hashHex.slice(0, 2));
    let green = hexToNum(hashHex.slice(2, 4));
    let blue = hexToNum(hashHex.slice(4, 6));
    return `RGB(${red}, ${green}, ${blue})`;
};

// //  DEBUG : validate the functions above, one by one, with all cases
// let wrong = ["string", 12.5];
// for (let arg of wrong) {
//     try {
//         console.log(arg);
//         console.log(numToHex(arg));
//     } catch (err) {
//         console.log(err);
//     };
// };
// wrong = ["gg", 12.5];
// for (let arg of wrong) {
//     try {
//         console.log(arg);
//         console.log(arg.includes("g"));
//         console.log(hexToNum(arg));
//     } catch (err) {
//         console.log(err);
//     };
// };
// let color = 255;
// console.log(numToHex(color));
// color = "ff"
// console.log(hexToNum(color));

let h1 = document.getElementsByTagName("h1")[0];
let h2 = document.getElementsByTagName("h2")[0];
let button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function () {
        button.setAttribute("title", "Life is better with C*O*L*O*R*S");

        let color1 = `#${hexGen()}${hexGen()}${hexGen()}`;
        let color2 = `#${hexGen()}${hexGen()}${hexGen()}`;
        // // // DEBUG :
        // // alert("click event listened");
        console.log(`color1 = ${color1} aka ${hashHexToRGB(color1)}`);
        console.log(`color2 = ${color2} aka ${hashHexToRGB(color2)}`);
        // console.log(hashHexToRGB("#66ff88"));

        let linearGrad = `linear-gradient(to right, ${color1}, ${color2})`;
        // // DEBUG :
        // console.log(linearGrad)
        // document.body.style.backgroundColor = linearGrad;  // but... WHY!?
        document.body.style.background = linearGrad;

        let hex1 = document.getElementById("hex-1");
        hex1.innerHTML = color1;
        let hex2 = document.getElementById("hex-2");
        hex2.innerHTML = color2;
    }
);

// TODO : I want to randomize a bit even different kinds of fonts

// TODO : maybe even add a backdrop-filter for the text background or outline ("offset") too