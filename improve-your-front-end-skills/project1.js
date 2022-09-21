import { append2body, append2parent, nestingFromJson, HtmlElem } from "../myDomModule.js";

let h1 = document.getElementsByTagName("h1")[0];
let h2 = document.getElementsByTagName("h2")[0];
let button = document.getElementsByTagName("button")[0];
alert(button);

button.addEventListener("click", function () {
        button.setAttribute("title", "Life is better with C*O*L*O*R*S");
        alert("click event listened");
    }
);