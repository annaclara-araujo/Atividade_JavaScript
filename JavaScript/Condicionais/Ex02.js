//Verificar se o usuário pode tirar carteira de motorista

var prompt = require('prompt-sync')();
let idade = prompt("Ola, digite sua idade:")


if(idade >= 18)
{
    console.log("Vocé pode tirar a carteira de motorista")
}else if (idade <18)
{
    console.log("Vocé não poderá tirar a carteira")
}else 
{
    console.log("A opção não é valida")
}
