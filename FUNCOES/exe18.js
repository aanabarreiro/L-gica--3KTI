//01

// function impressao(mensagem){

//     const readlineSync = require('readline-sync')
//     const nome = readlineSync.question(`Digite seu nome: `)

//     console.log(`Bom dia, ${nome}!`)
// }
// impressao()

//02

// function frase (){

//     const readlineSync = require('readline-sync')

//     const cliente = readlineSync.question(`\n Digite seu nome: `)
//     const sobrenomeCliente = readlineSync.question(`\n Digite seu sobrenome: `)
//     const idadeCliente = readlineSync.question(`\n Digite sua idade: `)

//     console.log(`\n O cliente ${cliente} ${sobrenomeCliente} tem ${idadeCliente} anos. `)
// }
// frase()
// frase()
// frase()

function frase(nome, sobrenome, idade) {
  console.log(`O cliente ${nome} ${sobrenome} tem ${idade} anos.`);
}
frase("Ana", "Barreiro", 15);
frase("Enzo", "Moreira", 15);
frase("Yuri", "Beck", 18);
