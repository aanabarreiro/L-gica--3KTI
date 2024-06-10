const numeros = [1,2,3,4,5,6]

console.log(`Seu array possui valor igual a ${numeros.length}`)

numeros.pop()
console.log(`Seu novo array é igual a: ${numeros}`)

numeros.push(7)
console.log(`\nSua sequência é ${numeros}`)

console.log(`Seu array possui um número de valor igual a 6: ${numeros.includes(6)}`)
numeros.splice(3, 2)

console.log('\n', numeros)

console.log('\n', numeros.length)