function validate() {
    preventDefault();

    const username = document.getElementById('name');
    const phone = document.getElementById('phnmb');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const cpassword = document.getElementById('cnfmpass');
    //    const form = document.getElementById('form').value;
    const usernameVal = username.value.trim();
    const phoneVal = phone.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    var flag1;
    var flag2;
    var flag3;
    var flag4;

    // REGEX //
    var userCheck = /^[A-Za-z. ]{3,25}$/;
    var passwordCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,18}$/;
    var emailCheck = /^[a-zA-Z0-9_.]{3,}[@][a-zA-Z]{3,}[.]{1}[A-Za-z.]{2,8}$/;
    var phoneCheck = /^[0-9]{10}$/;

    // username //
    if (userCheck.test(usernameVal)) {
        setSuccesMsg(username);
        flag1 = 1;
        //console.log(usernameVal);
    }
    else {
        setErrorMsg(username, "Invalid Username");
    }

    // number //
    if (phoneCheck.test(phoneVal)) {
        setSuccesMsg(phone);
        flag2 = 2;
        //console.log(phoneVal);
    }
    else {
        setErrorMsg(phone, "Invalid Phonenumber");
    }
    // email //
    if (emailCheck.test(emailVal)) {
        setSuccesMsg(email);
        flag3 = 3;
        //console.log(emailVal);
    }
    else {
        setErrorMsg(email, "Invalid Email");
    }
    // password //
    if (passwordCheck.test(passwordVal)) {

        if (passwordVal === cpasswordVal) {
            setSuccesMsg(cpassword);
            setSuccesMsg(password);
            flag4 = 4;
            //console.log(passwordVal);
        }
        else {
            setErrorMsg(cpassword, "Doesn't Match");
            setErrorMsg(password, "Doesn't Match");
        }
    }
    else {
        setErrorMsg(password, "Invalid Password");
    }
    if (flag1 === 1 && flag2 === 2 && flag3 === 3 && flag4 === 4) {
        console.log(usernameVal);
        console.log(phoneVal);
        console.log(emailVal);
        console.log(passwordVal);
    }
}
//function  
function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerHTML = errormsgs;
}
function setSuccesMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
