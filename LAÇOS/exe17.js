
// //01
// // let i = 0  

// // const readlineSync = require('readline-sync')
// // const n = Number(readlineSync.question(`Digite o numero do qual deseja receber a tabuada: `))



// // while (i <= 10){
// //     console.log(`\n${i} x ${n} = ${n*i}`)
// //     i++
// // }

// //02

// let array = [129,78,59,20202020]
// for(let i = 0; i < 1; i++){

//     if(array[0]> array[1] && array[0]> array[2]){
//         console.log(`O número ${array[0]} é o maior.`)
//     }
//     else if(array[1]> array[0] && array[1]> array[2]){
//         console.log(`O número ${array[1]} é o maior.`)
//     }
//     else if(array[2]> array[1] && array[2]> array[0]){
//         console.log(`O número ${array[2]} é o maior número.`)
//     }else{
//         console.log(`O número ${array[i]} é o maior`)

//     }
// }


//03

let mensagem = ""
let palavras =[`Oi`,`amor,`,`tudo`,`bem?`,`Saudades.`, `Volta pra mim.`]

for (let palavra of palavras){
   
    mensagem += palavra + " "
}    console.log(mensagem)
