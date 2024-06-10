
//Instalar
//npm installreadline-sync

const readlineSync = require('readline-sync')
 
//Solicitação

const nome = readlineSync.question('Qual o seu nome? ')

//Exibir

console.log(`Olá, ${nome}!`)