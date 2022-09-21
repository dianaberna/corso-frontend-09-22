window.addEventListener("load", function () {
  console.log("ciaooo");
  document.getElementById("primo").style.backgroundColor = "red";
  //document.getElementsByTagName("p").style.backgroundColor="black"
  let z = document.getElementsByTagName("p");
  let i = 0;
  while (i < z.length) {
    z[i].style.color = "pink";

    i++;
  }

  i = 0;
  let titoli = document.getElementsByTagName("span");
  while (i < titoli.length) {
    titoli[i].style.fontWeight = "bold";
    i++;
  }


let div=document.getElementById("primo")
let titolo= document.createTextNode("sono il nuovo titolo")

let paragrafo= document.createElement("p")
paragrafo.appendChild(titolo)
div.appendChild(paragrafo)

let div1=document.getElementById("canc")
let titolo1=document.createTextNode("cancella benvenuti")
let element= document.createElement("button")
element.addEventListener("click",function(){
  element.remove("")

})

element.appendChild(titolo1)
div1.appendChild(element)






})
