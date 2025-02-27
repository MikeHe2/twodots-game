/*
* JS to manage user data
*/

var nickName;
var email;
var gameSize;
var geolocationTxt;


function userData(nickName, gameSize, email){

    sessionStorage.setItem('nickName', nickName.value);
    sessionStorage.setItem('email', email.value);
    sessionStorage.setItem('gameSize', gameSize.value);
    sessionStorage.setItem('geolocationTxt', geolocationTxt)
}

function getUserData(){

    nickName = sessionStorage.getItem('nickName');
    email = sessionStorage.getItem('email');
    gameSize = sessionStorage.getItem('gameSize');
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
        navigator.geolocation.getCurrentPosition(
            (position) => {geolocationTxt = 'Latitude: ' + position.coords.latitude + ', Longitude: ' + position.coords.longitude},

            () => {geolocationTxt = 'There was an error with the geolocation'}
        )
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
    history.push(userRegist);
    localStorage.setItem('history', JSON.stringify(history));
}