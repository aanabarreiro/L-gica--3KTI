

function mensagem(){
    console.log(`Olá mundo!`)
}
mensagem()

//Usando o readline, os numeros devem ser inseridos pelo usuárioconst 

readlineSync = require('readline-sync')

let num1 = readlineSync.question(`Digite um numero: `)
let num2 = readlineSync.question(`Digite outro numero: `)

num1 = Number(num1)
num2 = Number(num2)

//somo é escopo local e apenas existe dentro da variável
//teoria pai e filho

function soma (num1, num2){
    let soma = num1 + num2
    console.log(soma)
}

soma(num1,num2)

const numero12 = 4 //escopo global, funciona em todo e qualquer local do codigo
