//Menu simples até o usuário sair(Use o do...While)

var prompt = require('prompt-sync')();

let menu 

do {
    console.log("BEM VINDO AO MENU")
    console.log("Escolha uma opção:")
    console.log("Opção 1: Login")
    console.log("Opção 2: Listar Livros")
    console.log("Opção 3: Sair")

    Number(prompt("Caso queira sair, digite 0"));
    
} while (menu == 0)
{
    console.log("Você escolheu sair! Finalizando...")
};

