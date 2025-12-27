/*

    operadores typeof e delete:

    typeof -> retorna o tipo de dado de uma variavel
    delete -> exclui uma propriedade de um objeto


*/

const user = {
    name: "Maria",
    idade: 26,
}

//console.log(typeof user); // exibindo o tipo de dado do objeto 'user'
delete user.idade; // excluindo a propriedade 'idade' do objeto 'user'
console.log(user);