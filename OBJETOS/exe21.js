 const pessoa = {
        nome: "Kauê Vieira Machado",
        idade: 16,
        musica: "Trap"
    }

    const nm= 'Laura'
    const idadeLaura= 17
    function objPessoa(pessoa){
   
    const addInfo={
        ...pessoa,
        comidaFav: ['Carbonara','Lasanha', 'Hambúrguer'],
        mlrAmg:{
            nome2: 'Athos',
            idade2: 15
        }

    }  
   
    
    console.log(`A pessoa escolhida se chama ${pessoa.nome} e tem ${pessoa.idade} anos de idade`)
    console.log(`Seu melhor amigo se chama ${addInfo.mlrAmg.nome2}  e tem ${addInfo.mlrAmg.idade2}`)
}
objPessoa(pessoa)
