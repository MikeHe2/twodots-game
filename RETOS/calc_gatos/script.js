var edadHumana = 0;

console.log("GATO       HUMANO");
console.log("-----------------");
for (let edadGato = 1; edadGato < 22; edadGato++){
    if (edadGato==1){
        edadHumana = 15
    } else if (edadGato==2){
        edadHumana = 24
    } else {
        edadHumana = edadHumana + 4
    }
    console.log(edadGato + "             " + edadHumana);
}
