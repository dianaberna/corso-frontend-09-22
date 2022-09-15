function ControlloEmail(email) {
   if (email.includes("@") && email.includes(".") && email.indexOf("@") != 0 && email.indexOf(".") !=0)  {
     let parte = email.split("@");
     console.log(parte);
 
     if (
       parte[0].indexOf("@") >= parte[0].indexOf(".") ||
       parte[1].indexOf("@") <= parte[1].indexOf(".")
     ) {
       return true;
     } else {
       return false;
     }
   } else {
     return false;
   }
 }
 
 let email = prompt(" inserisci email");
 console.log(ControlloEmail(email));