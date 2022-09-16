window.addEventListener("load", function(){

    console.log("ciao dom" );
document.getElementById("rosa") .style.backgroundColor= "red";



/* let a= document.getElementsByTagName("p");
for(i=0;i<a.length; i++){

  a[i].style.backgroundColor= "orange";
    
  
}
} )

 */


let risultato=document.getElementsByTagName ("p")

let indice=0
while(indice<risultato.length){
risultato[indice].style.backgroundColor= "orange";
indice++
}
})


