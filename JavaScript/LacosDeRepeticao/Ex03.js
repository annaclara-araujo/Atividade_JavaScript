//Verificar senha com tentativa até acertar(Use o While)

var prompt = require('prompt-sync')();

let senha = 1234
let resposta = prompt("Digite a senha novamente:")


while (resposta != senha)
{
    resposta = console.log("senha invalida!")
    return resposta
}

console.log("Senha valida")