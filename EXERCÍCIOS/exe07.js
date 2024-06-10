const n1 = 10
const n2 = 15
const n3 = 20

const condicao1 = (n1 === n2)&&(n1 > n3)
console.log(`O primeiro número é identico ao segundo e o primeiro é maior que o terceiro?: ${condicao1}`)

const condicao2 = (n1 !== n2) || (n1 <= n3)
console.log(`O primeiro numero é diferente do segundo ou o primeiro é menor igual ao terceiro?: ${condicao2}`)

const condicao3 = (n3 > n2)&& (n3 < n1)
console.log(`O terceiro numero é maior que o segundo e o terceiro é menor que o primeiro numero?: ${condicao3}`)