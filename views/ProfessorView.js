let listaProfessores = []

export function menuProfessor() {
    console.log("===== Cadastro Professor  ====");
    console.log("======= Menu ======");
    console.log("0 - Sair do Sistema");
    console.log("1 - Listar Todos os Professores");
    console.log("2 - Cadastrar um Novo Professor");
    console.log("3 - Buscar um Professor");
    console.log("4 - Alterar Cadastro Professor");
    console.log("5 - Dar um Aumento ao Professor");
    console.log("6 - Remover um Professor");
    console.log("===================");
   
}

export function validacaoResposta(pergunta) {
    let resposta = '';
  
    while (resposta.trim() === '') {
      resposta = rl.question(pergunta);
  
      if (resposta.trim() === '') {
        clear()
        console.log('Por favor, Preencha Este Campo, Valor Obrigatório. ');
        
      }
    }
  
    return resposta;
  }

export function listarProfessores() {
    if (!listaProfessores.length) {
        console.log("Não Existem Professores registrados");
    } else {
        clear()
        console.log("Aqui Estão Todos os Professores Cadastrados:");
        for (let professores of listaProfessores) {
            console.log(`ID: ${professores.professorID}\nNome: ${professores.nomeProfessor}\nTurno: ${professores.turno}`)
            
        }
        let nada = rl.question("Aperte ENTER para sair")
        clear()
    }
}