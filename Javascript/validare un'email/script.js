console.log("validare un'e-mail");
function validareEmail(email) {
    if (
        email.indexOf("@") < 1 ||
        email.indexOf(".") < 0 ||
        email.indexOf("@") > email.lastIndexOf(".")
    )
        return false;
    return true;
}

function validareEmail2(email) {
    return /.+@.+\..+/.test(email);
}

console.log(validareEmail("@gmail.com"));
console.log(validareEmail("hello.gmail@com"));
console.log(validareEmail("gmail"));
console.log(validareEmail("hello@gmail"));
console.log(validareEmail("hello@edabit.com"));