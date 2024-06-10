

//objeto pessoa
const pessoa = {
    nome: "Kauê Vieira Machado",
    idade: 16,
    musica: "Trap"
}
console.log(`O nome dele é ${pessoa.nome}, ele tem ${pessoa.idade} anos e seu gênero musical favorito é ${pessoa.musica}.`)

// //objeto filme

const filme = {
    nome: "Carros",
    direção: " John Lasseter",
    lançamento: 2006,
    elenco: ["Owen Wilson", "Bonnie Hunt", "Paul Newman","Larry the Cable Guy"],
    assistido: true,
    personagens: ["Relâmpago McQueen", "Sally Carrera","Doc Hudson", "Mater"]
}

console.log(`O nome do filme é ${filme.nome}.`)
console.log(`Foi dirigido por ${filme.direção}.`)
console.log(`Tal filme foi lançado em ${filme.lançamento}.`)
console.log(`Estrelando ${filme.elenco}.`)
console.log(`O filme já foi assistido pelo usuário: ${filme.assistido}.`)

console.log(filme.elenco[0],'- ', filme.personagens[0])
console.log(filme.elenco[1],'- ', filme.personagens[1])
console.log(filme.elenco[2],'- ', filme.personagens[2])
console.log(filme.elenco[3],'- ', filme.personagens[3])

filme.elenco[0]= "Xuxa"
console.log(filme)
