function piramide(numPisos){
    for (let i = 0; i < numPisos; i++){
        let pisos = '';
        for (let j = 0; j < i; j++){
            pisos += '*';
        }
        console.log(pisos);
    }
}

piramide(5);