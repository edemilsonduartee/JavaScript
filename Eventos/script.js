

const input = document.querySelector("#inputTexto");
const select = document.querySelector("select");
const button = document.querySelector("#meuBotao");

select.addEventListener("change", function() {
    const selectedOption = select.value;
    console.log("Troquei de valor");
});


button.addEventListener("click", function() {
    const inputValue = input.value;
    console.log("Cliquei no botão");
}); 