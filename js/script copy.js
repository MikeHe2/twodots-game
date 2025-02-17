//Capture nickname value

const nickInput = document.getElementById('nickname');
console.log(nickInput.nodeType);
nickInput.value = 'Michael'
console.log(nickInput.value)

//Capture size value

const sizeInput = document.getElementById('gamesize');
console.log(sizeInput.value);
console.log(sizeInput.options[sizeInput.selectedIndex].text)

function test(){
    console.log("Hola putito");
}

