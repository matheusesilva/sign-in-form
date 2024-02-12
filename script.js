const pswdConfirm = document.getElementById("password-confirm");
const pswd = document.getElementById("password");

pswd.addEventListener('input', function (){
    if (pswdConfirm.value!='') {
        validatePassword();
    }
})

pswdConfirm.addEventListener('input',function (){
    validatePassword();
})

function validatePassword () {
    if (pswd.value !== pswdConfirm.value && pswdConfirm.value!='') {
        pswdConfirm.classList.add('input-error');
    } else {
        pswdConfirm.classList.remove('input-error');
    }
}