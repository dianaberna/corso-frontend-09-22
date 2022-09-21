import { append2body, append2parent, nestingFromJson, HtmlElem } from "./myDomModule.js";


// /* crea SOLO un elemento, GENERICO */
// function crElem(tag, idOrClass="") {
//     let elem = document.createElement(tag);
//     /*
//     idOrClass :
//     - "0_litfit" by id
//     - "1_function" by one class
//     - "2_function__circle" by more classes // TODO : not yet tested here

//     childsContent :
//     - formatted as a JSON array [{elem, attributs, content}, {elem, attributs, content}, ... ]
//     */
//     // TODO : try to change it into a switch-case
//     if (idOrClass.split("_")[0] === "0" ) {
//         elem.id = idOrClass.split("_")[1];
//     } else if (idOrClass.split("_")[0] === "1" ) {
//         elem.className = idOrClass.split("_")[1];
//     } else if (idOrClass.split("_")[0] === "2" ) {
//         idOrClass = idOrClass.split("_")[1]
//         for (let _class of idOrClass.split("__")) {
//             elem.classList.add(_class);   // UTILE PER AGGIUNGERE PIÙ CLASSI
//         };
//     }else {
//         // NOTE :idOrClass should be undefined or None here OR SORT OF WITH AN EMPTY STRING
//     }; // NOTE : l'ho spostata in questa funzione di crea element dall'interno della funzione crFromJson
//     return elem
// };


// /* una funzione per creare un elemento SUL BODY */
// function append2body(child, idOrClass="") {
//     let elem = crElem(child, idOrClass);
//     document.body.appendChild(elem);
//     return elem
// };

// function append2parent(child, parent, idOrClass="") {
//     let elem = crElem(child, idOrClass);
//     parent.appendChild(elem);
//     return elem
// };

// function nestingFromJson(parent, childrenContent) {


//     // it might be counter intuitive with these names, but here is the nesting
//     // WARNING: ho refattorizzato lo script e modificato questa funzione solo per innestare tutto il childrenContent dentro un parent
//     // parent ~~> elem~~ > newElem > innerElem > child
//     // parent ~~> tag >~~ item["elem"] > item["content"]      // item["content"] then holds innerElem[0] and innerElem[1] (last one is the value of innerHTML )
//     for (let item of childrenContent) {
//         let newElem = append2parent(item["elem"], parent)
//         // // DEBUG :
//         // console.log(`working for ${item.elem}.${item.attributes[0][1]} `);
//         for (let attr of item["attributes"]) {
//             // controllo che la prima array-coppia (attr-value) dentro l'array non sia una array-coppia VUOTA
//             if (attr.length !== 0){
//                 // // DEBUG :
//                 // console.log(item["attributes"]);
//                 newElem.setAttribute(...attr);
//             };
//         };
//         // check if item.content has a string or more strings inside an array
//         if (Array.isArray(item["content"])) {
//             for (let innerElem of item["content"]) {
//                 let child = append2parent(innerElem[0], newElem)
//                 child.innerHTML = innerElem[1];
//             };
//         } else {
//             newElem.innerHTML = item["content"]
//         };
//     };
//     // NOTE : I don't think I still need to return nothing, anyway I just have a variable for the newElem which will be the last of the childrenContent
//     // return elem
// };

// /* created a class for any kind of HtmlElem */
// class HtmlElem {
//     // non più variabili, dentro una classe diventano proprietà
//     elem = "";
//     attributes = [];
//     content = ``;

//     // creaiamo il costruttore per accedere, quando si crea un'istanza, alle proprietà della classe
//     constructor ({ elem, attributes, content }) {
//         this.elem = elem;
//         this.attributes = attributes;
//         this.content = content;
//     };

//     // NOTE :
//     // metodi se mai volessi aggiungere delle funzioni proprie ad ogni istanza della classe
// };


window.addEventListener("load", function () {
    // tabula rasa per esercizio
    document.body.innerHTML = "";

    // /// OLD IDEA
    // function chooseSelectorWisely(method_selector) {
    //     /*
    //     Creato una funzione per selezionare un elemento in modo mirato e sartoriale server saper che metodo è usato.

    //     Input: string (case insensitive)

    //     // TODO : not working, still WIP

    //     "ById_litfit"   >>> document.getElementById("litfit")
    //     "ByTag_hr"   >>> document.getElementsByTagName("hr")
    //     "ByClass_circle"   >>> document.getElementsByClassName("circle")

    //     "Selector_header#litfit"   >>> document.querySelector("header #litfit")
    //     "SelectorAll_button_img"   >>> document.querySelectorAll("button img")
    //     */

    //     if (typeof method_selector !== "string") {
    //         throw "TypeError: I created chooseSelectorWisely to accept string as arguments"
    //     };
    //     method_selector = method_selector.toLowerCase()
    //     arr = method_selector.split("_")
    //     // DEBUG :
    //     console.log(arr);
    //     switch (arr[0]) {
    //         case "bytag":
    //             var res = document.getElementsByName(arr[1])
    //             break
    //             // let res_length = res.length
    //             // for (let i = 0; i<res_length; i++ ):
    //             //     let
    //             //     res[i].appendChild();
    //         case "byid":
    //             var res = document.getElementById(arr[1])
    //             break
    //         default:
    //             // lancia un allarme di errore
    //             throw "MethorError: there is no such a method to select a html element from document"
    //     };
    //     return res
    // };


    // // TO FOR OR NOT TO FOR
    // function* toForOrNotToFor(arrOrNotArray){
    //     console.log(arrOrNotArray);
    //     // detect type of the collection we get from a selectParent
    //     // if (typeof(arrOrNotArray) === NodeList) {
    //     // if (typeof(arrOrNotArray) === HTMLCollection) {
    //     // if (typeof(arrOrNotArray) === NodeListPrototype) {
    //     // // USEFUL LINK
    //     // // https://stackoverflow.com/questions/7238177/how-to-detect-htmlcollection-nodelist-in-javascript
    //     // if (HTMLCollection.prototype.isPrototypeOf(arrOrNotArray)) {
    //     if (NodeList.prototype.isPrototypeOf(arrOrNotArray)) {
    //         // TODO :
    //         // I don't think I can loop here without a generator...
    //         let nodeList_length = arrOrNotArray.length
    //         for (let i = 0 ; i < nodeList_length ; i++) {
    //             yield arrOrNotArray[0]
    //             alert("yielded an element in a for");
    //         };
    //     } else {
    //         console.log("not a NodeList");
    //         return arrOrNotArray
    //     };
    // };



    // // per creare un nuovo elemento dal padre
    // function createNewElem(parent, child, content) {
    //     let contentNode = document.createTextNode(content);
    //     let childNode = document.createElement(child);
    //     // // FUNZIONE PER SCEGLIER QUALE USARE BySomething querySomething
    //     // // forse con swith-case statement
    //     // switch (parent)
    //     let selectParent = chooseSelectorWisely(parent);

    //     // DEBUG :
    //     alert(selectParent);
    //     toForOrNotToFor(selectParent)

    //     childNode.appendChild(contentNode);
    //     selectParent.appendChild(childNode);
    // };

    // createNewElem("ByTag_Body", "header", "temporary header");
    // createNewElem("ById_litfit", "h1", "LITFIT");









    // function () {};




    /* creo il primo header */
    // // let selectBody = document.getElementsByTagName("body");
    // let newHeader = document.createElement("header");
    // // newHeader.innerHTML = "Header temp";
    // selectBody[0].appendChild(newHeader);

    /* aggiungo un header al body */
    // let newHeader = document.createElement("header");
    // // newHeader.innerHTML = "Header temp";
    // document.body.appendChild(newHeader);
    // // NOTE : con la funzione
    let newHeader = append2body("header");


    /* creo il div dentro l'header */
    // // let selectHeader = document.getElementsByTagName("header");
    // let newDiv = document.createElement("div");
    // // newDiv.innerHTML = "Header > div"
    // // selectHeader[0].appendChild(newDiv);
    // newHeader.appendChild(newDiv); // non mi serve riselezionare, lo conosciamo dalla sua creazione
    // // NOTE : con la funzione
    let newDiv = append2parent("div", newHeader);


    /* aggiungo bottoni e titolo h1 a newHeader */
    let selectHeaderDiv = document.querySelector("header > div");
    let headerContent = [
        ["button", "pfp img"],
        ["h1", "LITFIT"],
        ["button", `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_0_1209)"> <path d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15.87C15.4 15 15.02 15.34 14.89 15.8C14.54 17.07 13.37 18 12 18C10.63 18 9.46 17.07 9.11 15.8C8.98 15.34 8.6 15 8.13 15H5V6C5 5.45 5.45 5 6 5H18C18.55 5 19 5.45 19 6V15Z" fill="white" /> </g> <defs> <clipPath id="clip0_0_1209"> <rect width="24" height="24" fill="white" /> </clipPath> </defs> </svg>`]
    ];
    for (let item of headerContent) {
        let newItem = document.createElement(item[0]);
        /* volta per volta creato bottone o titolo */
        if (item[1] === "pfp img") {
            let pfpImg = document.createElement("img");
            /* impostando tutti gli attributi per l'immagine */
            pfpImg.setAttribute("src", "./assets/Ellipse 130.png");
            pfpImg.setAttribute("alt", "pfp");
            pfpImg.setAttribute("title", "Profile Picture.. Yeah! IDK why that ''acronym''");
            newItem.appendChild(pfpImg);
        } else if (item[1] === "LITFIT") {
            newItem.innerHTML = item[1];
            /* imposto l'attributo per h1 */
            newItem.id = "litfit"
        } else {
            /* più semplicemente per inserire un svg con tutti i suoi infinitoi pezzi */
            newItem.innerHTML = item[1];
        };
        selectHeaderDiv.appendChild(newItem);
    };


    /* aggiungo hr a newHeader */
    // let newHr = document.createElement("hr");
    // newHeader.appendChild(newHr);
    // // NOTE : con la funzione
    let newHr = append2parent("hr", newHeader)

    /* aggiungo una nav  con tutti i suoi bottoni con svg a newHeader */
    let newNav = document.createElement("nav");
    let navContent = [
        ["button", `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" fill="white" /> </svg>`],
        ["p", "TODAY"],
        ["button", `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <g clip-path="url(#clip0_0_1213)"> <path d="M3 17.46V20.5C3 20.78 3.22 21 3.5 21H6.54C6.67 21 6.8 20.95 6.89 20.85L17.81 9.94L14.06 6.19L3.15 17.1C3.05 17.2 3 17.32 3 17.46ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill="white" /> </g> <defs> <clipPath id="clip0_0_1213"> <rect width="24" height="24" fill="white" /> </clipPath> </defs> </svg>`],
    ];
    for (let item of navContent) {
        let newItem = document.createElement(item[0]);
        newItem.innerHTML = item[1];
        newNav.appendChild(newItem);
    };
    newHeader.appendChild(newNav);



    /* aggiungo main al body */
    // let newMain = document.createElement("main");
    // newMain.innerHTML = "MY MAIN!";
    // document.body.appendChild(newMain);
    // // NOTE : con la funzione
    let newMain = append2body("main");


    /* aggiungo section id="calories" a main */
    let newSection = document.createElement("section");
    newSection.id = "calories";
    let sectionContent = [
        ["progress", [["min", "0"], ["max", "100"], ["value", "10"]]],
        ["div", [["id", "progress-bar"]]],
        ["div", [["id", "rail"],], [["h1", "1100"], ["p", "Cal"]]],
    ];
    for (let item of sectionContent) {
        let newItem = document.createElement(item[0]);
        for (let property of item[1]) {
            newItem.setAttribute(...property);
            // verifica se il div ha attributo div="rail" per creare i suoi elementi
            if (property[0] == "id" && property[1] === "rail") {
                // alert(`property for id="rail"`);
                for (let child of item[2]) {
                    let nestedElement = document.createElement(child[0]);
                    nestedElement.innerHTML = child[1];
                    newItem.appendChild(nestedElement);
                };
            };
        };
        newSection.appendChild(newItem);
    };
    newMain.appendChild(newSection);


    // TODO : fino ad ora le nuove funzioni operano bene, ma non so se il caso che le usi nei restanti casi innestati qui sopra. O se mi servisse una funzione più complessa per attributi e/o contenuti degli elementi


    /* aggiungo section con i div class="function" */
    // let newSection2 = append2parent("section", newMain);
    let divContent2 = [
        {
            "elem": "div",
            "attributes": [["class", "circle"],],
            "content": `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M9.98194 7.46739C10.2767 7.46739 10.5153 7.22859 10.5153 6.93405V5.86739C10.5153 5.57286 10.2767 5.33406 9.98194 5.33406C9.68714 5.33406 9.44861 5.57286 9.44861 5.86739V6.93405C9.44861 7.22859 9.68714 7.46739 9.98194 7.46739Z" fill="white" /> <path d="M9.98194 10.6674C10.2767 10.6674 10.5153 10.4286 10.5153 10.1341V9.06741C10.5153 8.77288 10.2767 8.53408 9.98194 8.53408C9.68714 8.53408 9.44861 8.77288 9.44861 9.06741V10.1341C9.44861 10.4286 9.68714 10.6674 9.98194 10.6674Z" fill="white" /> <path d="M8.91521 7.4674H7.84855C7.55375 7.4674 7.31522 7.7062 7.31522 8.00073C7.31522 8.29527 7.55375 8.53407 7.84855 8.53407H8.91521C9.21001 8.53407 9.44855 8.29527 9.44855 8.00073C9.44855 7.7062 9.21001 7.4674 8.91521 7.4674Z" fill="white" /> <path d="M11.0486 8.53407H12.1153C12.4101 8.53407 12.6486 8.29527 12.6486 8.00073C12.6486 7.7062 12.4101 7.4674 12.1153 7.4674H11.0486C10.7538 7.4674 10.5153 7.7062 10.5153 8.00073C10.5153 8.29527 10.7538 8.53407 11.0486 8.53407Z" fill="white" /> <path d="M6.66663 15.2506C6.3517 15.2506 6.0965 15.5059 6.0965 15.8207C6.0965 16.1355 6.35183 16.391 6.66663 16.391C6.98143 16.391 7.23677 16.1356 7.23677 15.8207C7.23677 15.5058 6.98157 15.2506 6.66663 15.2506Z" fill="white" /> <path d="M33.3332 29.1174C33.0182 29.1174 32.763 29.3728 32.763 29.6876C32.763 30.0024 33.0184 30.2579 33.3332 30.2579C33.648 30.2579 33.9033 30.0025 33.9033 29.6876C33.9033 29.3726 33.6481 29.1174 33.3332 29.1174Z" fill="white" /> <path d="M33.6835 17.8747C33.5955 16.0156 33.0532 14.1695 32.1158 12.5356C31.9694 12.2799 31.6434 12.1916 31.3876 12.3384C31.1324 12.4851 31.0439 12.8108 31.1907 13.0663C32.0443 14.554 32.5376 16.2343 32.6178 17.9248C32.6563 18.7436 32.6058 19.5628 32.4667 20.3597C32.1328 22.2791 31.2902 24.068 30.0303 25.5332C29.3928 26.2741 28.6486 27.5928 28.6486 28.8704V34.6676H19.4507L18.6566 31.8871L23.9444 30.9257C24.1595 30.8867 24.3294 30.72 24.372 30.5055L24.9048 27.8388C24.9627 27.55 24.7751 27.2691 24.4866 27.2115C24.1948 27.1539 23.9168 27.3412 23.859 27.63L23.397 29.9412L17.9266 30.9357L13.7231 31.0432C13.57 31.0432 13.4419 30.9177 13.4252 30.7591L13.1447 27.5771L15.5132 26.6297C15.7507 26.5347 15.8872 26.2847 15.8392 26.0336C15.7908 25.7825 15.571 25.6011 15.3152 25.6011H12.9704L12.8751 24.5201C12.8558 24.3032 12.7068 24.1199 12.4986 24.0565L10.7923 23.5404C10.6814 23.5149 10.622 23.4344 10.597 23.3885C10.5563 23.3156 10.5434 23.2307 10.5595 23.1489L13.5688 18.4192C13.6735 18.2549 13.6798 18.0468 13.586 17.876C13.4923 17.7057 13.3131 17.5997 13.1188 17.5997H13.1184C13.1179 17.5997 13.1179 17.5997 13.1174 17.5997C12.9908 17.5997 12.87 17.5453 12.7856 17.45C12.7383 17.3967 12.6616 17.2828 12.6815 17.1213C12.8618 15.6511 13.2971 14.2052 13.907 13.0503C14.045 12.7899 13.945 12.4672 13.6846 12.3295C13.4242 12.1915 13.1012 12.2915 12.9643 12.5519C12.2846 13.8373 11.8211 15.3727 11.6231 16.9917C11.5715 17.4128 11.7043 17.8379 11.9876 18.1576C12.0798 18.2617 12.1855 18.3519 12.3007 18.4259L9.61845 22.6416C9.59605 22.6768 9.57778 22.7143 9.56431 22.7539C9.43311 23.1345 9.46898 23.5544 9.66431 23.9057C9.85391 24.2479 10.1779 24.4935 10.5184 24.5705L11.8444 24.9727L12.3632 30.8609C12.4372 31.5729 13.0216 32.1096 13.7367 32.1096L17.5826 32.0115L18.5356 35.3476C18.6012 35.5765 18.8106 35.7343 19.0487 35.7343H29.182C29.4768 35.7343 29.7154 35.4955 29.7154 35.2009V28.8704C29.7154 27.9529 30.2976 26.8579 30.8388 26.2285C32.2248 24.6179 33.1508 22.6515 33.518 20.5425C33.6699 19.6692 33.7256 18.7716 33.6835 17.8747Z" fill="white" /> <path d="M13.725 18.8479C13.862 19.5801 15.0824 19.7343 15.3168 19.7343C15.7288 19.7343 16.925 19.4717 16.925 18.6676C16.925 18.3731 16.6865 18.1343 16.3917 18.1343C16.1553 18.1343 15.9542 18.2884 15.8844 18.5017C15.7646 18.5763 15.4813 18.6676 15.3166 18.6676C15.15 18.6676 14.8458 18.5785 14.7254 18.5103C14.6218 18.3032 14.3932 18.1813 14.1505 18.2253C13.8614 18.2796 13.6702 18.5583 13.725 18.8479Z" fill="white" /> <path d="M18.4224 14.0511C18.7022 14.1066 18.9834 14.1344 19.2646 14.1344C19.6068 14.1344 19.9495 14.0892 20.2898 14.0071C20.432 14.0779 20.5716 14.155 20.7198 14.2112C21.1176 14.3623 21.5947 14.4766 22.0286 14.4766C22.218 14.4766 22.3972 14.4511 22.5602 14.401C22.7207 14.4496 22.9026 14.4771 23.1051 14.4771C23.5927 14.4771 24.1811 14.3271 24.7696 14.0432C25.0508 14.0991 25.3332 14.1342 25.6155 14.1342C25.8967 14.1342 26.178 14.1066 26.4571 14.0511C28.591 13.6268 30.0535 11.0602 30.115 10.9514C30.2472 10.7152 30.1822 10.417 29.9628 10.2582C29.9166 10.2251 28.8916 9.49671 27.5976 9.12124C27.5946 8.09684 27.4167 7.29977 27.4019 7.23604C27.3368 6.95377 27.0576 6.77671 26.7732 6.83391C26.7275 6.84351 25.7647 7.04884 24.7058 7.58244C24.122 5.84364 23.0288 4.53031 22.966 4.45604C22.8671 4.33911 22.7223 4.27031 22.5691 4.26724C22.4227 4.25737 22.2691 4.32711 22.1655 4.44017C22.0982 4.51351 20.9419 5.79671 20.303 7.50791C19.2764 7.00217 18.3634 6.80364 18.3192 6.79417C18.0338 6.73457 17.7536 6.91364 17.689 7.19751C17.6743 7.26111 17.5007 8.04764 17.4974 9.06377C16.1038 9.41484 14.9668 10.2219 14.9166 10.2582C14.6972 10.417 14.6322 10.7152 14.7644 10.9514C14.826 11.0603 16.2886 13.627 18.4224 14.0511ZM28.9162 10.8543C28.3938 11.6119 27.3771 12.7806 26.249 13.0048C26.2338 13.0079 26.2184 13.0086 26.2032 13.0114C26.4146 12.796 26.6167 12.5652 26.7927 12.3019C27.2151 11.6698 27.4292 10.9307 27.5272 10.215C28.0892 10.4038 28.5867 10.6603 28.9162 10.8543ZM26.4547 8.02511C26.5683 8.88737 26.663 10.5764 25.9063 11.7092C25.3736 12.5058 24.6819 12.9575 24.0874 13.193C24.6502 12.315 25.0678 11.0276 25.0678 9.62764C25.0678 9.29551 25.0363 8.96724 24.981 8.64684C25.5272 8.34937 26.0708 8.14511 26.4547 8.02511ZM22.5422 5.66884C23.0848 6.45551 24.001 8.02164 24.001 9.62764C24.001 11.911 22.8354 13.2206 22.5791 13.2932C22.2572 13.2258 20.952 11.8828 20.952 9.62764C20.9522 8.02537 21.9568 6.45044 22.5422 5.66884ZM18.638 7.98684C18.9947 8.09937 19.49 8.28671 19.9998 8.55391C19.9291 8.90391 19.8855 9.26297 19.8855 9.62764C19.8855 11.0528 20.339 12.2878 20.9206 13.14C20.3484 12.8912 19.7039 12.4458 19.1995 11.6904C18.437 10.5496 18.5266 8.85324 18.638 7.98684ZM17.5674 10.1514C17.6651 10.8811 17.8812 11.6374 18.3131 12.2832C18.5 12.5631 18.7226 12.8146 18.9596 13.0512C18.8498 13.0408 18.74 13.0266 18.6308 13.0048C17.4287 12.766 16.4267 11.5199 15.9658 10.8522C16.3354 10.6344 16.9178 10.3414 17.5674 10.1514Z" fill="white" /> </svg>`,
        },
        {
            "elem": "div",
            "attributes": [["class", "caption"],],
            "content": [
                ["h4", "Track your mindfulness"],
                ["p", "5 days left this week"],
            ],
        },
        {
            "elem": "button",
            "attributes": [["disabled", ""]],
            "content": `<svg class="hidden" width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_0_1248)"> <path d="M27.5 19.5H20V27C20 27.825 19.325 28.5 18.5 28.5C17.675 28.5 17 27.825 17 27V19.5H9.5C8.675 19.5 8 18.825 8 18C8 17.175 8.675 16.5 9.5 16.5H17V9C17 8.175 17.675 7.5 18.5 7.5C19.325 7.5 20 8.175 20 9V16.5H27.5C28.325 16.5 29 17.175 29 18C29 18.825 28.325 19.5 27.5 19.5Z" fill="white"/> </g> <defs> <clipPath id="clip0_0_1248"> <rect width="36" height="36" fill="white" transform="translate(0.5)"/> </clipPath> </defs> </svg>`,
        },
    ];
    // let newDivFunction = append2parent("div", newSection2);
    // newDivFunction.className = "function";
    // for (let item of divContent2) {
    //     let newElem = append2parent(item["elem"], newDivFunction);
    //     for (let attr of item.attributs){
    //         newElem.setAttribute(...attr)
    //     };
    //     // controllo se il content elencato nell'oggetto sia multiplo, sennò vado di singolo
    //     if (Array.isArray(item.content)) {
    //         for (let innerElem of item.content) {
    //             let child = append2parent(innerElem[0], newElem);
    //             child.innerHTML = innerElem[1];
    //         };
    //     } else {
    //         newElem.innerHTML = item.content;
    //     };
    // };


    // TODO : to repeat or not to repeat this complex thing? This is the question


    let newSection2 = append2parent("section", newMain)
    // NOTE :
    // STAVO SBAGLIANDO: dovevo avere section > div.function > [div.circle, div.caption, button]
    // PROBABILMENTE PRIMA DELLA FUNZIONE nestingFromJson
    // STAVO OTTENENDO: section.function > [div.circle, div.caption, button]
    let newDivFunction1 = append2parent("div", newSection2, "1_function")
    nestingFromJson(newDivFunction1, divContent2);

    // // questo non funziona perchè ho gia eliminato questo elemento con svg.hidden
    // let hiddenSvg = document.querySelector(".function button svg.hidden");
    // // NON SO PERCHÈ QUESTO NON FUNZIONA
    // let hiddenSvg = document.querySelector(".function:nth-child(1) button svg");
    // hiddenSvg.className = "hidden";
    // FEELS LIKE A FAIL... I put it inside the svg in divContent2



    // TODO : maybe recreate a simpler function to create and append one item at a time with all its settings on one JSON Object, without any creating the new first node of this branch of content
    // NOTE : I don't think I need another function as `crFromJson`... because I either need to create, append2body or append2parent and nestingFromJson





    let elementoDiProva = new HtmlElem({
        "elem": "div",
        "attributes": [["class", "circle"],],
        "content": `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M9.98194 7.46739C10.2767 7.46739 10.5153 7.22859 10.5153 6.93405V5.86739C10.5153 5.57286 10.2767 5.33406 9.98194 5.33406C9.68714 5.33406 9.44861 5.57286 9.44861 5.86739V6.93405C9.44861 7.22859 9.68714 7.46739 9.98194 7.46739Z" fill="white" /> <path d="M9.98194 10.6674C10.2767 10.6674 10.5153 10.4286 10.5153 10.1341V9.06741C10.5153 8.77288 10.2767 8.53408 9.98194 8.53408C9.68714 8.53408 9.44861 8.77288 9.44861 9.06741V10.1341C9.44861 10.4286 9.68714 10.6674 9.98194 10.6674Z" fill="white" /> <path d="M8.91521 7.4674H7.84855C7.55375 7.4674 7.31522 7.7062 7.31522 8.00073C7.31522 8.29527 7.55375 8.53407 7.84855 8.53407H8.91521C9.21001 8.53407 9.44855 8.29527 9.44855 8.00073C9.44855 7.7062 9.21001 7.4674 8.91521 7.4674Z" fill="white" /> <path d="M11.0486 8.53407H12.1153C12.4101 8.53407 12.6486 8.29527 12.6486 8.00073C12.6486 7.7062 12.4101 7.4674 12.1153 7.4674H11.0486C10.7538 7.4674 10.5153 7.7062 10.5153 8.00073C10.5153 8.29527 10.7538 8.53407 11.0486 8.53407Z" fill="white" /> <path d="M6.66663 15.2506C6.3517 15.2506 6.0965 15.5059 6.0965 15.8207C6.0965 16.1355 6.35183 16.391 6.66663 16.391C6.98143 16.391 7.23677 16.1356 7.23677 15.8207C7.23677 15.5058 6.98157 15.2506 6.66663 15.2506Z" fill="white" /> <path d="M33.3332 29.1174C33.0182 29.1174 32.763 29.3728 32.763 29.6876C32.763 30.0024 33.0184 30.2579 33.3332 30.2579C33.648 30.2579 33.9033 30.0025 33.9033 29.6876C33.9033 29.3726 33.6481 29.1174 33.3332 29.1174Z" fill="white" /> <path d="M33.6835 17.8747C33.5955 16.0156 33.0532 14.1695 32.1158 12.5356C31.9694 12.2799 31.6434 12.1916 31.3876 12.3384C31.1324 12.4851 31.0439 12.8108 31.1907 13.0663C32.0443 14.554 32.5376 16.2343 32.6178 17.9248C32.6563 18.7436 32.6058 19.5628 32.4667 20.3597C32.1328 22.2791 31.2902 24.068 30.0303 25.5332C29.3928 26.2741 28.6486 27.5928 28.6486 28.8704V34.6676H19.4507L18.6566 31.8871L23.9444 30.9257C24.1595 30.8867 24.3294 30.72 24.372 30.5055L24.9048 27.8388C24.9627 27.55 24.7751 27.2691 24.4866 27.2115C24.1948 27.1539 23.9168 27.3412 23.859 27.63L23.397 29.9412L17.9266 30.9357L13.7231 31.0432C13.57 31.0432 13.4419 30.9177 13.4252 30.7591L13.1447 27.5771L15.5132 26.6297C15.7507 26.5347 15.8872 26.2847 15.8392 26.0336C15.7908 25.7825 15.571 25.6011 15.3152 25.6011H12.9704L12.8751 24.5201C12.8558 24.3032 12.7068 24.1199 12.4986 24.0565L10.7923 23.5404C10.6814 23.5149 10.622 23.4344 10.597 23.3885C10.5563 23.3156 10.5434 23.2307 10.5595 23.1489L13.5688 18.4192C13.6735 18.2549 13.6798 18.0468 13.586 17.876C13.4923 17.7057 13.3131 17.5997 13.1188 17.5997H13.1184C13.1179 17.5997 13.1179 17.5997 13.1174 17.5997C12.9908 17.5997 12.87 17.5453 12.7856 17.45C12.7383 17.3967 12.6616 17.2828 12.6815 17.1213C12.8618 15.6511 13.2971 14.2052 13.907 13.0503C14.045 12.7899 13.945 12.4672 13.6846 12.3295C13.4242 12.1915 13.1012 12.2915 12.9643 12.5519C12.2846 13.8373 11.8211 15.3727 11.6231 16.9917C11.5715 17.4128 11.7043 17.8379 11.9876 18.1576C12.0798 18.2617 12.1855 18.3519 12.3007 18.4259L9.61845 22.6416C9.59605 22.6768 9.57778 22.7143 9.56431 22.7539C9.43311 23.1345 9.46898 23.5544 9.66431 23.9057C9.85391 24.2479 10.1779 24.4935 10.5184 24.5705L11.8444 24.9727L12.3632 30.8609C12.4372 31.5729 13.0216 32.1096 13.7367 32.1096L17.5826 32.0115L18.5356 35.3476C18.6012 35.5765 18.8106 35.7343 19.0487 35.7343H29.182C29.4768 35.7343 29.7154 35.4955 29.7154 35.2009V28.8704C29.7154 27.9529 30.2976 26.8579 30.8388 26.2285C32.2248 24.6179 33.1508 22.6515 33.518 20.5425C33.6699 19.6692 33.7256 18.7716 33.6835 17.8747Z" fill="white" /> <path d="M13.725 18.8479C13.862 19.5801 15.0824 19.7343 15.3168 19.7343C15.7288 19.7343 16.925 19.4717 16.925 18.6676C16.925 18.3731 16.6865 18.1343 16.3917 18.1343C16.1553 18.1343 15.9542 18.2884 15.8844 18.5017C15.7646 18.5763 15.4813 18.6676 15.3166 18.6676C15.15 18.6676 14.8458 18.5785 14.7254 18.5103C14.6218 18.3032 14.3932 18.1813 14.1505 18.2253C13.8614 18.2796 13.6702 18.5583 13.725 18.8479Z" fill="white" /> <path d="M18.4224 14.0511C18.7022 14.1066 18.9834 14.1344 19.2646 14.1344C19.6068 14.1344 19.9495 14.0892 20.2898 14.0071C20.432 14.0779 20.5716 14.155 20.7198 14.2112C21.1176 14.3623 21.5947 14.4766 22.0286 14.4766C22.218 14.4766 22.3972 14.4511 22.5602 14.401C22.7207 14.4496 22.9026 14.4771 23.1051 14.4771C23.5927 14.4771 24.1811 14.3271 24.7696 14.0432C25.0508 14.0991 25.3332 14.1342 25.6155 14.1342C25.8967 14.1342 26.178 14.1066 26.4571 14.0511C28.591 13.6268 30.0535 11.0602 30.115 10.9514C30.2472 10.7152 30.1822 10.417 29.9628 10.2582C29.9166 10.2251 28.8916 9.49671 27.5976 9.12124C27.5946 8.09684 27.4167 7.29977 27.4019 7.23604C27.3368 6.95377 27.0576 6.77671 26.7732 6.83391C26.7275 6.84351 25.7647 7.04884 24.7058 7.58244C24.122 5.84364 23.0288 4.53031 22.966 4.45604C22.8671 4.33911 22.7223 4.27031 22.5691 4.26724C22.4227 4.25737 22.2691 4.32711 22.1655 4.44017C22.0982 4.51351 20.9419 5.79671 20.303 7.50791C19.2764 7.00217 18.3634 6.80364 18.3192 6.79417C18.0338 6.73457 17.7536 6.91364 17.689 7.19751C17.6743 7.26111 17.5007 8.04764 17.4974 9.06377C16.1038 9.41484 14.9668 10.2219 14.9166 10.2582C14.6972 10.417 14.6322 10.7152 14.7644 10.9514C14.826 11.0603 16.2886 13.627 18.4224 14.0511ZM28.9162 10.8543C28.3938 11.6119 27.3771 12.7806 26.249 13.0048C26.2338 13.0079 26.2184 13.0086 26.2032 13.0114C26.4146 12.796 26.6167 12.5652 26.7927 12.3019C27.2151 11.6698 27.4292 10.9307 27.5272 10.215C28.0892 10.4038 28.5867 10.6603 28.9162 10.8543ZM26.4547 8.02511C26.5683 8.88737 26.663 10.5764 25.9063 11.7092C25.3736 12.5058 24.6819 12.9575 24.0874 13.193C24.6502 12.315 25.0678 11.0276 25.0678 9.62764C25.0678 9.29551 25.0363 8.96724 24.981 8.64684C25.5272 8.34937 26.0708 8.14511 26.4547 8.02511ZM22.5422 5.66884C23.0848 6.45551 24.001 8.02164 24.001 9.62764C24.001 11.911 22.8354 13.2206 22.5791 13.2932C22.2572 13.2258 20.952 11.8828 20.952 9.62764C20.9522 8.02537 21.9568 6.45044 22.5422 5.66884ZM18.638 7.98684C18.9947 8.09937 19.49 8.28671 19.9998 8.55391C19.9291 8.90391 19.8855 9.26297 19.8855 9.62764C19.8855 11.0528 20.339 12.2878 20.9206 13.14C20.3484 12.8912 19.7039 12.4458 19.1995 11.6904C18.437 10.5496 18.5266 8.85324 18.638 7.98684ZM17.5674 10.1514C17.6651 10.8811 17.8812 11.6374 18.3131 12.2832C18.5 12.5631 18.7226 12.8146 18.9596 13.0512C18.8498 13.0408 18.74 13.0266 18.6308 13.0048C17.4287 12.766 16.4267 11.5199 15.9658 10.8522C16.3354 10.6344 16.9178 10.3414 17.5674 10.1514Z" fill="white" /> </svg>`,
    },)

    // DEBUG :
    // console.log(elementoDiProva);
    // alert("stop it right there");



    let divContent3 = [new HtmlElem({
            "elem": "div",
            "attributes": [["class", "circle"],],
            "content": `<svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" > <g clip-path="url(#clip0_0_1223)"> <path d="M16.7865 16.1194H1.06679C0.753757 16.1194 0.5 16.3732 0.5 16.6862C0.5 16.9993 0.753757 17.253 1.06679 17.253H16.7865C17.0995 17.253 17.3532 16.9993 17.3532 16.6862C17.3532 16.3732 17.0995 16.1194 16.7865 16.1194Z" fill="white" /> <path d="M10.7404 13.7009L5.90361 13.7006C5.59058 13.7006 5.33682 13.9543 5.33682 14.2674C5.33682 14.5805 5.59051 14.8341 5.90361 14.8342L10.7404 14.8344C11.0534 14.8344 11.3072 14.5808 11.3072 14.2677C11.3073 13.9546 11.0535 13.7009 10.7404 13.7009Z" fill="white" /> <path d="M10.7403 11.2826H10.7402L8.92646 11.2829C8.61336 11.2829 8.35967 11.5367 8.35974 11.8498C8.35974 12.1628 8.6135 12.4165 8.92653 12.4165L10.7404 12.4162C11.0535 12.4162 11.3072 12.1624 11.3071 11.8494C11.3072 11.5363 11.0533 11.2826 10.7403 11.2826Z" fill="white" /> <path d="M15.5773 18.5374H5.90361C5.59058 18.5374 5.33682 18.7911 5.33682 19.1041C5.33682 19.4172 5.59058 19.6709 5.90361 19.6709H15.5773C15.8903 19.6709 16.144 19.4172 16.144 19.1041C16.144 18.7911 15.8903 18.5374 15.5773 18.5374Z" fill="white" /> <path d="M3.48504 13.7006H2.2758C1.96277 13.7006 1.70901 13.9543 1.70901 14.2674C1.70901 14.5804 1.96277 14.8342 2.2758 14.8342H3.48504C3.79807 14.8342 4.05182 14.5804 4.05182 14.2674C4.05182 13.9543 3.79807 13.7006 3.48504 13.7006Z" fill="white" /> <path d="M27.4064 15.0268L28.8686 15.6848C29.3364 15.8951 29.8324 16.0018 30.3428 16.0018C31.2478 16.0018 32.1133 15.6626 32.7798 15.0464L35.8945 12.1647C36.5533 11.5552 36.6936 10.5581 36.2209 9.84522C35.9294 9.40563 35.4649 9.1177 34.9465 9.05541C34.4285 8.99325 33.9113 9.16045 33.5279 9.51476L30.3676 12.439C30.3563 12.4494 30.3402 12.452 30.3263 12.4458L27.6475 11.2403C27.1343 11.0093 26.5266 11.1817 26.2023 11.6499C25.7388 12.319 25.0612 12.6379 24.5544 12.4252C24.0274 12.2041 23.781 11.4437 23.9684 10.6173C24.0915 10.0743 23.815 9.51567 23.311 9.28884L20.3794 7.96957C19.1165 7.40131 17.6212 7.61646 16.57 8.51759L13.2614 11.3535C12.5797 11.9378 12.401 12.9295 12.8458 13.6602C13.1202 14.1109 13.5735 14.4164 14.0895 14.4983C14.6051 14.5801 15.1283 14.4323 15.5241 14.0925L18.8819 11.2145C18.893 11.2051 18.9088 11.2027 18.9222 11.2087L20.3174 11.8365C20.4753 11.9076 20.5956 12.0362 20.6559 12.1986C20.7162 12.3611 20.7092 12.5369 20.6359 12.6939L15.8604 22.9345C15.8521 22.9523 15.833 22.9609 15.8138 22.9543L8.7376 20.5385C8.44292 20.4325 8.11835 20.5854 8.01239 20.88L6.57957 24.8623C6.52873 25.0037 6.53605 25.1595 6.60003 25.2956C6.66401 25.4316 6.77954 25.5366 6.92101 25.5875L7.4899 25.7921C7.75526 25.8876 8.0266 25.9328 8.29357 25.9328C9.08944 25.9328 9.84614 25.5303 10.2876 24.8559L15.1147 26.4629C15.4829 26.5857 15.865 26.6478 16.2505 26.6478C17.6355 26.6478 18.9092 25.8382 19.4986 24.5842L20.6051 22.4227L25.7205 24.5374C25.7315 24.5421 25.7386 24.5499 25.743 24.5641L27.707 30.8335V33.0104C27.707 33.3234 27.9608 33.5772 28.2738 33.5772H32.5061C32.8191 33.5772 33.0728 33.3234 33.0728 33.0104V32.4058C33.0728 31.2674 32.2694 30.3136 31.1999 30.0803L29.0124 23.0237C28.6976 22.0006 27.9503 21.1775 26.962 20.7654L24.5077 19.7428L26.5605 15.3408C26.7083 15.0243 27.0877 14.8834 27.4064 15.0268ZM19.9066 10.4087L19.387 10.1748C18.975 9.98936 18.4871 10.0596 18.144 10.3537L14.7859 13.232C14.6428 13.3548 14.4538 13.4082 14.267 13.3786C14.0774 13.3485 13.9165 13.2391 13.8139 13.0706C13.6574 12.8134 13.7386 12.4372 13.9989 12.2141L17.3075 9.37821C18.0268 8.76157 19.05 8.61448 19.914 9.0033L20.4572 9.24778L19.9066 10.4087ZM9.46905 23.9744C9.23632 24.6214 8.52061 24.9584 7.8736 24.7256L7.83802 24.7128L8.88708 21.7972L10.096 22.2322L9.46905 23.9744ZM29.3652 13.2562L29.861 13.4794C30.2904 13.6726 30.7916 13.5908 31.1374 13.271L34.2975 10.3469C34.4361 10.2188 34.6229 10.1582 34.8112 10.1808C35.0019 10.2038 35.167 10.307 35.2761 10.4716C35.4422 10.7221 35.3757 11.1003 35.1246 11.3325L32.0101 14.2141C31.5538 14.636 30.9617 14.8682 30.3428 14.8682C29.9938 14.8682 29.6543 14.7951 29.3338 14.6509L28.8147 14.4174L29.3652 13.2562ZM18.4848 24.0768C18.4816 24.083 18.4786 24.0892 18.4756 24.0956C18.0737 24.9575 17.2003 25.5145 16.2503 25.5145C15.9869 25.5145 15.7254 25.4719 15.4729 25.3876L10.7332 23.8096L11.1673 22.6032L15.4546 24.0296C16.0196 24.219 16.6356 23.9543 16.8877 23.4138L16.9187 23.3474L18.5194 24.0091L18.4848 24.0768ZM31.9393 32.406V32.4438H28.8407V31.1589H30.6923C31.3799 31.159 31.9393 31.7184 31.9393 32.406ZM26.2608 21.7014L26.5259 21.8118C27.2022 22.0938 27.7136 22.6571 27.9294 23.3583L29.9961 30.0254H28.6418L26.8255 24.2283C26.7227 23.8942 26.4789 23.6255 26.1549 23.4905L25.6309 23.2739L26.2608 21.7014ZM25.5332 14.862L23.4605 19.3066L21.2351 18.3866C20.9458 18.2672 20.6144 18.4046 20.4948 18.6939C20.3752 18.9832 20.5128 19.3147 20.8021 19.4342L25.2142 21.2654L24.5832 22.8409L20.5549 21.1757C20.2823 21.0629 19.9684 21.1785 19.8338 21.4413L19.0375 22.9969L17.3981 22.3191L21.663 13.1731C21.8654 12.739 21.8851 12.2528 21.7182 11.8038C21.5717 11.4096 21.2974 11.0876 20.9369 10.8818L21.4911 9.71332L22.8454 10.3228C22.8623 10.3304 22.866 10.3509 22.8625 10.3667C22.5482 11.7528 23.0634 13.0292 24.1154 13.4706C25.1211 13.8927 26.3625 13.4094 27.1341 12.2955C27.145 12.2797 27.1646 12.2664 27.1821 12.2742L28.3312 12.7913L27.7793 13.9551C26.9185 13.6244 25.9274 14.0166 25.5332 14.862Z" fill="white" /> <path d="M29.4831 3.42246H26.4601C25.1474 3.42246 24.0795 4.49044 24.0795 5.8031V7.01233C24.0795 8.65834 25.4186 9.99757 27.0647 9.99757C28.7107 9.99757 30.05 8.65841 30.05 7.01233V3.98925C30.05 3.67622 29.7961 3.42246 29.4831 3.42246ZM28.9163 7.01226C28.9163 8.03319 28.0857 8.86386 27.0647 8.86386C26.0438 8.86386 25.2131 8.03319 25.2131 7.01226V5.8031C25.2131 5.11551 25.7725 4.55611 26.4601 4.55611H28.9163V7.01226Z" fill="white" /> </g> <defs> <clipPath id="clip0_0_1223"> <rect width="36" height="36" fill="white" transform="translate(0.5 0.5)" /> </clipPath> </defs> </svg>`,
        }),
        new HtmlElem(
        {
            "elem": "div",
            "attributes": [["class", "caption"],],
            "content": [
                ["h4", "Track your exercise"],
                ["p", "5 days left this week"],
            ],
        }),
        new HtmlElem({
            "elem": "button",
            "attributes": [[]],
            "content": `<svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_0_1248)"> <path d="M27.5 19.5H20V27C20 27.825 19.325 28.5 18.5 28.5C17.675 28.5 17 27.825 17 27V19.5H9.5C8.675 19.5 8 18.825 8 18C8 17.175 8.675 16.5 9.5 16.5H17V9C17 8.175 17.675 7.5 18.5 7.5C19.325 7.5 20 8.175 20 9V16.5H27.5C28.325 16.5 29 17.175 29 18C29 18.825 28.325 19.5 27.5 19.5Z" fill="white"/> </g> <defs> <clipPath id="clip0_0_1248"> <rect width="36" height="36" fill="white" transform="translate(0.5)"/> </clipPath> </defs> </svg>`,
        }),
    ];

    /* creo una nuovo div function */
    let newDivFunction2 = append2parent("div", newSection2, "1_function");
    nestingFromJson(newDivFunction2, divContent3);



    let divContent4 = [new HtmlElem({
        "elem": "div",
        "attributes": [["class", "circle"],],
        "content": `<svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M32.1271 35.9704H4.86772C3.84878 35.9676 2.87253 35.5608 2.15303 34.8393C1.43352 34.1178 1.02948 33.1405 1.02948 32.1215V10.5586C1.02948 9.53873 1.43425 8.56057 2.1549 7.83893C2.87555 7.11728 3.85316 6.71117 4.87301 6.70976H10.6965C10.8369 6.70976 10.9716 6.76554 11.0709 6.86482C11.1702 6.96411 11.226 7.09877 11.226 7.23917C11.226 7.37958 11.1702 7.51424 11.0709 7.61353C10.9716 7.71281 10.8369 7.76859 10.6965 7.76859H4.87301C4.13397 7.76999 3.42569 8.06455 2.9036 8.58763C2.38152 9.1107 2.0883 9.81955 2.0883 10.5586V32.1215C2.0883 32.8597 2.38079 33.5677 2.90173 34.0906C3.42267 34.6135 4.1296 34.9087 4.86772 34.9115H32.1271C32.8662 34.9101 33.5745 34.6156 34.0965 34.0925C34.6186 33.5694 34.9118 32.8606 34.9118 32.1215V10.5586C34.9104 9.81906 34.616 9.11023 34.0931 8.5873C33.5702 8.06438 32.8614 7.76999 32.1218 7.76859H26.2983C26.1579 7.76859 26.0232 7.71281 25.924 7.61353C25.8247 7.51424 25.7689 7.37958 25.7689 7.23917C25.7689 7.09877 25.8247 6.96411 25.924 6.86482C26.0232 6.76554 26.1579 6.70976 26.2983 6.70976H32.1218C33.1422 6.71116 34.1203 7.11711 34.8418 7.8386C35.5633 8.5601 35.9693 9.53824 35.9707 10.5586V32.1215C35.9693 33.141 35.564 34.1183 34.8437 34.8396C34.1233 35.561 33.1466 35.9676 32.1271 35.9704Z" fill="white" /> <path d="M30.7561 33.3236H6.24428C5.56324 33.3208 4.91098 33.0487 4.4299 32.5666C3.94883 32.0845 3.67803 31.4317 3.67664 30.7507V11.6918C3.68138 11.1049 3.90606 10.541 4.30632 10.1116C4.70658 9.68222 5.25331 9.41855 5.83852 9.37266C6.42374 9.32677 7.00488 9.50201 7.46717 9.86376C7.92946 10.2255 8.23929 10.7475 8.33546 11.3265C8.71573 13.7499 9.94908 15.9578 11.8132 17.5523C13.6774 19.1467 16.0498 20.0229 18.5028 20.0229C20.9559 20.0229 23.3282 19.1467 25.1924 17.5523C27.0565 15.9578 28.2899 13.7499 28.6702 11.3265C28.7589 10.7405 29.0663 10.2097 29.5305 9.84107C29.9946 9.47242 30.5812 9.29322 31.1722 9.3395C31.7631 9.38578 32.3146 9.65412 32.7157 10.0905C33.1169 10.527 33.3379 11.0991 33.3343 11.6918V30.7507C33.3329 31.4335 33.0606 32.088 32.5773 32.5703C32.0939 33.0527 31.4389 33.3236 30.7561 33.3236ZM6.01664 10.4213C5.67636 10.4227 5.3505 10.5588 5.11038 10.7999C4.87027 11.041 4.73546 11.3674 4.73546 11.7077V30.7665C4.73963 31.1644 4.90027 31.5447 5.18263 31.8251C5.46499 32.1055 5.84637 32.2634 6.24428 32.2648H30.7561C31.1567 32.2634 31.5405 32.1032 31.8233 31.8194C32.1061 31.5356 32.2649 31.1513 32.2649 30.7507V11.6918C32.2575 11.372 32.1316 11.0663 31.9117 10.8339C31.6918 10.6015 31.3935 10.459 31.0746 10.4339C30.7556 10.4089 30.4387 10.5031 30.1852 10.6983C29.9318 10.8935 29.7597 11.1759 29.7025 11.4907C29.279 14.1593 27.9174 16.5893 25.8625 18.3438C23.8076 20.0983 21.1942 21.0622 18.4922 21.0622C15.7902 21.0622 13.1768 20.0983 11.1219 18.3438C9.06705 16.5893 7.70544 14.1593 7.28193 11.4907C7.23179 11.1915 7.07709 10.9198 6.84539 10.7239C6.61369 10.5281 6.32001 10.4208 6.01664 10.4213Z" fill="white" /> <path d="M18.5 18.4471C16.7775 18.4471 15.0938 17.9364 13.6616 16.9794C12.2294 16.0225 11.1132 14.6624 10.4541 13.071C9.79491 11.4797 9.62245 9.72865 9.95848 8.0393C10.2945 6.34995 11.1239 4.79819 12.3419 3.58024C13.5598 2.36229 15.1116 1.53285 16.801 1.19682C18.4903 0.86079 20.2414 1.03325 21.8327 1.6924C23.424 2.35155 24.7841 3.46779 25.7411 4.89994C26.698 6.3321 27.2088 8.01587 27.2088 9.73831C27.206 12.0472 26.2875 14.2607 24.6549 15.8933C23.0223 17.5259 20.8088 18.4443 18.5 18.4471ZM18.5 2.08831C16.9869 2.08831 15.5079 2.53697 14.2499 3.37756C12.9918 4.21816 12.0113 5.41292 11.4323 6.81078C10.8533 8.20863 10.7018 9.74679 10.997 11.2307C11.2921 12.7147 12.0207 14.0778 13.0906 15.1477C14.1605 16.2175 15.5236 16.9461 17.0075 17.2413C18.4915 17.5365 20.0296 17.385 21.4275 16.806C22.8253 16.227 24.0201 15.2465 24.8607 13.9884C25.7013 12.7304 26.15 11.2513 26.15 9.73831C26.1486 7.70983 25.3421 5.76484 23.9078 4.33049C22.4734 2.89614 20.5284 2.08971 18.5 2.08831Z" fill="white" /> <path d="M18.4999 5.26429C18.3595 5.26429 18.2248 5.20851 18.1255 5.10923C18.0263 5.00995 17.9705 4.87529 17.9705 4.73488V3.46429C17.9705 3.32388 18.0263 3.18922 18.1255 3.08994C18.2248 2.99065 18.3595 2.93488 18.4999 2.93488C18.6403 2.93488 18.775 2.99065 18.8742 3.08994C18.9735 3.18922 19.0293 3.32388 19.0293 3.46429V4.73488C19.0293 4.87529 18.9735 5.00995 18.8742 5.10923C18.775 5.20851 18.6403 5.26429 18.4999 5.26429Z" fill="white" /> <path d="M16.0066 5.95293C15.9142 5.95237 15.8236 5.92765 15.7437 5.88121C15.6638 5.83477 15.5975 5.76824 15.5513 5.68823L14.9054 4.56587C14.836 4.44495 14.817 4.3015 14.8527 4.16669C14.8884 4.03188 14.9758 3.91659 15.096 3.84587C15.1561 3.81065 15.2226 3.78764 15.2916 3.77815C15.3606 3.76867 15.4309 3.7729 15.4982 3.79061C15.5656 3.80831 15.6288 3.83914 15.6843 3.88133C15.7397 3.92352 15.7863 3.97624 15.8213 4.03646L16.4672 5.15881C16.5022 5.21924 16.5249 5.28599 16.534 5.35523C16.5431 5.42446 16.5384 5.49481 16.5202 5.56223C16.502 5.62964 16.4706 5.69279 16.4279 5.74803C16.3852 5.80328 16.332 5.84952 16.2713 5.88411C16.1906 5.92984 16.0994 5.95357 16.0066 5.95293Z" fill="white" /> <path d="M14.1851 7.77413C14.0924 7.77478 14.0011 7.75104 13.9204 7.70531L12.7981 7.05943C12.7364 7.02442 12.6824 6.97737 12.6393 6.9211C12.5962 6.86482 12.5648 6.80046 12.547 6.73183C12.5293 6.66319 12.5254 6.59169 12.5358 6.52155C12.5462 6.45142 12.5706 6.38409 12.6075 6.32355C12.6782 6.20336 12.7935 6.11592 12.9283 6.08023C13.0631 6.04455 13.2066 6.0635 13.3275 6.13296L14.4498 6.77884C14.5709 6.84868 14.6595 6.96358 14.6962 7.09847C14.7329 7.23335 14.7147 7.37728 14.6457 7.49884C14.6004 7.5816 14.5339 7.65076 14.4529 7.69916C14.3719 7.74756 14.2795 7.77345 14.1851 7.77413Z" fill="white" /> <path d="M13.5182 10.268H12.2265C12.0861 10.268 11.9514 10.2123 11.8521 10.113C11.7528 10.0137 11.6971 9.87903 11.6971 9.73863C11.6971 9.59822 11.7528 9.46356 11.8521 9.36427C11.9514 9.26499 12.0861 9.20921 12.2265 9.20921H13.5182C13.6586 9.20921 13.7933 9.26499 13.8926 9.36427C13.9919 9.46356 14.0476 9.59822 14.0476 9.73863C14.0476 9.87903 13.9919 10.0137 13.8926 10.113C13.7933 10.2123 13.6586 10.268 13.5182 10.268Z" fill="white" /> <path d="M13.0631 13.4021C12.9475 13.401 12.8356 13.362 12.7442 13.2912C12.6529 13.2205 12.5872 13.1218 12.5572 13.0102C12.5272 12.8986 12.5346 12.7803 12.5781 12.6732C12.6216 12.5662 12.699 12.4764 12.7984 12.4174L13.9207 11.7715C13.9808 11.7363 14.0473 11.7133 14.1163 11.7038C14.1853 11.6943 14.2555 11.6986 14.3229 11.7163C14.3903 11.734 14.4535 11.7648 14.509 11.807C14.5644 11.8492 14.611 11.9019 14.646 11.9621C14.7134 12.0832 14.7306 12.2259 14.694 12.3595C14.6573 12.4931 14.5698 12.607 14.4501 12.6768L13.3278 13.3227C13.2481 13.3722 13.1568 13.3996 13.0631 13.4021Z" fill="white" /> <path d="M23.9319 13.4013C23.8392 13.4019 23.7479 13.3782 23.6672 13.3325L22.5449 12.676C22.4847 12.641 22.4319 12.5944 22.3898 12.539C22.3476 12.4835 22.3167 12.4203 22.299 12.3529C22.2813 12.2855 22.2771 12.2153 22.2866 12.1463C22.2961 12.0773 22.3191 12.0108 22.3543 11.9507C22.425 11.8305 22.5403 11.7431 22.6751 11.7074C22.8099 11.6717 22.9534 11.6907 23.0743 11.7601L24.1967 12.406C24.3177 12.4759 24.4063 12.5908 24.443 12.7256C24.4797 12.8605 24.4616 13.0045 24.3925 13.126C24.3473 13.2088 24.2807 13.2779 24.1997 13.3263C24.1187 13.3747 24.0263 13.4006 23.9319 13.4013Z" fill="white" /> <path d="M24.7735 10.268H23.4765C23.3361 10.268 23.2014 10.2123 23.1021 10.113C23.0028 10.0137 22.9471 9.87903 22.9471 9.73863C22.9471 9.59822 23.0028 9.46356 23.1021 9.36427C23.2014 9.26499 23.3361 9.20921 23.4765 9.20921H24.7735C24.9139 9.20921 25.0486 9.26499 25.1479 9.36427C25.2472 9.46356 25.3029 9.59822 25.3029 9.73863C25.3029 9.87903 25.2472 10.0137 25.1479 10.113C25.0486 10.2123 24.9139 10.268 24.7735 10.268Z" fill="white" /> <path d="M22.8093 7.77396C22.6937 7.77279 22.5818 7.73384 22.4904 7.66307C22.3991 7.5923 22.3334 7.4936 22.3034 7.38202C22.2734 7.27043 22.2808 7.1521 22.3243 7.04508C22.3678 6.93805 22.4452 6.84821 22.5446 6.78926L23.6669 6.14337C23.727 6.10815 23.7935 6.08514 23.8625 6.07565C23.9315 6.06617 24.0018 6.0704 24.0691 6.08811C24.1365 6.10581 24.1997 6.13664 24.2552 6.17883C24.3106 6.22102 24.3572 6.27374 24.3922 6.33396C24.4272 6.39438 24.4499 6.46114 24.459 6.53037C24.4681 6.59961 24.4634 6.66996 24.4452 6.73738C24.427 6.80479 24.3957 6.86794 24.3529 6.92318C24.3102 6.97842 24.257 7.02467 24.1963 7.05926L23.074 7.70514C22.9933 7.75087 22.902 7.77461 22.8093 7.77396Z" fill="white" /> <path d="M20.988 5.95274C20.8949 5.95311 20.8034 5.92892 20.7226 5.88261C20.6418 5.83629 20.5747 5.7695 20.528 5.68895C20.4813 5.60841 20.4566 5.51697 20.4565 5.42386C20.4564 5.33075 20.4809 5.23926 20.5274 5.15863L21.1786 4.03627C21.2519 3.92104 21.3668 3.83857 21.4994 3.80608C21.6321 3.77359 21.7721 3.79361 21.8903 3.86194C22.0085 3.93028 22.0958 4.04165 22.1338 4.17279C22.1719 4.30393 22.1578 4.44469 22.0945 4.56569L21.4486 5.68804C21.402 5.76883 21.3348 5.83586 21.2539 5.88234C21.173 5.92883 21.0813 5.95311 20.988 5.95274Z" fill="white" /> <path d="M18.4999 11.2365C18.2036 11.2365 17.9139 11.1486 17.6675 10.984C17.4211 10.8193 17.2291 10.5853 17.1157 10.3116C17.0023 10.0378 16.9726 9.73657 17.0304 9.44594C17.0882 9.15531 17.2309 8.88835 17.4405 8.67881C17.65 8.46928 17.917 8.32659 18.2076 8.26878C18.4982 8.21097 18.7995 8.24064 19.0732 8.35404C19.347 8.46744 19.581 8.65947 19.7456 8.90585C19.9103 9.15224 19.9981 9.44191 19.9981 9.73823C19.9981 10.1356 19.8403 10.5167 19.5593 10.7976C19.2783 11.0786 18.8972 11.2365 18.4999 11.2365ZM18.4999 9.29882C18.3833 9.29882 18.2716 9.34511 18.1892 9.42752C18.1068 9.50992 18.0605 9.62169 18.0605 9.73823C18.0605 9.85477 18.1068 9.96653 18.1892 10.0489C18.2716 10.1313 18.3833 10.1776 18.4999 10.1776C18.6164 10.1776 18.7282 10.1313 18.8106 10.0489C18.893 9.96653 18.9393 9.85477 18.9393 9.73823C18.9393 9.62169 18.893 9.50992 18.8106 9.42752C18.7282 9.34511 18.6164 9.29882 18.4999 9.29882Z" fill="white" /> <path d="M19.1828 9.57957C19.0787 9.57914 18.9771 9.54805 18.8906 9.49018C18.8041 9.43231 18.7366 9.35023 18.6965 9.2542C18.6564 9.15816 18.6455 9.05244 18.6651 8.95024C18.6847 8.84804 18.7341 8.7539 18.8069 8.67958L20.5646 6.92193C20.6138 6.87231 20.6723 6.83293 20.7369 6.80605C20.8014 6.77917 20.8706 6.76534 20.9405 6.76534C21.0103 6.76534 21.0795 6.77917 21.144 6.80605C21.2086 6.83293 21.2671 6.87231 21.3163 6.92193C21.4149 7.02113 21.4703 7.15531 21.4703 7.29517C21.4703 7.43503 21.4149 7.56921 21.3163 7.6684L19.5587 9.42604C19.5092 9.47511 19.4505 9.51393 19.386 9.54028C19.3215 9.56662 19.2525 9.57998 19.1828 9.57957Z" fill="white" /> </svg>`,
    }),
    new HtmlElem(
    {
        "elem": "div",
        "attributes": [["class", "caption"],],
        "content": [
            ["h4", "70 kg"],
            ["p", "set your goal"],
        ],
    }),
    new HtmlElem({
        "elem": "button",
        "attributes": [[]],
        "content": `<svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_0_1248)"> <path d="M27.5 19.5H20V27C20 27.825 19.325 28.5 18.5 28.5C17.675 28.5 17 27.825 17 27V19.5H9.5C8.675 19.5 8 18.825 8 18C8 17.175 8.675 16.5 9.5 16.5H17V9C17 8.175 17.675 7.5 18.5 7.5C19.325 7.5 20 8.175 20 9V16.5H27.5C28.325 16.5 29 17.175 29 18C29 18.825 28.325 19.5 27.5 19.5Z" fill="white"/> </g> <defs> <clipPath id="clip0_0_1248"> <rect width="36" height="36" fill="white" transform="translate(0.5)"/> </clipPath> </defs> </svg>`,
    }),
    ];

    /* creo una nuovo div function */
    let newDivFunction3 = append2parent("div", newSection2, "1_function");
    nestingFromJson(newDivFunction3, divContent4);


    let divContent5 = [
    new HtmlElem({
        "elem": "div",
        "attributes": [["class", "circle"],],
        "content": `<svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" > <g clip-path="url(#clip0_0_1276)"> <path d="M29.5221 0.5H21.6171C21.3258 0.5 21.0898 0.736109 21.0898 1.02734C21.0898 1.31858 21.3258 1.55469 21.6171 1.55469H29.5221C29.6592 1.55469 29.7708 1.66627 29.7708 1.80338V5.06659C29.7708 13.9499 28.9922 22.8906 27.4565 31.6401L26.9225 34.6824C26.8449 35.1244 26.4628 35.4453 26.0139 35.4453H10.9858C10.5369 35.4453 10.1548 35.1244 10.0773 34.6824L9.54332 31.6401C8.00755 22.8903 7.22891 13.9498 7.22891 5.06659V1.80338C7.22891 1.66627 7.3405 1.55469 7.47761 1.55469H19.5077C19.799 1.55469 20.0351 1.31858 20.0351 1.02734C20.0351 0.736109 19.799 0.5 19.5077 0.5H7.47761C6.75887 0.5 6.17422 1.08472 6.17422 1.80338V5.06659C6.17422 14.0107 6.95821 23.0127 8.50445 31.8223L9.0384 34.8647C9.20476 35.8123 10.0237 36.5 10.9858 36.5H26.0139C26.976 36.5 27.795 35.8122 27.9612 34.8647L28.4952 31.8223C30.0415 23.0128 30.8255 14.0109 30.8255 5.06659V1.80338C30.8255 1.08472 30.2409 0.5 29.5221 0.5V0.5Z" fill="white" /> <path d="M11.8129 12.0868C11.8129 11.7956 11.5768 11.5594 11.2855 11.5594H10.2426C9.95844 11.5594 9.68317 11.6776 9.48728 11.8835C9.29167 12.0891 9.18767 12.3695 9.20188 12.6527C9.51568 18.91 10.2211 25.1946 11.2983 31.332L11.5776 32.9231C11.6529 33.352 12.0236 33.6632 12.459 33.6632H24.5403C24.9759 33.6632 25.3466 33.3519 25.4218 32.923L25.7011 31.3319C26.7783 25.194 27.4837 18.9094 27.7974 12.6526C27.8116 12.3694 27.7076 12.089 27.512 11.8834C27.3161 11.6776 27.0409 11.5594 26.7567 11.5594H13.3949C13.1037 11.5594 12.8676 11.7956 12.8676 12.0868C12.8676 12.378 13.1037 12.6141 13.3949 12.6141H26.7433C26.4313 18.8227 25.7311 25.0592 24.6622 31.1496L24.406 32.6086H12.5931L12.337 31.1497C11.2682 25.0598 10.5679 18.8233 10.2559 12.6142H11.2855C11.5768 12.6141 11.8129 12.378 11.8129 12.0868Z" fill="white" /> </g> <defs> <clipPath id="clip0_0_1276"> <rect width="36" height="36" fill="white" transform="translate(0.5 0.5)" /> </clipPath> </defs> </svg>`,
    }),
    new HtmlElem(
    {
        "elem": "div",
        "attributes": [["class", "caption"],],
        "content": [
            ["h4", "Log some water"],
            ["p", "64 fl oz left"],
        ],
    }),
    new HtmlElem({
        "elem": "button",
        "attributes": [[]],
        "content": `<svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_0_1248)"> <path d="M27.5 19.5H20V27C20 27.825 19.325 28.5 18.5 28.5C17.675 28.5 17 27.825 17 27V19.5H9.5C8.675 19.5 8 18.825 8 18C8 17.175 8.675 16.5 9.5 16.5H17V9C17 8.175 17.675 7.5 18.5 7.5C19.325 7.5 20 8.175 20 9V16.5H27.5C28.325 16.5 29 17.175 29 18C29 18.825 28.325 19.5 27.5 19.5Z" fill="white"/> </g> <defs> <clipPath id="clip0_0_1248"> <rect width="36" height="36" fill="white" transform="translate(0.5)"/> </clipPath> </defs> </svg>`,
    }),
    ];

    /* creo una nuovo div function */
    let newDivFunction4 = append2parent("div", newSection2, "1_function");
    nestingFromJson(newDivFunction4, divContent5);



    /* creo il footer con tutti i suoi figli */
    let newNavTabBar = append2body("nav", "0_tab-bar");
    let newUl = append2parent("ul", newNavTabBar);

    let liContent = [
        // nestingFromJson qui avrebbe una limitazione, io posso usarlo solo uno alla volta per mettere dentro il solo una colsa alla volta, poi passo ad un altro li e poi lo riempio con un altra chiamata nesting solo per un contenuto
        // questo perchè per ogni singola chiamata childrenContent deve essere iterabile , quindi un'array
        [
            new HtmlElem({
                "elem": "button",
                "attributes": [[]],
                "content": `
                    <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_0_1308)">
                            <path
                                d="M20 3H19V2C19 1.45 18.55 1 18 1C17.45 1 17 1.45 17 2V3H7V2C7 1.45 6.55 1 6 1C5.45 1 5 1.45 5 2V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM19 21H5C4.45 21 4 20.55 4 20V8H20V20C20 20.55 19.55 21 19 21Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_0_1308">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                `,
            })
        ],
        [
            new HtmlElem({
                "elem": "button",
                "attributes": [[]],
                "content": `
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_0_1306)">
                        <path
                            d="M12 2C8.14 2 5 5.14 5 9C5 13.17 9.42 18.92 11.23 21.11C11.63 21.59 12.36 21.59 12.76 21.11C14.58 18.92 19 13.17 19 9C19 5.14 15.86 2 12 2ZM16.31 8.16L11.18 13.29C10.79 13.68 10.16 13.68 9.77 13.29L7.7 11.22C7.31 10.83 7.31 10.19 7.7 9.8C8.09 9.41 8.73 9.41 9.12 9.8L10.48 11.16L14.9 6.74C15.29 6.35 15.93 6.35 16.32 6.74C16.7 7.14 16.7 7.77 16.31 8.16Z"
                            fill="white"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_0_1306">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                `,
            })
        ],
        [
            new HtmlElem({
                "elem": "button",
                "attributes": [[]],
                "content": `
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_0_1309)">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.67 13.13C18.04 14.06 19 15.32 19 17V20H22C22.55 20 23 19.55 23 19V17C23 14.82 19.43 13.53 16.67 13.13Z"
                            fill="white"
                        />
                        <path
                            d="M9 12C11.2091 12 13 10.2091 13 8C13 5.79086 11.2091 4 9 4C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12Z"
                            fill="white"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15 12C17.21 12 19 10.21 19 8C19 5.79 17.21 4 15 4C14.53 4 14.09 4.1 13.67 4.24C14.5 5.27 15 6.58 15 8C15 9.42 14.5 10.73 13.67 11.76C14.09 11.9 14.53 12 15 12Z"
                            fill="white"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9 13C6.33 13 1 14.34 1 17V19C1 19.55 1.45 20 2 20H16C16.55 20 17 19.55 17 19V17C17 14.34 11.67 13 9 13Z"
                            fill="white"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_0_1309">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                `,
            })
        ],
        [
            new HtmlElem({
                "elem": "button",
                "attributes": [[]],
                "content": `
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_0_1307)">
                        <path
                            d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM15.22 17.39L12 15.45L8.78 17.39C8.4 17.62 7.93 17.28 8.03 16.85L8.88 13.19L6.05 10.74C5.72 10.45 5.9 9.9 6.34 9.86L10.08 9.54L11.54 6.09C11.71 5.68 12.29 5.68 12.46 6.09L13.92 9.53L17.66 9.85C18.1 9.89 18.28 10.44 17.94 10.73L15.11 13.18L15.96 16.85C16.06 17.28 15.6 17.62 15.22 17.39Z"
                            fill="white"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_0_1307">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                `,
            })
        ],
    ];

    for (let i = 0 ; i < liContent.length ; i++ ) {
        let newLi = append2parent("li", newUl)
        let _cont = liContent[i]
        nestingFromJson(newLi, _cont);
    };


    /* voglio dare un'espansione ai dic.function quando si preme il bottone svg */
    let expandButtons = document.querySelectorAll(".function button svg");
    let expandDivFunction = document.querySelectorAll(".function");
    for (let i = 0; i < expandButtons.length ; i++) {
        expandButtons[i].addEventListener("click", function () {
            expandDivFunction[i].style.cssText = "height: 500px;";
        });
    };
    // expandButtons[0].addEventListener("click", function() {
    //     expandDivFunction[0].style.cssText = "height: 500px; align-items: flex-start;"
    // });
    // expandButtons[1].addEventListener("click", function() {
    //     expandDivFunction[1].style.cssText = "height: 500px;; align-items: flex-start;"
    // });
    // expandButtons[2].addEventListener("click", function() {
    //     expandDivFunction[2].style.cssText = "height: 500px;; align-items: flex-start;"
    // });
    // expandButtons[3].addEventListener("click", function() {
    //     expandDivFunction[3].style.cssText = "height: 500px;; align-items: flex-start;"
    // });
});

// export { crElem};
// export { append2body, append2parent, nestingFromJson, HtmlElem };
// export default append2body ;
// export { HtmlElem };