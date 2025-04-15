let agora = new Date();
let horaBrasilia = agora.toLocaleString("pt-BR", {timeZone:"America/Sao_Paulo"});
console.log(horaBrasilia);

//Pegar somente o ano
console.log(agora.getFullYear());
// pegar o dia
console.log(agora.getDay());
//Pegar a data
console.log(agora.getDate());
//pegar milisegundos
console.log(agora.getMilliseconds());
//pegar meses
console.log(agora.getMonth());





