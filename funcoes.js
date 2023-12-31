
import clear from 'clear';
import rl from 'readline-sync';


let listaAlunos = []
let listaProfessores = []
let matricula = 0
let professorID = 0

class CadastroAluno {
    constructor(matricula, nomeAluno, cpfAluno, numTelefoneAluno, planoAcademia, enderecoAluno){
        this.matricula = matricula
        this.nomeAluno = nomeAluno
        this.cpfAluno = cpfAluno
        this.numTelefoneAluno = numTelefoneAluno
        this.planoAcademia = planoAcademia
        this.enderecoAluno = enderecoAluno
    }
}

class CadastroProfessor {
    constructor(professorID, nomeProfessor, cpfProfessor, salario, turno, numTelefoneProfessor, enderecoProfessor){
        this.professorID = professorID
        this.nomeProfessor = nomeProfessor
        this.cpfProfessor = cpfProfessor
        this.salario = salario
        this.turno = turno
        this.numTelefoneProfessor = numTelefoneProfessor
        this.enderecoProfessor = enderecoProfessor
    }

    aumento() {
        let valor = rl.questionInt("Digite a Porcentagem de Aumento que será Dada ao Professor: ")
        this.salario = this.salario * (100 + valor) / 100
    }
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



export function menuAluno() {
    console.log("===== Cadastro Aluno  ====");
    console.log("======= Menu ======");
    console.log("0 - Sair do Sistema");
    console.log("1 - Listar Todos os Alunos");
    console.log("2 - Cadastrar um Novo Aluno");
    console.log("3 - Buscar um Aluno");
    console.log("4 - Alterar Cadastro Aluno");
    console.log("5 - Renovar Plano Aluno");
    console.log("6 - Remover um Aluno");
    console.log("===================");
    
}

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

export function cadastrarAluno() {
    let nomeAluno = validacaoResposta("Digite o nome do Aluno: ")
    let cpfAluno = validacaoResposta("Digite o CPF do Aluno: ")
    let numTelefoneAluno = validacaoResposta("Digite o número de Telefone do Aluno: ")
    let planoAcademia = validacaoResposta("Digite o Plano do Aluno: Mensal, Trimensal, Semestral, Anual ")
    let enderecoAluno = validacaoResposta("Digite o Endereço do Aluno: ")
    matricula++
    const novoAluno = new CadastroAluno(matricula, nomeAluno, cpfAluno, numTelefoneAluno, planoAcademia, enderecoAluno);
    
    listaAlunos.push(novoAluno)   
    clear()
}

export function listarAlunos() {
    if (!listaAlunos.length) {
        console.log("Não Existe Alunos");
    }
    else {
        for (const alunos of listaAlunos) {
            console.log(`Matrícula: ${alunos.matricula}\nNome: ${alunos.nomeAluno}\nPlano: ${alunos.planoAcademia}`);
           
        }
        let nada = rl.question("Aperte ENTER para sair")
        clear()
    }


}

export function buscarAlunos() {
    if (!listaAlunos.length) {
        console.log(`Não Existem Alunos, por favor, Cadastre um.`);
        }
        else {
            clear()
            let options = rl.questionInt("Você Sabe a Matrícula do Aluno Desejado?\n 1 - Sim\n 2 - Não ")
            switch (options) {
                case 1:          
                    let searchQuestion = rl.questionInt("Digite a matrícula do Aluno que você deseja encontrar: ")
                    const search = listaAlunos.find((listaAlunos) => listaAlunos.matricula === searchQuestion);
                    console.log(`Informações do Aluno: ${search.nomeAluno}\nMatrícula: ${search.matricula}\nCPF: ${search.cpfAluno}\nPlano: ${search.planoAcademia}\nNúmero Telefone: ${search.numTelefoneAluno}\nEndereço: ${search.enderecoAluno}`);
                    let nada = rl.question("Aperte ENTER para sair")
                    clear()
                    break;
                case 2:
                    console.log("Aqui Estão Todos os Alunos Cadastrados:");
                    listarAlunos()
                    let searchQuestion2 = rl.questionInt("Digite a matrícula do Aluno que você deseja encontrar: ")
                    if (!listaAlunos.length) {
                        console.log(`Não Existem Alunos, por favor, Cadastre um.`);
                    } 
                    else {
                        const search = listaAlunos.find((listaAlunos) => listaAlunos.matricula === searchQuestion2);
                        console.log(`Informações do Aluno: ${search.nomeAluno}\nMatrícula: ${search.matricula}\nCPF: ${search.cpfAluno}\nPlano: ${search.planoAcademia}\nNúmero Telefone: ${search.numTelefoneAluno}\nEndereço: ${search.enderecoAluno}`);
                    }
                    let nada2 = rl.question("Aperte ENTER para sair")
                    clear()
                    break; 
                    default:
                    console.log("Digite uma opção válida");
                    buscarAlunos()
                    break;
                }

        }  

}

export function alterarAluno() {
    let flagAlterar = true
    let valorAlterado
    if (!listaAlunos.length) {
    console.log(`Não Existem Alunos, por favor, Cadastre um.`);
    }
    else {
        clear()
        let options = rl.questionInt("Você Sabe a Matrícula do Aluno Desejado?\n 1 - Sim\n 2 - Não ")
        switch (options) {
            case 1:          
                let searchQuestion = rl.questionInt("Digite a matrícula do Aluno que você deseja encontrar: ")
                const search = listaAlunos.find((listaAlunos) => listaAlunos.matricula === searchQuestion);              
                while (flagAlterar == true) {
                    clear()
                    let alterar = rl.questionInt("O Que Você Deseja Alterar: 0 - Cancelar [1] - Nome [2] - CPF [3] - NumTelefone [4] - Endereço: ")
                    switch (alterar) {
                    case 0: 
                        flagAlterar = false
                        clear()
                        break;
                    case 1:
                        valorAlterado = validacaoResposta("Digite o Novo nome: ")
                        search.nomeAluno = valorAlterado
                        clear()
                        break;
                
                    case 2:
                        valorAlterado = validacaoResposta("Digite o Novo CPF: ")
                        search.cpfAluno = valorAlterado
                        clear()
                        break;
                
                    case 3:
                        valorAlterado = validacaoResposta("Digite o Novo Número de Telefone: ")
                        search.numTelefoneAluno = valorAlterado
                        clear()
                        break;
                
                    case 4:
                        valorAlterado = validacaoResposta("Digite o Novo Endereço: ")
                        search.enderecoAluno = valorAlterado
                        clear()
                        break;
                
                    default:
                        console.log("Digite uma opção válida por favor");
                        break;
                }
            }
                break;
            case 2:
                console.log("Aqui Estão Todos os Alunos Cadastrados:");
                listarAlunos()
                let searchQuestion2 = rl.questionInt("Digite o ID Desejado: ")
                const searchP = listaAlunos.find((listaAlunos) => listaAlunos.matricula === searchQuestion2);
                while (flagAlterar == true) {
                    let alterar = rl.questionInt("Digite O Que Você Deseja Alterar: [0] - Cancelar [1] - Nome [2] - CPF [3] - Número de Telefone\n [4] - Endereço: ")
                    switch (alterar) {
                        case 0:
                            flagAlterar = false
                            clear()
                            break;
                    
                        case 1:
                            valorAlterado = validacaoResposta("Digite o Novo Valor: ")
                            searchP.nomeAluno = valorAlterado
                            clear()
                            break;
                    
                        case 2:
                            valorAlterado = validacaoResposta("Digite o Novo Valor: ")
                            searchP.cpfAluno = valorAlterado
                            clear()
                            break;
                    
                        case 3:
                            valorAlterado = validacaoResposta("Digite o Novo Valor: ")
                            searchP.numTelefoneAluno =  valorAlterado
                            clear()
                            break;
                    
                        case 4:
                            valorAlterado = validacaoResposta("Digite o Novo Valor: ")
                            searchP.enderecoAluno = valorAlterado
                            clear()
                            break;

                        default:
                            console.log("Digite um valor válido");
                            break;
                    }
                }
                break;
        
            default:
                console.log("Digite uma opção válida");
                break;
        }
    }
}

export function renovarPlano() {
    if (!listaAlunos.length) {
        console.log(`Não Existem Alunos, por favor, Cadastre um.`);
        clear()
        }
        else {
            let options = rl.questionInt("Você Sabe a Matrícula do Aluno Desejado:\n [1] - Sim\n [2] - Não ")
            clear()
        switch (options) {
            case 1:
                let searchQuestion = rl.questionInt("Digite o ID Desejado: ")
                clear()
                const search = listaAlunos.find((listaAlunos) => listaAlunos.matricula === searchQuestion);
                let novaMatricula = validacaoResposta("Digite a nova modalidade de matricula: ")
                search.planoAcademia = novaMatricula
            break;
            case 2:
                console.log("Aqui estão todos os Alunos");
                listarAlunos()
                clear()
                let searchQuestion2 = rl.questionInt("Digite o ID Desejado: ")
                clear()
                const search2 = listaAlunos.find((listaAlunos) => listaAlunos.matricula === searchQuestion2);
                let novaMatricula2 = validacaoResposta("Digite a nova modalidade de matricula: ")
                search2.planoAcademia = novaMatricula2
            break;
            default:
                console.log("Digite uma opção válida");
                renovarPlano()
                break;
        }
    }
}

export function removerAluno() {
    if (!listaAlunos.length) {
        console.log(`Não Há Alunos Registrados`);
        clear()
    }
    else {
        let options = rl.questionInt("Você Sabe a Matrícula do Aluno Desejado:\n [1] - Sim\n [2] - Não ")
        clear()
        switch (options) {
            case 1:
                let searchQuestion = rl.questionInt("Digite o ID Desejado: ")
                clear()
                for (let i in listaAlunos) {
                    if (listaAlunos[i].matricula == searchQuestion) {
                        listaAlunos.splice(i,1)
                    }
                }
            break;
            case 2:
                console.log("Aqui estão todos os Alunos");
                listarAlunos()
                clear()
                let searchQuestion2 = rl.questionInt("Digite o ID Desejado: ")
                for (let i2 in listaAlunos) {
                    if (listaAlunos[i2].matricula == searchQuestion2) {
                        listaAlunos.splice(i2,1)
                    }
                }
            break;
            default:
            console.log("Digite uma opção válida");
            removerAluno()
            break;
        }
    }
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

export function cadastrarProfessor() {  
    clear()
    let nomeProfessor = validacaoResposta("Digite o nome do Professor: ")
    let cpfProfessor = validacaoResposta("Digite o CPF do Professor: ")
    let numTelefoneProfessor = validacaoResposta("Digite o número de Telefone do Professor: ")
    let salario = validacaoResposta("Digite o Salário: ")
    let turno = validacaoResposta("Digite o Turno do Professor: ")
    let enderecoProfessor = validacaoResposta("Digite o Endereço do Professor: ")
    professorID++
    const novoProfessor = new CadastroProfessor(professorID, nomeProfessor, cpfProfessor, salario, turno, numTelefoneProfessor, enderecoProfessor)
    
    listaProfessores.push(novoProfessor)
    clear()
}

export function buscarProfessor() {
    if (!listaProfessores.length) {
        console.log(`Não Existem Professores registrados`)
    } 
    else {
        let options = rl.questionInt("Você Sabe o ID do Professor Desejado? 1 - Sim, 2 - Não ")
        clear()
        switch (options) {
            case 1:          
                let searchQuestion = rl.questionInt("Digite o ID do Professor que você deseja encontrar: ")
                clear()
                const search = listaProfessores.find((listaProfessores) => listaProfessores.professorID === searchQuestion);
                console.log(`Informações do professor ${search.nomeProfessor}\nID do professor: ${search.professorID}\nCpf: ${search.cpfProfessor}\nSalário: ${search.salario}\nTurno: ${search.turno}\nNúmero de telefone: ${search.numTelefoneProfessor}\nEndereço: ${search.enderecoProfessor}`);
                let nada = rl.question("Aperte ENTER para sair")
                clear()
                break;
            case 2:
                console.log("Aqui Estão Todos os Professores Cadastrados:");
                listarProfessores()
                clear()
                let searchQuestion2 = rl.questionInt("Digite o ID do Professor que você deseja encontrar: ")
                clear()
                if (!listaProfessores.length) {
                    console.log(`Não Existem Alunos, por favor, Cadastre um.`);
                    clear()
                }   else {
                    const search = listaProfessores.find((listaProfessores) => listaProfessores.professorID === searchQuestion2);
                    console.log(`Informações do professor ${search.nomeProfessor}\nID do professor: ${search.professorID}\nCpf: ${search.cpfProfessor}\nSalário: ${search.salario}\nTurno: ${search.turno}\nNúmero de telefone: ${search.numTelefoneProfessor}\nEndereço: ${search.enderecoProfessor}`);
                    let nada2 = rl.question("Aperte ENTER para sair")
                    clear()
                }
                break;
            default:
                console.log("Digite uma opção válida.");
                buscarProfessor()
                break
            }
        }
}

export function alterarProfessor() {
    let flagAlterar = true 
    let valorAlterado
    if (!listaProfessores.length) {
        console.log(`Não Há Professores Registrados`);
        clear()
    }
    else {
        let options = rl.questionInt("Você Sabe o ID do Professor Desejado:\n [1] - Sim\n [2] - Não ")
        clear()
        switch (options) {
            case 1:
                let searchQuestion = rl.questionInt("Digite o ID Desejado: ")
                clear()
                const search = listaProfessores.find((listaProfessores) => listaProfessores.professorID === searchQuestion);
                while (flagAlterar == true) {
                    clear()
                    let alterar = rl.questionInt("Digite O Que Você Deseja Alterar: [0] - Cancelar [1] - Nome [2] - Salário [3] - Turno [4] - Número de Telefone [5] - Endereço: ")
                    switch (alterar) {
                        case 0:
                            flagAlterar = false
                            clear()
                            break;
                    
                        case 1:
                            valorAlterado = validacaoResposta("Digite o Novo Valor: ")
                            search.nomeProfessor = valorAlterado
                            clear()
                            break;
                    
                        case 2:
                            valorAlterado = validacaoResposta("Digite o Novo Valor: ")
                            search.salario = valorAlterado
                            clear()
                            break;
                    
                        case 3:
                            valorAlterado = validacaoResposta("Digite o Novo Valor: ")
                            search.turno =  valorAlterado
                            clear()
                            break;
                    
                        case 4:
                            valorAlterado = validacaoResposta("Digite o Novo Valor: ")
                            search.numTelefoneProfessor = valorAlterado
                            clear()
                            break;
                    
                        case 5:
                            valorAlterado = validacaoResposta("Digite o Novo Valor: ")
                            search.enderecoProfessor = valorAlterado
                            clear()
                            break;
                    
                        default:
                            console.log("Digite um valor válido");
                            alterarProfessor()
                            break;
                    }
                }
                break;
            case 2:
                console.log("Aqui estão todos os professores cadastrados");
                listarProfessores()
                clear()
                let searchQuestion2 = rl.questionInt("Digite o ID Desejado: ")
                clear()
                const searchP = listaProfessores.find((listaProfessores) => listaProfessores.professorID === searchQuestion2);
                while (flagAlterar == true) {
                    clear()
                    let alterar = rl.questionInt("Digite O Que Você Deseja Alterar:[0] - Cancelar [1] - Nome [2] - Salário [3] - Turno [4] - Número de Telefone [5] - Endereço: ")
                    switch (alterar) {
                        case 0:
                            flagAlterar = false
                            clear()
                            break;
                    
                        case 1:
                            valorAlterado = validacaoResposta("Digite o Novo Valor: ")
                            searchP.nomeProfessor = valorAlterado
                            clear()
                            break;
                    
                        case 2:
                            valorAlterado = validacaoResposta("Digite o Novo Valor: ")
                            searchP.salario = valorAlterado
                            clear()
                            break;
                    
                        case 3:
                            valorAlterado = validacaoResposta("Digite o Novo Valor: ")
                            searchP.turno =  valorAlterado
                            clear()
                            break;
                    
                        case 4:
                            valorAlterado = validacaoResposta("Digite o Novo Valor: ")
                            searchP.numTelefoneProfessor = valorAlterado
                            clear()
                            break;
                    
                        case 5:
                            valorAlterado = validacaoResposta("Digite o Novo Valor: ")
                            searchP.enderecoProfessor = valorAlterado
                            clear()
                            break;
                    
                        default:
                            console.log("Digite um valor válido");
                            alterarProfessor()
                            break;
                    }
                }
                break;
        
            default:
                console.log("Digite uma opção válida");
                alterarProfessor()
                break;
        }
    }
}

export function removerProfessor() {
    if (!listaProfessores.length) {
        console.log(`Não Há Professores Registrados`);
        clear()
    }
    else {
        let options = rl.questionInt("Você Sabe o ID do Professor Desejado:\n [1] - Sim\n [2] - Não ")
        clear()
        switch (options) {
            case 1:
                let searchQuestion = rl.questionInt("Digite o ID Desejado: ")
                clear()
                for (let i in listaProfessores) {
                    if (listaProfessores[i].professorID == searchQuestion) {
                        listaProfessores.splice(i,1)
                    }
                }
            break;
            case 2:
                console.log("Aqui estão todos os professores");
                listarProfessores()
                clear()
                let searchQuestion2 = rl.questionInt("Digite o ID Desejado: ")
                clear()
                for (let i2 in listaProfessores) {
                    if (listaProfessores[i2].professorID == searchQuestion2) {
                        listaProfessores.splice(i2,1)
                    }
                }
            break;
            default:
            console.log("Digite uma opção válida");
            removerProfessor()
            break;
        }
    }
}

export function aumentarSalario(){
    if (!listaProfessores.length) {
        console.log(`Não Há Professores Registrados`);
        clear()
    } else {
        let options = rl.questionInt("Você Sabe o ID do Professor Desejado:\n [1] - Sim\n [2] - Não ")
        clear()
        switch (options) {
            case 1:
                let searchQuestion = rl.questionInt("Digite o ID Desejado: ")
                clear()
                const search = listaProfessores.find((listaProfessores) => listaProfessores.professorID === searchQuestion);
                search.aumento()
                clear()
                break;
            case 2:
                console.log("Aqui estão todos os professores");
                listarProfessores()
                clear()
                let searchQuestion2 = rl.questionInt("Digite o ID Desejado: ")
                clear()
                const search2 = listaProfessores.find((listaProfessores) => listaProfessores.professorID === searchQuestion2)
                search2.aumento()
                clear()
                break;
            default:
                console.log("Digite uma opção válida por favor!")
                aumentarSalario()
                break;
        }
    }

}