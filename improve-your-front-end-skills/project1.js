function numToHex (num) {
    /* Convert decimal number to hexadecimal string */
    // checkin input is an integer
    if (parseInt(num) === num) {
        return num.toString(16)   // convert with base 16 into hexadecimal
    } else {
        throw "TypeError: to get hexadecimal string insert a integer number"
    };
};

function hexToNum (hex) {
    /* Convert hexadecimal string to decimal number */
    // checkin input is a string
    if (typeof(hex) === "string") {
        return parseInt(hex, 16)   // convert with base 16 into decimal
    } else {
        throw "TypeError: to get integer number insert a hexadecimal string"
    };
};

function hexGen() {
    /* Hex number Generator */
    let num = () => {
        return Math.floor(Math.random() * 255 + 1)
    };
    return numToHex(num);
};

// TODO : validate the functions above, one by one, with all cases

let h1 = document.getElementsByTagName("h1")[0];
let h2 = document.getElementsByTagName("h2")[0];
let button = document.getElementsByTagName("button")[0];
alert(button);

button.addEventListener("click", function () {
        button.setAttribute("title", "Life is better with C*O*L*O*R*S");
        alert("click event listened");

        color1 = `#${hexGen()}${hexGen()}${hexGen()}`;
        console.log("color1 = "+ color1);
        color2 = `#${hexGen()}${hexGen()}${hexGen()}`;
        console.log("color2 = "+ color2);
    }
);