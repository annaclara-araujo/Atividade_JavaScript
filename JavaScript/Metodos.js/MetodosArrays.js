// // .length() => tamanho

// let frutas = ["Maça","Morango","Uva","Maracuja","Goiaba","Laranja","Caqui","Kiwu","Banana","Franboesa"];
// console.log(frutas.length); // usa-se para contar quantos itens tem no array

//............................................................................................................

// .reverse => reverter o array

// let nomes = ["Yasmin","Pedro","Kaue","Joao"];
// nomes.reverse();

// console.log(nomes);

//...........................................................................................................

// .push => adicona no FINAL do array

// let nomes = ["Edson","Valdemir","Anna","Samanta"];

// nomes.push("Matheus");

// console.log(nomes);

//..........................................................................................................

// .unshift => adiciona no INICIO do array

// let nomes = ["Edson","Valdemir","Anna","Samanta"];

// nomes.unshift("Sophia");

// console.log(nomes);

//...........................................................................................................

// .pop => remove somente o final e retorna o valor 

// let nomes = ["Edson","Valdemir","Anna","Samanta"];

// nomes.pop();

// console.log(nomes);

//................................................................................................................

// .splice => adiciona ou remove de acordo com a posição

// let nomes = ["Edson","Valdemir","Anna","Samanta"];

// console.log(nomes.splice(2,1))

// console.log(nomes);

//..............................................................................................................

// .includes => se existe no array, se existir ele retornara true

// let nomesAnimais = ["Yasmin","Sol","Max","Kiara"];

// console.log(nomesAnimais.includes("Bob"));

//.............................................................................................................

// // .filter => filtrar
// let valores = [30,65,97,66];
// // quero os valores maiores que 50
// let maiores = valores.filter(num => num > 50);
// console.log(maiores);

//...........................................................................................................

// .map => usado em arrays que permite transformar os elementos array original em 
// novos valores, criando um novo array, sem modificar o original

//lista de nomes e notas

// let alunos = [
//     {nome: "Clara", nota: 6},
//     {nome: "Kaue", nota: 8},
//     {nome: "Anna", nota: 10},
//     {nome: "JUlia", nota: 7},
//     {nome: "Pedro", nota: 9},
//     {nome: "Yasmin", nota: 10},

// ];

// //lista de nomes

// let alunosNomes = alunos.map(aluno => aluno.nome);
// console.log(alunoNomes);

// let alunoNomes2 = alunos.map(function(aluno){
//     return aluno.nome;
// })

//.......................................................................................................

// 2.Criar um array com mensagens personalizadas
// let nomes = ["Caio","Dani","Ryan","Vinicius"];

// //Ola caio
// //Ola Dani

// let mensagem = nomes.map(ItemDoArrayNomes => `Ola,  ${ItemDoArrayNomes}`);

// console.log(mensagem);

//..................................................................................................

// 3.Pegar apenas os primeiros caracteres de nomes

// let nomes = ["Isabelly","Emilly","Machado","Guilherme"];

// let inicial = nomes.map(itemNomes => itemNomes[0]);

// console.log(inicial);

//...................................................................................................

// 4. kaue@gmail.com, pedro@hotmail.com, julia@outlook.com

let emails = [
    "kaue@gmail.com", "pedro@hotmail.com", "julia@outlook.com"
]

let dominios = emails.map (itemEmail => itemEmail.split('@')[1]);
console.log(dominios);
