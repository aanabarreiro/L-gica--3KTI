//1.

const n1 = 10
const n2 = 20
const n3 = 10
const cond1 = (n1 === n2) || (n2 === n3) || (n1 === n3)

if (cond1) {
    console.log (`Existem dois ou mais números indênticos`)
} else {
    console.log(`Não há números idênticos.`)
}


//2.
const idade = 17
const condi2 = idade >= 18

if(condi2){
    console.log(`É maior de idade.`)
}else{
    console.log(`É menor de idade.`)
}


//3. 
const num = 397
const condi3 = (num%2 )=== 0
if (condi3){
    console.log(`O número ${num} é par.`)
}else{
    console.log(`O número ${num} é ímpar.`)
}