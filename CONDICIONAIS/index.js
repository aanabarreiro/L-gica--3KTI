//IF / ELSE 

const condiciao1 = 1 === 1

if (condiciao1){
    console.log(`Entrei no bloco if`)
}else{
    console.log(`Condição é falsa`)
}

//exercício 1
const num1 = 10
const num2 = 10


if (num1 === num2){
    console.log(`SUCESSO!`)
}


//exercício 2

const n1 = 10
const n2 = 20

if(n1 === n2) {
    console.log(`Os números são IDÊNTICOS.`)
}else{
    console.log(`Os números NÃO são idênticos. `)
}

// ELSE IF
if(1===2){
    console.log(`Estou no bloco if.`)
}else if (1===1){
    console.log(`Estou no bloco else if.`)
}else{
    console.log(`Estou no bloco else.`)
}

//SWITCH CASE

const paisDeOrigem = 'brasil'

switch (paisDeOrigem) {
    case 'brasil':
        console.log('Você é brasileiro')
        break;
    case 'argentina':
        console.log('Você é argentino')
        break;
    case 'inglaterra':
        console.log('Você é inglês')
        break;
    case 'india':
        console.log('Você é indiano')
        break;
    default: 
    console.log('nacionalidade não encontrada.')
        break;
}