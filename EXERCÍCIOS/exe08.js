//1
const n1 = 5
const n2 = 10
const n3 = 15

const condicao1 = (n1 === n2) || (n1 === n3) || (n2 === n3)
console.log(`Dos três números atribuídos, dois deles são idênticos: ${condicao1}`)

//2
const condicao2  = (n1 > n2) && (n1 > n3)
console.log(`O número ${n1} é o maior dos 3 números: ${condicao2}`)

//3
const idade = 18
const maioridade = 18
const condicao3 = (idade >= maioridade)
console.log(`A idade fornecida é maior que 18: ${condicao3}`)

//4
const num4 = 29
const condicao4 = (num4 % 2) === 0
console.log(`O número ${num4} é par: ${condicao4}`)