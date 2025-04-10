//Verificar se um número é positivo, negativo ou zero.
var prompt = require('prompt-sync')();
let num = prompt("Digite um numero:")

if(num > 0)
{
    console.log("O numero é negativo!")
}else if (num < 0)
{
    console.log("O numero é positivo!")
}else
{
    console.log("O numero é igual a zero!")
}