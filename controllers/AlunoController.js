import Aluno from '/workspaces/FAP-CRUD/models/aluno.js';
import * as AlunoView from '/workspaces/FAP-CRUD/views/AlunoView.js';


let matricula = 0

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

}export function alterarAluno() {
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