//Crie um array de objetos com produtos e preços. Exiba no console o
//nome e o preço com R$ formatado.

var prompt = require('prompt-sync')();

let objetos = [
    {produto: "Maça", preco: 10.00},
    {produto: "Banana", preco: 15.00},
    {produto: "Manga", preco: 7.00},
    {produto: "Uva", preco: 18.00}

];

let valores = produtos.map(produtos => produtos.produtos+ " R$" + produtos.preco);
console.log(valores);
