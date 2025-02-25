/*
* JS to manage user data
*/

var nickName;
var email;
var gameSize;
var geolocationTxt;


function userData(nickName){

    sessionStorage.setItem('nickName', nickName.value);
    sessionStorage.setItem('email', email.value);
    sessionStorage.setItem('gameSize', gameSize.value);
}

function getUserData(){

    nickName = sessionStorage.getItem('nickName')
}

function checkUserData(){

    if (nickName == null){
        sessionStorage.setItem('errorLogin', 'Please fill the form');
        console.log(nickName)
        return false;
    }
    return true;
}

function geolocationData(){

    if (!navigator.geolocation){
        geolocationTxt = 'Your browser is no compatible with API Geolocation'
    } else {
        
    }
}

function historyUsers(nickName) {

    let historyStorage = localStorage.getItem('history');
    let history;

    if (historyStorage == null) {
        history = [];
    } else {
        history = JSON.parse(historyStorage);
    }

    let userRegist = {
        nickName: nickName.value,
        date: Date.now()
    }

    localStorage.setItem('history', JSON.stringify(history));
}