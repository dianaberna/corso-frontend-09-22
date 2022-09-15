function ControlloEmail(email) {
  if (
    email.includes("@") &&
    email.includes(".") &&
    email.indexOf("@") != 0 &&
    email.indexOf(".") != 0
  ) {
    let parte = email.split("@");
   // console.log(parte);

    if (parte[0].includes(".") && parte[1].includes(".")) {
      if (parte[1].indexOf("@") <= parte[1].indexOf(".")) {
        return true;
      } else {
        return false; //console.log("primo else");
      }
    } else if (parte[1].includes(".") && !parte[0].includes(".")) {
      return true;
    } else {
      return false; //console.log("secondo else")
    }
  }
}

let email = prompt(" inserisci email");
console.log(ControlloEmail(email));
