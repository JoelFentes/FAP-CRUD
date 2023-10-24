import Professor from '/workspaces/FAP-CRUD/models/professor.js';
import * as ProfessorView from '/workspaces/FAP-CRUD/views/ProfessorView.js';


let professorID = 0

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