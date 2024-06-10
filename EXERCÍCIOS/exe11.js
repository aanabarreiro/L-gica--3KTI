const poke = 'bulbasauro'

switch (poke) {
    case 'charmander':
        console.log(`O ${poke} é do tipo fogo.`)
        break;
    case 'bulbasauro':
        console.log(`O ${poke} é do tipo lanta e veneno.`)
        break;
    case 'squirtle':
        console.log(`O ${poke} é do tipo água.`)
    default:
        console.log('Pokémon não encontrado.')
        break;
}