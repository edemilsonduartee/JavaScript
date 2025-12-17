/*

    document -> HTML 

    getElementById() -> Tras o elemento pelo ID
    getElementsByClassName() -> Tras os elementos pela classe
    getElementsByTagName() -> Tras os elementos pela tag
    getElementsByName() -> Tras os elementos pelo atributo name
    
    querySelector() -> Tras o primeiro elemento que corresponde ao seletor CSS TAG
    querySelectorAll() -> Tras todos os elementos que encontrar 
*/

//exemplos de uso do document
const titulo = document.getElementById("titulo-principal");
console.log(titulo.textContent); // exibindo o texto do título no console
const paragrafos = document.getElementsByClassName("paragrafo");
console.log(paragrafos.length); // exibindo a quantidade de parágrafos encontrados
const primeiroParagrafo = document.querySelector("p");
console.log(primeiroParagrafo.textContent); // exibindo o texto do primeiro parágrafo
const todosParagrafos = document.querySelectorAll("p");
console.log(todosParagrafos.length); // exibindo a quantidade total de parágrafos encontrados
const inputNome = document.getElementsByName("nome")[0];
console.log(inputNome.value); // exibindo o valor do campo de input "nome"

