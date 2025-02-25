/*
* JS code
*
*/

// Intialization of vars, objects, DOM

const nickInput = document.getElementById('nickName');
const sizeInput = document.getElementById('gameSize');
const formLogin = document.getElementById('formLogin');
const errorNick = document.getElementById('errorNick');
const errorEmail = document.getElementById('errorEmail');
const errorGamesize = document.getElementById('errorGamesize');
const errorLogin = document.getElementById('errorLogin')


if (sessionStorage.getItem('errorLogin') != null){
    errorLogin.innerText = sessionStorage.getItem('errorLogin');
    sessionStorage.removeItem('errorLogin')
}

function checkForm(event){
    if (nickInput.value.match(/(?<!\S)[0-9]/)){

        nickInput.focus();
        event.preventDefault();
        errorNick.innerText = "Nicknames can't start with a number";
        return false;
    } else if (sizeInput.value == '0'){

        sizeInput.focus();
        event.preventDefault();
        errorGamesize.innerText = 'Choose a size to get started';
        return false;
    }

    if (sessionStorage.getItem('errorLogin')){
        errorLogin.innerText()
    }
    //Correct info
    userData(nickInput);

    return true;
}



formLogin.addEventListener('submit', checkForm);
