window.addEventListener("load",function(){
console.log("prova");

async function citazioni(){
   let citazione = await fetch ("https://en.wikiquote.org/api/rest_v1/page/wiki/Marcus_Aurelius");

    let risultatoCitazione = await citazione.json();

    console.log(risultatoCitazione);

}

citazioni();


} //fine function principale
) //fine window addEventListener