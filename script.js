const form = document.getElementById('form');
const username = document.getElementById('name');
const phone = document.getElementById('phnmb');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cnfmpass');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})

const validate = () => {
    //    const form = document.getElementById('form').value;
    const usernameVal = username.value.trim();
    const phoneVal = phone.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();


    // REGEX //
    var userCheck = /^[A-Za-z. ]{3,25}$/;
    var passwordCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,18}$/;
    var emailCheck = /^[a-zA-Z0-9_.]{3,}[@][a-zA-Z]{3,}[.]{1}[A-Za-z.]{2,8}$/;
    var phoneCheck = /^[0-9]{10}$/;

    // username //
    if (userCheck.test(usernameVal)) {
        setSuccesMsg(username);
    }
    else {
        setErrorMsg(username, "Invalid Username");
    }

    // number //
    if (phoneCheck.test(phoneVal)) {
        setSuccesMsg(phone);
    }
    else {
        setErrorMsg(phone, "Invalid Phonenumber");
    }
    // email //
    if (emailCheck.test(emailVal)) {
        setSuccesMsg(email);
    }
    else {
        setErrorMsg(email, "Invalid Email");
    }
    // password //
    if (passwordCheck.test(passwordVal)) {

        if (passwordVal === cpasswordVal) {
            setSuccesMsg(cpassword);
            setSuccesMsg(password);
        }
        else {
            setErrorMsg(cpassword, "Doesn't Match");
            setErrorMsg(password, "Doesn't Match");
        }
    }
    else {
        setErrorMsg(password, "Invalid Password");
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
