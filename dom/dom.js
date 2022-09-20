
window.addEventListener('load', ()=>{

    console.log("hello");
    var prova = document.getElementById("primodiv");
    document.body.style.backgroundColor="white";

    prova.style.backgroundColor="red";

    document.getElementsByClassName("primodiv")[0].style.backgroundColor="blue";
    document.getElementsByTagName("p")[0].style.backgroundColor="grey";
    var a = document.querySelectorAll('p');
    a.forEach(element => element.style.backgroundColor = "gold");

    var element = document.getElementById('buttonn');


    element.addEventListener("click",function() {
    document.getElementById("demo").innerHTML = "Hello World";
    
    });

    var textButtone = document.createTextNode("Cliccami!");
    var creaButtone = document.createElement("button");
    
    creaButtone.id="nuovoButtone";
    
    creaButtone.value="provaaa!";

    var demo1 = document.getElementById("demo1");

    creaButtone.appendChild(textButtone);

    demo1.appendChild(creaButtone);
    
    
    

    

});






