/*
* JS code
*
*/

// Intialization of vars, objects, DOM

var nickInput;
var sizeInput;
var emailInput;
var formLogin;
var errorNick;
var errorEmail;
var errorGamesize;
var errorLogin;
var avatarItems;
var itemImg;
var avatarContainer;



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

    //Correct info
    userData(nickInput, sizeInput, emailInput);
    historyUsers(nickInput);
    return true;
}

function movingImg(event) {
    itemImg = event.target;
    console.log(itemImg.src)
}

function changeImg() {
    avatarContainer.src = itemImg.src;
}

function domLoaded() {
    nickInput = document.getElementById('nickName');
    sizeInput = document.getElementById('gameSize');
    emailInput = document.getElementById('email');
    formLogin = document.getElementById('formLogin');
    errorNick = document.getElementById('errorNick');
    errorEmail = document.getElementById('errorEmail');
    errorGamesize = document.getElementById('errorGamesize');
    errorLogin = document.getElementById('errorLogin');

    // check for any error
    if (sessionStorage.getItem('errorLogin') != null){
        errorLogin.innerText = sessionStorage.getItem('errorLogin');
        sessionStorage.removeItem('errorLogin')
    }
    formLogin.addEventListener('submit', checkForm);

    // Drag & Drop events
    avatarItems = document.getElementsByClassName('avatarImgItem');

    for (let item of avatarItems) {
        item.addEventListener('dragstart', movingImg);
    }
    avatarContainer = document.getElementById('mainAvatar');
    avatarContainer.addEventListener('dragover', e=>{e.preventDefault()});
    avatarContainer.addEventListener('drop', changeImg);
}

document.addEventListener('DOMContentLoaded', domLoaded);


geolocationData();
