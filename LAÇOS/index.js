//while

let i = 10

 while(i <= 1){
    
    console.log(`${i}.`)
    i ++
}



let estomago = 0

while (estomago<100){
    console.log("Quero mais coxinhas")
    estomago = estomago+ 10

}


//for

for (let i = 1; estomago < 10; i++){
    console.log(i)
}

const numeros = [2,3,33,44,5,7,10]

for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}


const palavras = ["batata", "cenoura", "tomate"]

for(let i = 0; i < palavras.length; i++ ){
    palavras[i]= palavras[i].toUpperCase()
}
console.log(palavras)


//for... of...

let maior = numeros[i]
for(let numero of numeros){
    if(numero> maior){
        maior= numero
    }
}    console.log(numero)
