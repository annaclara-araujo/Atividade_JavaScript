//Crie um sistema que permita cadastrar nomes. Antes de adicionar,
//verifique se o nome já está na lista (ignore maiúsculas/minúsculas). Se
//não estiver, adicione o usuário.

var prompt = require('prompt-sync')();
let lista = ['Anna', 'Kaue', 'Pedro'];

let nome = prompt("Digite seu nome: ").toLowerCase();


if(lista == nome)
{
    console.log("Nome não pode ser cadastrado!");
}
else 
{
    lista.push(nome);
    console.log("Nome cadastrado com sucesso");
}

console.log(lista);