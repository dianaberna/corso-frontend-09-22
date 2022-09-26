window.addEventListener('load' ,() => {
    let h2= document.createTextNode("Contact Us");
    let nuovoH2= document.createElement("h2");
    nuovoH2.id="h2";

    nuovoH2.appendChild(h2);

    let miAppendoQui= document.querySelectorAll("body > div:first-child")[0];
    miAppendoQui.appendChild(nuovoH2);


    let underline=document.createTextNode(" ");
    let nuovoUnderline= document.createElement("div");
    nuovoUnderline.className="underline";

    nuovoUnderline.appendChild(underline);

    let miAppendoQui2= document.getElementById("h2");
    miAppendoQui2.appendChild(nuovoUnderline);


    let form=document.createTextNode(" ");
    let nuovoForm= document.createElement("form");
    nuovoForm.method="post";
     
    nuovoForm.appendChild(form);


    let miAppendoQui3= document.getElementsByClassName("padre")[0];
    miAppendoQui3.appendChild(nuovoForm);


    let left= document.createTextNode(" ");
    let nuovoLeft= document.createElement("div");
    nuovoLeft.className="left";

    nuovoLeft.appendChild(left);

    let miAppendoQui4=document.querySelectorAll("form")[0];
    miAppendoQui4.appendChild(nuovoLeft);

    let labEmail=document.createTextNode("Email");
    let nuovolabelEmail= document.createElement("label");
    nuovolabelEmail.htmlFor="Email";

    nuovolabelEmail.appendChild(labEmail);

    let miAppendoQui5=document.getElementsByClassName("left")[0];
    miAppendoQui5.appendChild(nuovolabelEmail);

    let inputEmail=document.createTextNode("Enter Name");
    let nuovoInputEmail=document.createElement("input");
    nuovoInputEmail.type="email";
    nuovoInputEmail.value="email";
    nuovoInputEmail.id="email";
    nuovoInputEmail.className="email";

    nuovoInputEmail.appendChild(inputEmail);

    let miAppendoQui6=document.getElementsByClassName("left")[0];
    miAppendoQui6.appendChild(nuovoInputEmail);

    let labMess=document.createTextNode("Message");
    let nuovolabelMess= document.createElement("label");
    nuovolabelMess.htmlFor="message";

    nuovolabelMess.appendChild(labMess);

    let miAppendoQui7=document.getElementsByClassName("left")[0];
    miAppendoQui7.appendChild(nuovolabelMess);

    let inputMess=document.createTextNode("Enter Message");
    let nuovoInputMess=document.createElement("input");
    nuovoInputMess.type="text";
    nuovoInputMess.value="Enter Message";
    nuovoInputMess.id="message";
    nuovoInputMess.className="text"

    nuovoInputMess.appendChild(inputMess);

    let miAppendoQui8=document.getElementsByClassName("left")[0];
    miAppendoQui8.appendChild(nuovoInputMess);

    let right=document.createTextNode(" ")
    let nuovoRight=document.createElement("div");
    nuovoRight.className="right";

    nuovoRight.appendChild(right);

    let miAppendoQui9=document.querySelectorAll("form")[0];
    miAppendoQui9.appendChild(nuovoRight);

    let labPhone= document.createTextNode("Phone Number");
    let nuovoLabPhone= document.createElement("label");
    nuovoLabPhone.htmlFor="phone";

    nuovoLabPhone.appendChild(labPhone);

    let miAppendoQui10= document.getElementsByClassName("right")[0];
    miAppendoQui10.appendChild(nuovoLabPhone);


    let inputPhone=document.createTextNode("Phone Number");
    let nuovoInputPhone=document.createElement("input");
    nuovoInputPhone.type="tel";
    nuovoInputPhone.id="phone";
    nuovoInputPhone.value="Enter Phone Number";
    nuovoInputPhone.className="phone";

    nuovoInputPhone.appendChild(inputPhone);

    let miAppendoQui11=document.getElementsByClassName("right")[0];
    miAppendoQui11.appendChild(nuovoInputPhone);


    let labTitle= document.createTextNode("Title");
    let nuovoLabTitle= document.createElement("label");
    nuovoLabTitle.htmlFor="text";

    nuovoLabTitle.appendChild(labTitle);

    let miAppendoQui12=document.getElementsByClassName("right")[0];
    miAppendoQui12.appendChild(nuovoLabTitle);


    let inputTitle=document.createTextNode("Enter Title");
    let nuovoInputTitle=document.createElement("input");
    nuovoInputTitle.type="text";
    nuovoInputTitle.id="title";
    nuovoInputTitle.className="title";
    nuovoInputTitle.value="Enter Title";

    nuovoInputTitle.appendChild(inputTitle);

    let miAppendoQui13=document.getElementsByClassName("right")[0];
    miAppendoQui13.appendChild(nuovoInputTitle);

    let divButton=document.createTextNode(" ");
    let nuovoDivButton=document.createElement("div");
    nuovoDivButton.className="button";

    nuovoDivButton.appendChild(divButton);

    let miAppendoQui14=document.getElementsByClassName("padre")[0];
    miAppendoQui14.appendChild(nuovoDivButton);

    let bottone= document.createTextNode("SUBMIT");
    let NuovoBottone= document.createElement("button");

    NuovoBottone.appendChild(bottone);

    let miAppendoQui15=document.getElementsByClassName("button")[0];
    miAppendoQui15.appendChild(NuovoBottone);

    NuovoBottone.addEventListener('click', ()=>{ document.getElementsByClassName("button")[0].remove()});
    
})


/* let contatore=0;

window.addEventListener('load' ,() => { 
    let click= document.getElementById("button");
    click.onclick= Alclick;

    let reset=document.getElementById("reset");
    reset.onclick= ResetClick;


})


function Alclick(){
    if(contatore<10)
    return Display(++contatore);

    else return alert("resetta il bottone")


  }
  
  function ResetClick(){
  contatore=0;
     return Display(contatore);
  }
  
  function Display(contatore){
      document.getElementById("button").innerHTML= contatore;
  }
 */

