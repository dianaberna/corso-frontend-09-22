window.addEventListener("load", () => {
  document.body.style.background = "#7FFFD4";

  console.log("ciao");

  document.getElementById("id").style.backgroundColor = "red";
  document.getElementsByClassName("div")[0].style.backgroundColor = "blue";
  document.getElementsByTagName("p")[0].style.backgroundColor = "yellow";

  for (i = 0; i < document.getElementsByTagName("p").length; i++) {
    document.getElementsByTagName("p")[i].style.backgroundColor = "yellow";
  }

  document.querySelector(".div>p").style.backgroundColor = "green";

  
  let titolo = document.createTextNode("Ciao sono il nuovo titolo");
  let nuovoTitolo = document.createElement("h1");
  nuovoTitolo.id = "h1";

  nuovoTitolo.appendChild(titolo);

  let miAppendoQui = document.getElementById("id");
  miAppendoQui.appendChild(nuovoTitolo);

  document.getElementById("h1").style.color = "white";

  let secondoTitolo = document.createTextNode("Death");
  let nSecondoTitolo = document.createElement("button");
  nSecondoTitolo.value = "Death";
  nSecondoTitolo.id = "death";

  nSecondoTitolo.appendChild(secondoTitolo);

  let div = document.getElementById("h1");
  div.appendChild(nSecondoTitolo);

/*  let Death= document.getElementById("death");
 let h1=document.getElementById("h1");
 Death.addEventListene('click',()=> {
    h1.remove();
 }) */
  
document.getElementById("aiuto").style.background="purple";
 document.getElementById("morte").addEventListener("click", ()=> { document.getElementById("aiuto").remove();})

 document.getElementById("h1").style.background="purple";
 document.getElementById("death").addEventListener("click", ()=> { document.getElementById("h1").remove();})
 

  /* document.getElementById("cancellami").style.backgroundColor="green";
    let element= document.getElementById("cancellami");

    element.remove(); */

  /*     document.getElementsByClassName("div")[1].innerHTML="sono il nuovo div modificato";
   */


});
