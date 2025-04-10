//Solicitar idade até uma válida (>= 0) (Use o do...While)


var prompt = require('prompt-sync')();
idade = 0;

do {
    idade = Number(prompt("Digite sua idade:"))
} while (idade <= 0);

console.log("Idade valida!")