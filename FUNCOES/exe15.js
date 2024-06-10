readlineSync = require('readline-sync')
const nome = readlineSync.question(`Qual eh o seu nome?: `)
const idade = readlineSync.question(`Digite sua idade: `)

function infos (nome, idade){

const frase = (`Oi ${nome}, você tem ${idade} anos.`)
return frase
}

console.log(infos(nome, idade))