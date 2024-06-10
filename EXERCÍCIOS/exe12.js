//01.

//npm installreadline-sync

const readlineSync = require("readline-sync")

// const nome = readlineSync.question('Qual o seu nome? ')
// const cor = readlineSync.question('Qual sua cor favorita?')

// const frase = (`A cor favorita de ` + nome + ` é ` + cor + `.`)

// console.log(`A cor favorita de ${nome} é ${cor}.`)
// console.log(frase)

//02.

const cachorros= ["Golden", "LuludaPomerania", "Poodle", "Labrador" , "Bulldog"]

const preferencia = readlineSync.question('Insira um numero de 0 a 4: ')

console.log(cachorros[preferencia])
