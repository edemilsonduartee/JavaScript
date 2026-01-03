/*
    switch case

    switch (expressao) {
        case valor1:
            // codigo a ser executado se a expressao for igual ao valor1
            break;
        case valor2:
            // codigo a ser executado se a expressao for igual ao valor2
            break;
        default:
            // codigo a ser executado se nenhuma das condicoes anteriores for verdadeira
            break;
    }

*/

const diadasemana = 3

switch (diadasemana) {
    case 1:
        console.log("Segunda-feira")
        break;
    case 2:
        console.log("Terca-feira")
        break;
    case 3:
        console.log("Quarta-feira")
        break;
    case 4:
        console.log("Quinta-feira")
        break;
    case 5:
        console.log("Sexta-feira")
        break;
    case 6:
        console.log("Sabado")
        break;
    case 7: 
        console.log("Domingo")    
        break;
    default:
        console.log("Dia invalido")
        break;

}