//criação da função

function area (largura, altura){

const area = largura * altura
console.log(`A área é igual a: ${area}`)

}area(2,5)

function frase (nome){
    console.log(`Olá ${nome}, tudo bem?`)
}frase("Ana")

function semNome(){
    console.log(`Olá pessoal, tudo bem?`)
}
semNome()

//variaveis criadas dentro do parenteses são chamadas parametros
//o valor das variaveis são chamadas de argumentos.


const num1 = 5
const num2 = 10

function soma (numero1, numero2){
    let soma = numero1 + numero2
    console.log(soma)
}
soma(num1,num2)