window.addEventListener("load", function (){
    let div=document.getElementById("primo")

    let textbutton= document.createTextNode("push me")
    let button=document.createElement("button")
    button.appendChild(textbutton)
    div.appendChild(button)


    
    button.addEventListener("click", function (){
        
        let a=Math.floor(Math.random() * 256);
    let b=Math.floor(Math.random() * 256);
    let c=Math.floor(Math.random() * 256);
    //document.body.style.backgroundColor="rgb("+a+","+b+","+c+")"  // 2 alternative
        document.body.style.backgroundColor=`rgb(${a},${b},${c})`


})
    
})  

  
    