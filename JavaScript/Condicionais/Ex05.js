//Verificar se um aluno foi aprovado

var prompt = require('prompt-sync')();
let n1 = prompt("Digite sua nota 1:");
let n2 =  prompt("Digite sua nota 2:");
let n3 =  prompt("Digite sua nota 3:");
let n4 =  prompt("Digite sua nota 4:");


if(n1+n2+n3+n4/4 >= 5)
{
    console.log("O aluno foi aprovado!")
}
else 
{
    console.log("O aluno foi reprovado!")
}