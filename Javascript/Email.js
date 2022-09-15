function ControlloEmail(email){
    if(email.includes("@") && email.includes(".") && (email.indexOf('@') != 0) )
    {
       //email.slice(0,3)

         if(email.indexOf('@') <= email.indexOf('.')){

            return true;
            }
    
            else {
                return false;
            }
                
    }

 else {
    return false;
 }
    
    
}

let email=prompt(" inserisci email");
 console.log(ControlloEmail(email)); 
