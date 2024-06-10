//OBJETOS

//objeto vazio
{ }

///objeto com algo armazenado
const professor = {
    nome: "Jean",
    idade: 29,
    endereco: "Rua XXXX-XXXX",
    contato: "51-9999-9999",
    cadAtv: true,
    materias: ["algoritmos", "front-end", "back-end"],
    contarPiada: function(){
        console.log("É pa vê ou pa come?")
    }
}

//objeto dentro de objeto
const donoDoPet ={
    nome: 'Ana Barreiro',
    pet:{
        nomePet: 'Belhinha',
        raca: 'Poodle',
        idade:6,
        vacinas:{
            vac1:'XXX',
            vac2: 'YYY',
            vac3:'ZZZ',
        }
        
    }
}
console.log(`O nome do seu pet é ${donoDoPet.pet.vacinas.vac2}.`)

//ARRAY DE OBJETOS=

const profs= [
    {nome: "Andrei", modulo:1},
    {nome: "Vitor", modulo:2},
    {nome: "Mina", modulo: 3}

]
console.log(profs[2]. nome)

//Espalhamento ou Spread

const novoCurso={
    ...professor,
    nome: 'Ana',
    teste: true
}
console.log(novoCurso)
console.log(novoCurso.contarPiada())

//copiando spread
const profes=[
    'prof 1', 'prof 2', 'prof 3'
]

const copiandoProfes= [...profes]
console.log(copiandoProfes)