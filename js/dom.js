window.addEventListener("load", function () {
    // selezionare elementi del DOM
    let primotitolo = document.getElementById("primotitolo");
    primotitolo.style.backgroundColor = "yellow";

    let ogniParagrago = document.getElementsByTagName("p");
    for (let i = 0; i < ogniParagrago.length; i++) {
        ogniParagrago[i].style.backgroundColor = "gray";
    }

    let paragragiRossi = document.getElementsByClassName("red");
    for (let i = 0; i < paragragiRossi.length; i++) {
        paragragiRossi[i].style.backgroundColor = "red";
    }

    const parentElement = document.querySelector("p");
    parentElement.style.backgroundColor = "pink";

    let paragragoDiverso = document.querySelectorAll("div > p:nth-child(2)");
    for (let i = 0; i < paragragoDiverso.length; i++) {
        paragragoDiverso[i].style.color = "white";
    }
    let elenco = document.querySelectorAll("div li:last-child");
    elenco.forEach((e) => (e.style.color = "green"));

    // aggiungere nuovi elementi al DOM
    let divSpeciale = document.getElementById("divSpeciale");
    let testoParagrago = document.createTextNode("sono un nuovo paragrafo");
    let nuovoParagrafo = document.createElement("p");
    nuovoParagrafo.appendChild(testoParagrago);
    divSpeciale.appendChild(nuovoParagrafo);

    let testoTitolo = document.createTextNode("sono un nuovo titolo");
    let nuovoTitolo = document.createElement("h1");
    nuovoTitolo.appendChild(testoTitolo);
    divSpeciale.insertAdjacentElement("afterbegin", nuovoTitolo);

    // eliminare elementi dal DOM
    let paragrafoDaEliminare = document.getElementById("par");
    paragrafoDaEliminare.remove();

    let elementiDaEliminare = document.querySelectorAll("div > p:nth-child(3)");
    elementiDaEliminare.forEach((elemento) => elemento.remove());

    // aggiornare contenuto elementi del DOM
    let titoloDaAggiornare = document.getElementsByTagName("h1");
    titoloDaAggiornare[0].innerHTML = "Ciao! Sono un nuovo titolo";

    // eventListener di un bottone
    let btn = document.getElementById("bottone");
    btn.addEventListener("click", () => {
        console.log("sono stato cliccato");
        let nuovoTesto = document.createTextNode("sono un nuovo paragrafo");
        let nuovoElemento = document.createElement("p");
        nuovoElemento.appendChild(nuovoTesto);
        btn.insertAdjacentElement("afterend", nuovoElemento);

        // aggiorno gli attributi del bottone
        btn.setAttribute("name", "bottoneCiao");
        btn.setAttribute("disabled", "");
    });
});
