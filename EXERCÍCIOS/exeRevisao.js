//EXERCÍCIO 01

let array 

console.log('a. ', array) //imprimindo a letra "A" e o valor da array no console, que neste caso é undefined

array = null
console.log('b. ', array)//imprimindo a letra "B" e o valor da array no console, que neste caso é null 


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)//imprimindo a letra "c" é o número de índices da array no console, que neste caso é 11


let i = 0
console.log('d. ', array[i])//imprimindo a letra "d" e o que está armazenado no índice 0, neste caso, 3


array[i+1] = 19
console.log('e. ', array)//imprimindo a letra "e" e o que está armazenado no índice , alterando o valor do índice 1, nesse caso, [3, 19,  5,  6,  7, 8,  9, 10, 11, 12,13]

const valor = array[i+6]
console.log('f. ', valor)//imprimindo a letra "f" e o que está armazenado no índice  0 == 3 + 6, que neste caso, resultará em 9


//EXERCÍCIO 02

// const readlineSync = require('readline-sync');

// const frase = readlineSync.question("Digite uma frase: ");

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);

//Qual será o valor impresso no console se a entrada do usuário for: "Subi num onibus em Marrocos"?
//Vai tornar a frase em caixa alta, substituirá os "A" por "I" e dará a quantidade de caracteres existentes na frase.


//EXERCÍCIO DE CONSTRUÇÃO DE CÓDIGO

// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
        // O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!


    const readlineSync = require('readline-sync')
    const email = readlineSync.question(`Qual o seu email?`)
    const nome  = readlineSync.question(`Qual o seu nome?`)

    console.log(`O email ${email} foi cadastrado com sucesso! Seja bem- vindo (a) ${nome}.`)

    
    
    
    
//2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
    // a) Imprima no console o array completo
    
    // b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
    // c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista

const comida = ['pizza', 'ovo', 'lasanha', 'carbonara', 'churrasco']

console.log(comida)

console.log(`Essas são minhas comidas favoritas: ${comida[0]} \n${comida[1]} \n${comida[2]} \n${comida[3]} \n${comida[4]}`)

const readlineSync = require('readline-sync')

const cmFav = readlineSync.question(`Qual a sua comida favorita?`)

comida.splice(1,1,cmFav)
console.log(`Sua comida favorita é: ${comida}.`)

//3. Faça um programa, seguindo os passos:
    
// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

// c) Imprima o array no console

// d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

// e) Remova da lista o item de índice que o usuário escolheu.

// f) Imprima o array no console


const listaDeTarefas = []

const tarefa1 = readlineSync.question("Digite a primeira tarefa: ")
const tarefa2 = readlineSync.question("Digite a segunda tarefa: ")
const tarefa3 = readlineSync.question("Digite a terceira tarefa: ")

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)


console.log(listaDeTarefas)

const tarefaConcluida = readlineSync.question("Digite o indice da tarefa concluida: ")

listaDeTarefas.splice(tarefaConcluida, 1)

console.log(listaDeTarefas)

//DESAFIOS


//Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços

const frase = readlineSync.question(`Digite uma frase: `)

const fraseArrays = frase.split( `Transformação em array: `)

console.log(`Seu array é [${frase.split(" ")}]`)


// Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
frutas.indexOf(2)


console.log(`O seu array que possui a palavra abacaxi, de indice igual a ${frutas.length}, tem valor igual a ${frutas.length}.`)


