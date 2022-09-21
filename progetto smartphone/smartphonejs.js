window.addEventListener("load", function () {
    let div=document.getElementById("primo")
    let titolo= document.createTextNode("CARDIO")
    
    let paragrafo= document.createElement("p")
    paragrafo.appendChild(titolo)
    div.appendChild(paragrafo)
    //inserire svg
    let imm=document.createElement("div")
    imm.innerHTML=' <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 5.00047H3.82998L6.70998 2.12047C7.09998 1.73047 7.09998 1.10047 6.70998 0.710469C6.31998 0.320469 5.68998 0.320469 5.29998 0.710469L0.70998 5.30047C0.31998 5.69047 0.31998 6.32047 0.70998 6.71047L5.29998 11.3005C5.68998 11.6905 6.31998 11.6905 6.70998 11.3005C7.09998 10.9105 7.09998 10.2805 6.70998 9.89047L3.82998 7.00047H17C17.55 7.00047 18 6.55047 18 6.00047C18 5.45047 17.55 5.00047 17 5.00047Z" fill="white" /> </svg>'
    
     div.appendChild(imm) 
    
     //inserire h1
    let testoh1=document.createTextNode("what to expect")
    let h1=document.createElement("h1")
    h1.appendChild(testoh1)
    div.appendChild(h1)

    let testop1=document.createTextNode("This series of training is designed for those who are professional and experienced. Let’s roll!")
    let h2=document.createElement("h1")
    h2.appendChild(testop1)
    div.appendChild(h2)
   
    //inserire png

    let imgtrainer1=document.createElement("img")
    imgtrainer1.setAttribute("src","immagini/Ellipse 174.png")
    div.appendChild(imgtrainer1)
    let nometrainer1=document.createTextNode("jhon wick")
    let label1=document.createElement("label")
    label1.appendChild(nometrainer1)
    div.appendChild(label1)

    let imgtrainer2=document.createElement("img")
    imgtrainer2.setAttribute("src","immagini/Ellipse 174 (1).png")
    div.appendChild(imgtrainer2)
    let nometrainer2=document.createTextNode("tim cass")
    let label2=document.createElement("label2")
    label2.appendChild(nometrainer2)
    div.appendChild(label2)

    let imgtrainer3=document.createElement("img")
    imgtrainer3.setAttribute("src","immagini/Ellipse 174 (2).png")
    div.appendChild(imgtrainer3)
    let trainer3=document.createTextNode("zed non")
    let label3=document.createElement("label3")
    label3.appendChild(trainer3)
    div.appendChild(label3)


    let testoh4=document.createTextNode("all classes")
    let h4=document.createElement("h4")
    h4.appendChild(testoh4)
    div.appendChild(h4)

    //creare button radio

    //let input1=document.createTextNode("")
    let prova1=document.createElement("input")
    prova1.setAttribute("type","radio")
    prova1.setAttribute("name","min")
    //prova1.appendChild(input1)
    div.appendChild(prova1)
    let inputtext=document.createTextNode("10 min")
    let labelradio1=document.createElement("label")
    labelradio1.appendChild(inputtext)
    div.appendChild(labelradio1)


    let input2=document.createTextNode("")
    let prova2=document.createElement("input")
    prova2.setAttribute("type","radio")
    prova2.setAttribute("name","min")
    prova2.appendChild(input2)
    div.appendChild(prova2)
    let inputtext2=document.createTextNode("25 min")
    let labelradio2=document.createElement("label")
    labelradio2.appendChild(inputtext2)
    div.appendChild(labelradio2)

    let input3=document.createTextNode("")
    let prova3=document.createElement("input")
    prova3.setAttribute("type","radio")
    prova3.setAttribute("name","min")
    prova3.appendChild(input3)
    div.appendChild(prova3)
    let inputtext3=document.createTextNode("40 min")
    let labelradio3=document.createElement("label")
    labelradio3.appendChild(inputtext3)
    div.appendChild(labelradio3)

    let input4=document.createTextNode("")
    let prova4=document.createElement("input")
    prova4.setAttribute("type","radio")
    prova4.setAttribute("name","min")
    prova4.appendChild(input4)
    div.appendChild(prova4)
    let inputtext4=document.createTextNode("60 min")
    let labelradio4=document.createElement("label")
    labelradio4.appendChild(inputtext4)
    div.appendChild(labelradio4)

    
//menu a tendina

let labelmenu=document.createTextNode("short by")
let label=document.createElement("label")
label.appendChild(labelmenu)
div.appendChild(label)

let select1=document.createElement("select")
div.appendChild(select1)

let opzione1=document.createTextNode("higest rating")
let option=document.createElement("option")
option.appendChild(opzione1)
select1.appendChild(option)
let textoption=document.createTextNode("higest view")
let labeloption1=document.createElement("option")
labeloption1.appendChild(textoption)
select1.appendChild(labeloption1)
label.setAttribute("for","choose")
select1.setAttribute("id","choose")



})
  
    
