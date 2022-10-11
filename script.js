function validate() {
    const form = document.getElementById('form').value;
    const username = document.getElementById('name').value;
    //alert(username);
    const number = document.getElementById('phnmb').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cpassword = document.getElementById('cnfmpass').value;


    // REGEX //
    var userCheck = /^[A-Za-z. ]{3,25}$/;
    var passwordCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,18}$/;
    var emaiCheck = /^[a-zA-Z0-9_.]{3,}[@][a-zA-Z]{3,}[.]{1}[A-Za-z.]{2,8}$/;
    var phoneCheck = /^[0-9]{10}$/;

    // if (userCheck.test(username)) {
    //     setSuccesMsg(username);
    // }
    // else {
    //     setErrorMsg(username, "Invalid username");
    //     return false;
    // }

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




//validate functions
// const validate = () => {
//     //values
//     const usernameVal = username.value.trim();
//     const phoneVal = phone.value.trim();
//     const emailVal = email.value.trim();
//     const passwordVal = password.value.trim();
//     const cpasswordVal = cpassword.value.trim();
//     //SUcess Message
//     // const successMsg = () => {
//     //     let frmCon = document.getElementsByClassName('form-control');
//     //     for ();
//     // }
//     //username

