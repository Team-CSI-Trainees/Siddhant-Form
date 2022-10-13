const form = document.getElementById('form');
const username = document.getElementById('name');
const phone = document.getElementById('phnmb');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cnfmpass');
const male = document.getElementById('male');
const female = document.getElementById('female');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})
// RESET //
function resetPage() {
    window.location.reload();
}
// function validate(){}
const validate = () => {
    const usernameVal = username.value;
    const phoneVal = phone.value;
    const emailVal = email.value;
    const passwordVal = password.value;
    const cpasswordVal = cpassword.value;
    let flag2;
    let flag3;
    let flag4;
    let flag1;
    let flag5;
    let flag6;

    // REGEX //
    let userCheck = /^[A-Za-z. ]{3,25}$/;
    let passwordCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,18}$/;
    let emailCheck = /^[a-zA-Z0-9_.]{3,}[@][a-zA-Z]{3,}[.]{1}[A-Za-z.]{2,8}$/;
    let phoneCheck = /^[0-9]{10}$/;

    // username //
    if (userCheck.test(usernameVal)) {
        setSuccesMsg(username);
        flag1 = 1;
    }
    else {
        setErrorMsg(username, "Invalid Username");
    }

    // number //
    if (phoneCheck.test(phoneVal)) {
        setSuccesMsg(phone);
        flag2 = 2;
    }
    else {
        setErrorMsg(phone, "Invalid Phonenumber");
    }
    // email //
    if (emailCheck.test(emailVal)) {
        setSuccesMsg(email);
        flag3 = 3;

    }
    else {
        setErrorMsg(email, "Invalid Email");
    }
    // gender //
    if (male.checked == true) {
        flag5 = 5;
    }
    else flag6 = 6;
    // password //
    if (passwordCheck.test(passwordVal)) {

        if (passwordVal === cpasswordVal) {
            setSuccesMsg(cpassword);
            setSuccesMsg(password);
            flag4 = 4;
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
        console.log(usernameVal.trim());
        console.log(phoneVal);
        console.log(emailVal);
        console.log(passwordVal);
        if (flag5 == 5) {
            console.log('male');
        }
        else if (flag6 == 6) {
            console.log('female');
        }
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
