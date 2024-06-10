//npm installreadline-sync

const readlineSync = require('readline-sync')
let resposta
let vaidarNamoro = "sim"
 
while (resposta != vaidarNamoro){
   
  resposta = readlineSync.question(`Oi amor, to com saudades. Volta pra mim? (sim / nao): `)
 
}
 console.log(`Resposta certa! Eu te amo <3`)