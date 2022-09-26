window.addEventListener('load', ()=>{


function CreaSenzaAttributi(tag, contenuto, posizione){
    let Tag=document.createElement(tag);
    let Contenuto=document.createTextNode(contenuto);
    Tag.appendChild(Contenuto);

    posizione.appendChild(Tag);
}

function CreaClasse(tag,contenuto,posizione,att){
    let Tag=document.createElement(tag);
    let Contenuto=document.createTextNode(contenuto);
    Tag.className=att;
    Tag.appendChild(Contenuto);

    posizione.appendChild(Tag);
   
}
 function CreaId(tag,contenuto,posizione,id){
    let Tag=document.createElement(tag);
    let Contenuto=document.createTextNode(contenuto);
    Tag.id=id;
    Tag.appendChild(Contenuto);

    posizione.appendChild(Tag);
} 

function CreaImm(tag,contenuto,posizione,src,alt){
    let Tag=document.createElement(tag);
    let Contenuto=document.createTextNode(contenuto);
    Tag.src=src;
    Tag.alt=alt;
    Tag.appendChild(Contenuto);

    posizione.appendChild(Tag);
} 

CreaSenzaAttributi("nav", " ", document.getElementsByClassName("padre")[0]);
CreaSenzaAttributi("div", " ", document.getElementsByTagName("nav")[0]);
CreaImm("img", " ",document.querySelectorAll("nav>div")[0], "./Ellipse 130.png", "bell'imbusto");
CreaSenzaAttributi("div", " ", document.querySelectorAll("nav>div")[0]);

let lab=document.createTextNode(" ");
let elementoLab=document.createElement("label");
elementoLab.htmlFor="search";

elementoLab.appendChild(lab);

let nodo=document.querySelectorAll("div>div")[0];
nodo.appendChild(elementoLab);

let inp=document.createTextNode("input");
let elementoInp=document.createElement("input");
elementoInp.type="input";
elementoInp.id="search";
elementoInp.placeholder="Search";

elementoInp.appendChild(inp);

let nodoInput=document.querySelectorAll("label")[0];
nodoInput.appendChild(elementoInp);

CreaImm("img", " ", document.querySelectorAll("nav>div")[0], "./Vector (9).png", "impostazioni");
CreaClasse("div", " ",document.getElementsByTagName("nav")[0],"manager");
CreaSenzaAttributi("p", "Manage my network ", document.getElementsByClassName("manager")[0]);
CreaSenzaAttributi("p", "  ", document.getElementsByClassName("manager")[0]);

let collegamento= document.createTextNode(" ");
let elementoCollegamento= document.createElement("a");
elementoCollegamento.href="https://www.google.it/";

elementoCollegamento.appendChild(collegamento);

let nodoCollegamento=document.querySelectorAll(".manager>p+p")[0];
nodoCollegamento.appendChild(elementoCollegamento);

CreaImm("img", " ", document.querySelectorAll(".manager>p+p>a")[0], "./Vector.png", "link a google");
CreaClasse("hr", " ", document.getElementsByTagName("nav")[0], "ciccioso");

let div=document.createTextNode(" ");
let elementoDiv=document.createElement("div");
elementoDiv.appendChild(div);

let nodoDiv=document.getElementsByTagName("nav")[0];
nodoDiv.insertAdjacentElement("afterend", elementoDiv);

CreaSenzaAttributi("p", "Invitation", document.querySelectorAll("nav+div")[0]);
CreaSenzaAttributi("p", "  ", document.querySelectorAll("nav+div")[0]);

let collegamento2= document.createTextNode(" ");
let elementoCollegamento2= document.createElement("a");
elementoCollegamento2.href="https://www.google.it/";

elementoCollegamento2.appendChild(collegamento2);

let nodoCollegamento2=document.querySelectorAll("nav+div>p")[1];
nodoCollegamento2.appendChild(elementoCollegamento2);

CreaImm("img", " ", document.querySelectorAll("nav+div>p>a")[0], "./Vector.png", "link a google");
CreaId("hr", " ",document.getElementsByClassName("padre")[0], "invitations" );
CreaClasse("div", " ",document.getElementsByClassName("padre")[0],"show");
CreaSenzaAttributi("p", " ", document.getElementsByClassName("show")[0]);
CreaImm("img", " ",document.querySelectorAll(".show>p")[0],"./Ellipse 131.png" , "tizio");
CreaClasse("div", " ", document.getElementsByClassName("show")[0], "testoC");

CreaClasse("p", "Jashanpreet Jandu ",document.getElementsByClassName("testoC")[0],"jas");
CreaClasse("p", "Student from University... ",document.getElementsByClassName("testoC")[0],"student");
CreaClasse("p", "78 mutual friends ",document.getElementsByClassName("testoC")[0], "minutes");
CreaClasse("div", " ", document.getElementsByClassName("show")[0], "checkOrNot");
CreaSenzaAttributi("button"," ", document.getElementsByClassName("checkOrNot")[0]);
CreaSenzaAttributi("button"," ", document.getElementsByClassName("checkOrNot")[0]);
document.getElementsByTagName("button")[0].innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>'
document.getElementsByTagName("button")[1].innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>'
CreaSenzaAttributi("hr", " ", document.getElementsByClassName("padre")[0]);

CreaClasse("div", " ",document.getElementsByClassName("padre")[0],"show");
CreaSenzaAttributi("p"," ",document.getElementsByClassName("show")[1]);
CreaImm("img", " ", document.querySelectorAll(".show>p")[1], "./Ellipse 131.png", "sempre tizio");
CreaClasse("div", " ", document.getElementsByClassName("show")[1], "testoC");

CreaClasse("p", "Jashanpreet Jandu ",document.getElementsByClassName("testoC")[1],"jas");
CreaClasse("p", "Student from University... ",document.getElementsByClassName("testoC")[1],"student");
CreaClasse("p", "78 mutual friends ",document.getElementsByClassName("testoC")[1], "minutes");
CreaClasse("div", " ", document.getElementsByClassName("show")[1], "checkOrNot");
CreaSenzaAttributi("button"," ", document.getElementsByClassName("checkOrNot")[1]);
CreaSenzaAttributi("button"," ", document.getElementsByClassName("checkOrNot")[1]);
document.getElementsByTagName("button")[2].innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>'
document.getElementsByTagName("button")[3].innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>'
CreaSenzaAttributi("hr", " ", document.getElementsByClassName("padre")[0]);

CreaId("p", "Show more", document.getElementsByClassName("padre")[0],"ShowMore");
CreaClasse("hr", " ", document.getElementsByClassName("padre")[0], "ciccioso");

CreaId("p", "Online events for you", document.getElementsByClassName("padre")[0],"Online");
CreaClasse("div", " ", document.getElementsByClassName("padre")[0], "Art");
CreaSenzaAttributi("div", " ", document.getElementsByClassName("Art")[0]);
CreaImm("img"," ", document.querySelectorAll(".Art>div")[0],"./Rectangle 280.png", " ");
CreaClasse("div", " ", document.querySelectorAll(".Art")[0],"FirstClose");
CreaClasse("div", " ", document.getElementsByClassName("FirstClose")[0], "close");
CreaSenzaAttributi("button", " ",document.getElementsByClassName("close")[0]);
document.getElementsByTagName("button")[4].innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>'

CreaClasse("div", " ",document.getElementsByClassName("FirstClose")[0],"View");
CreaSenzaAttributi("button", "View", document.getElementsByClassName("View")[0]);
CreaClasse("div"," ", document.getElementsByClassName("padre")[0], "title");
CreaSenzaAttributi("h5", " Let’s learn mental health: professional & mental health at work.", document.getElementsByClassName("title")[0]);
CreaClasse("div"," ", document.getElementsByClassName("title")[0], "secondoParagrafo");
CreaClasse("p", " Fri, Sep 3, 3:00 PM", document.getElementsByClassName("secondoParagrafo")[0],"Fri");
CreaClasse("p", "300 attendess", document.getElementsByClassName("secondoParagrafo")[0],"attendes");

});