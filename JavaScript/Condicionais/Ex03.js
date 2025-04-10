//c. Verificar se um número é par ou ímpar

var prompt = require('prompt-sync')();
let num = prompt("Digite uma numero:")

if(num % 0)
{
    console.log("O numero é par!")
}else 
{
    console.log("O numero é impar!")
}