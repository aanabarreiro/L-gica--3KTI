//IDENTICO (===)
// "1" === "2" - FALSO, SÃO DIFERENTES
// 2===2 - VERDADEIRO, SÃO IDENTICOS
// 2 ==="2"- FALSO, SÃO DIFERENTES

const condicao = 2 === 2
console.log (`A condição é ${condicao}`)



//o valor sai da comparação pode ser guardado numa variavel
//nesse caso, condição === false


//IGUAL (==)

//"1" ==  "2" - false, são diferentes
// "2" =="2" - true, são identicos
// 2 =="2" - são iguais


const condicao2 = 1 == 2
console.log (`a condiçao é ${condicao2} `)

//o valor que sai da comparação pode ser guardado numa variavel
//nesse caso, condição === false



// DIFERENTE (!==)

//"1" !==  "2" - TRUE, são diferentes
// "2" !=="2" - FALSE, são identicos
// 2 =="2" - TRUE, são iguais

const condicao3 = 1 !== 2
console.log(`A condição é ${condicao3}`)


// < e >
// 1 > 2 - FALSE
// 2 > 2 - FALSE
// 3 > 2 - TRUE

const condicao4 = 2 >2
console.log(`A condição é ${condicao4}`)


// maior igual
// 1 >= 2 false
// 2>=2 true
// 3 >= 2 true

const condicao5 = 2>= 2
console.log (`A condição é ${condicao5}`)

// menor igual
// 1 <= 2 true
// 2<=2 true
// 3 <= 2 false

const condicao6 = 2<= 2
console.log (`A condição é ${condicao6}`)

// menor 
// 1 < 2 true
// 2<2 false
// 3 < 2 false

const condicao7 = 2< 2
console.log (`A condição é ${condicao7}`)

//CONDICAO
const condicional1 = (a > b)&&(a>c)//FALSE
const condicional2 = (b>a)&&(b>c)//FALSE
const condicional3 = (c>a)&& (c>b)// TRUE