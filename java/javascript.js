window.addEventListener("load", function(){
    console.log("Evvai");
    document.getElementById("primo").style.backgroundColor="blue";
    //document.getElementsByTagName("p").style.backgroundColor="green"
    let z=document.getElementsByTagName("p")
    let i=0
    while(i<z.length){
        document.getElementsByTagName("p")[i].style.color="orange"
        
        i++
    }
})