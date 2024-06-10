//TEMPLATE STRING

const nome = "Ana";
const idade = 15;

console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos`);


//PROTOTIPOS DE STRINGS

//METODOS

nome.toUpperCase()

//PROPRIEDADES

nome.length

console.log(nome.length)

//LENGTH

console.log(nome.length)
const numChar = nome.length

//TOLOWERCASE

const palavra = "OiEEEEeee"

console.log(palavra.toLowerCase())

const palavraMinuscula = palavra.toLowerCase()

//TOUPPERCASE

console.log(palavra.toUpperCase())
const palavraMaiuscula = palavra.toUpperCase()

//TRIM

const email = "   senac@senacrs.com"
const emailFormatado = email.trim()
console.log(emailFormatado)
console.log(email.trim)

//INCLUDES
const frase = "Hoje eu comi batata." 
console.log(frase.includes("batata"))
console.log(frase.includes("cenoura"))
console.log(frase.includes("a"))


//REPLACE ALL

console.log(frase.replaceAll("batata", "chocolate"))
console.log(frase.replaceAll("a", "e"))