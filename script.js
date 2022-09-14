console.log("ciao mondo!");
var a=2;
console.log(a);
a="ciao";
console.log(a);
a="ciao2";
console.log(a);


console.log("HolaHola");
let b = 2;
console.log(b);
b="ciaolet";
console.log(b);


const costante = 3;
console.log(costante);


function moltiplicazione (a,b) {
    let c = a*b;
    return c;
}

console.log (moltiplicazione(5,2));
console.log (moltiplicazione(-3,-6));
console.log (moltiplicazione(7,3));

function lessThanOrEqualToZero (a) {
    let b = (a<=0);
    return b;
}

console.log (lessThanOrEqualToZero (5));
console.log (lessThanOrEqualToZero (0));
console.log (lessThanOrEqualToZero (-2));

let r = 5;
if (r<=0) {
    console.log ("vero");
} 
else {
    console.log ("nonèvero");
}

{let r = 0;
if (r<=0) {
    console.log ("vero");
} 
else {
    console.log ("nonèvero");
}
}

{let r = -2;
if (r<=0) {
    console.log ("vero");
} 
else {
    console.log ("nonèvero");
}
}

function multi (a,b) {
    let c = (a*b);
    return c
}
console.log (multi(65,365));
console.log (multi(0,365));
console.log (multi(20,365));

function zampe (a,b,c) {
    let d=(a*2+b*4+c*4);
    return d;
}

console.log (zampe(2,3,5));
console.log (zampe(1,2,3));
console.log (zampe(5,2,8));

function fiammiferi (a,b,c) {
    let d = (a-b)
    let e = (d*5)
    let f = (e+c)
    return f;
}

console.log (fiammiferi(1,1,6));
console.log (fiammiferi(4,1,6));
console.log (fiammiferi(87,1,6));
