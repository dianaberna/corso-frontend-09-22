/**
 * I moduli Javascript ti consentono di suddividere il codice in file separati.
 * ciò semplifica la manutenzione della base di codice.
 * I moduli Javascript si basano sulle istruzioni di importazione ed esportazione.
 */

/* import { Buonsalve, Bonvoyage } from '.'

console.log(Buonsalve())
console.log(Bonvoyage()) */


import Buonsalve from './funzioni.js'

console.log(Buonsalve())

let a = document.querySelectorAll(".div1, .div2, .div3")
/* document.body.appendChild(a) */

function creaDiv(){
    let div1 = document.createElement("div");
    div1.className = "div1"
    let testo1 = document.createTextNode("div1")
    div1.appendChild(testo1)
    let div2 = document.createElement("div");
    let testo2 = document.createTextNode("div2")
    div2.appendChild(testo2)
    div2.className = "div2"
    let div3 = document.createElement("div");
    let testo3 = document.createTextNode("div3")
    div3.appendChild(testo3)
    div3.className = "div3"
    div3.appendChild(testo3)
    div2.appendChild(div3)
    div1.appendChild(div2)
    document.body.appendChild(div1)
}

creaDiv()
creaDiv()
creaDiv()
creaDiv()


