window.addEventListener("load",function(){
    console.log("ciaooo");
    document.body.style.backgroundColor="black";
    document.getElementById("titolo").style.backgroundColor="red";
    document.getElementsByClassName("paragrafo")[0].style.backgroundColor="green";
    let i=0
    while(i<document.getElementsByTagName("p").length){
        document.getElementsByTagName("p")[i].style.backgroundColor="purple";
        document.getElementsByTagName("p")[i].style.color="white";
        i++
    }
    let div=document.getElementById("titolo");
    let titolo=document.createTextNode("sono il nuovo titolo");
    let paragrafo=document.createElement("p");
    paragrafo.appendChild(titolo);
    div.appendChild(paragrafo);

    let creabottone= document.createElement("button")
    let textbottone= document.createTextNode("Schiacciami")
    creabottone.id="nuovobottone";
    creabottone.value="Schiacciami";
    creabottone.appendChild(textbottone);
    let button=document.getElementById("titolo")
    button.appendChild(creabottone)
}) 