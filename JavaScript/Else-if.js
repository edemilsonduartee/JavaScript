/*

    else if -> executa uma outra condição se a primeira condição for falsa  
    if -> executa um bloco de código se uma condição for verdadeira
    else -> executa um bloco de código alternativo se a condição for falsa

*/

const temperature = 39;

if (temperature === 36) {
    console.log("temperatura normal")
} else if(temperature > 37 && temperature <= 40) {
    console.log("Esta com febre")
}  else if (temperature > 40) {
    console.log("temperatura Muita alta")
}
else {
    console.log("Esta com hipotermia")
}



