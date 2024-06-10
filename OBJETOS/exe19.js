const aluno = {
    nome: "Ana Beatriz",
    idade: 15,
    endereco: "Rua Campeche, 122",
    contato: "51-996052307",
    matriculado: true,
    materiasFav: ["Informática", "Sociologia", "História"],
    curiosidade: function(){
        console.log("Sou péssima em exatas.")
    }
 };
  console.log(aluno.contato)
  console.log(aluno.curiosidade())
  console.log(aluno.materiasFav[0])