/*  

    Operadores logicos:

    && -> AND -> E
    || -> OR -> OU
    ! -> NOT -> NAO


    && -> E, retorna true se ambos os operandos forem true
    || -> OU, retorna true se pelo menos um dos operandos for true
    ! -> NAO, inverte o valor booleano

    exemplos de uso de operadores logicos

    

*/

const digiteEmail = true
const digiteSenha = true
const digiteTelefone = false

if (digiteEmail && digiteSenha && digiteTelefone) {
    console.log("Cadastro realizado com sucesso!")
}   else {
        console.log("Por favor, preencha todos os dados corretos.")
    }

