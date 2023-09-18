const rl = require('readline-sync')

let flag = true
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
        this.tempoFidelidade = planoAcademia
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
        let valor = rl.questionInt("Digite a porcentagem de aumento que será dada ao professor")
        this.salario = this.salario * (100 + valor) / 100
    }
}


function menuAluno() {
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

function menuProfessor() {
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

function cadastrarAluno() {
    let nomeAluno = rl.question("Digite o nome do Aluno: ")
    let cpfAluno = rl.question("Digite o CPF do Aluno: ")
    let numTelefoneAluno = rl.question("Digite o número de Telefone do Aluno: ")
    let planoAcademia = rl.question("Digite o Plano do Aluno: Mensal, Trimensal, Semestral, Anual ")
    let enderecoAluno = rl.question("Digite o Endereço do Aluno: ")
    matricula++
    const novoAluno = new CadastroAluno(matricula, nomeAluno, cpfAluno, numTelefoneAluno, planoAcademia, enderecoAluno);
    
    listaAlunos.push(novoAluno)    
   

}

/* function cadastrarProfessor() {  
    let nomeProfessor = rl.question("Digite o nome do Professor: ")
    let cpfProfessor = rl.question("Digite o CPF do Professor: ")
    let numTelefoneProfessor = rl.question("Digite o número de Telefone do Professor: ")
    let salario = rl.question("Digite o Salário: ")
    let turno = rl.question("Digite o Turno do Professor: ")
    let enderecoProfessor = rl.question("Digite o Endereço do Professor: ")
    const novoProfessor = new CadastroProfessor(nomeProfessor, cpfProfessor, salario, turno, numTelefoneProfessor, enderecoProfessor)
    
    listaProfessores.push(professores)
    

}
 */
function listarAlunos() {
    if (!listaAlunos.length) {
        console.log("Não Existe Alunos");
    }
    else {
        for (const alunos of listaAlunos) {
            console.log(`Matrícula: ${alunos.matricula}\nNome: ${alunos.nomeAluno}\nPlano: ${alunos.planoAcademia}`);
        }
    }
}

function buscarAlunos() {
    if (!listaAlunos.length) {
        console.log(`Não Existem Alunos, por favor, Cadastre um.`);
        }
        else {
            let options = rl.questionInt("Você Sabe a Matrícula do Aluno Desejado? 1 - Sim, 2 - Não ")
            switch (options) {
                case 1:          
                    searchQuestion = rl.questionInt("Digite a matrícula do Aluno que você deseja encontrar: ")
                    const search = listaAlunos.find((listaAlunos) => listaAlunos.matricula === searchQuestion);
                    console.log(`Informações do Aluno: ${search.nomeAluno}\nMatrícula: ${search.matricula}\nCPF: ${search.cpfAluno}\nPlano: ${search.planoAcademia}\nNúmero Telefone: ${search.numTelefoneAluno}\nEndereço: ${search.enderecoAluno}`);
    
                    break;
                case 2:
                    console.log("Aqui Estão Todos os Alunos Cadastrados:");
                    listarAlunos()
                    searchQuestion = rl.questionInt("Digite a matrícula do Aluno que você deseja encontrar: ")
                    if (!listaAlunos.length) {
                        console.log(`Não Existem Alunos, por favor, Cadastre um.`);
                    }   else {
                        const search = listaAlunos.find((listaAlunos) => listaAlunos.matricula === searchQuestion);
                        console.log(`Informações do Aluno: ${search.nomeAluno}\nMatrícula: ${search.matricula}\nCPF: ${search.cpfAluno}\nPlano: ${search.planoAcademia}\nNúmero Telefone: ${search.numTelefoneAluno}\nEndereço: ${search.enderecoAluno}`);
                    }
                    break; 
                    }
        }  

}

function alterarAluno() {
    let flagAlterar = true
    let valorAlterado
    if (!listaAlunos.length) {
    console.log(`Não Existem Alunos, por favor, Cadastre um.`);
    }
    else {
        let options = rl.questionInt("Você Sabe a Matrícula do Aluno Desejado? 1 - Sim, 2 - Não ")
        switch (options) {
            case 1:          
                searchQuestion = rl.questionInt("Digite a matrícula do Aluno que você deseja encontrar: ")
                const search = listaAlunos.find((listaAlunos) => listaAlunos.matricula === searchQuestion);              
                while (flagAlterar == true) {
                    let alterar = rl.questionInt("O Que Você Deseja Alterar - 0 - Cancelar [1] - Nome [2] - CPF [3] - NumTelefone [4] - Endereço")
                    switch (alterar) {
                    case 0: 
                        flagAlterar = false
                        break;
                    case 1:
                        valorAlterado = rl.question("Digite o Novo nome: ")
                        search.nomeAluno = valorAlterado
                        break;
                
                    case 2:
                        valorAlterado = rl.question("Digite o Novo CPF: ")
                        search.cpfAluno = valorAlterado
                        break;
                
                    case 3:
                        valorAlterado = rl.question("Digite o Novo Número de Telefone: ")
                        search.numTelefoneAluno = valorAlterado
                        break;
                
                    case 4:
                        valorAlterado = rl.question("Digite o Novo Endereço: ")
                        search.enderecoAluno = valorAlterado
                        break;
                
                    default:
                        console.log("seboso");
                        break;
                }
            }
                break;
            case 2:
                console.log("Aqui Estão Todos os Alunos Cadastrados:");
                listarAlunos()
                searchQuestion = rl.questionInt("Digite o ID Desejado: ")
                const searchP = listaAlunos.find((listaAlunos) => listaAlunos.matricula === searchQuestion);
                while (flagAlterar == true) {
                    let alterar = rl.questionInt("Digite O Que Você Deseja Alterar:\n[0] - Cancelar\n [1] - Nome\n [2] - CPF\n [3] - Número de Telefone\n [4] - Endereço ")
                    switch (alterar) {
                        case 0:
                            flagAlterar = false
                            break;
                    
                        case 1:
                            valorAlterado = rl.question("Digite o Novo Valor: ")
                            searchP.nomeAluno = valorAlterado
                            break;
                    
                        case 2:
                            valorAlterado = rl.question("Digite o Novo Valor: ")
                            searchP.cpfAluno = valorAlterado
                            break;
                    
                        case 3:
                            valorAlterado = rl.question("Digite o Novo Valor: ")
                            searchP.numTelefoneAluno =  valorAlterado
                            break;
                    
                        case 4:
                            valorAlterado = rl.question("Digite o Novo Valor: ")
                            searchP.enderecoAluno = valorAlterado
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

function renovarPlano() {
    if (!listaAlunos.length) {
        console.log(`Não Existem Alunos, por favor, Cadastre um.`);
        }
        else {
            let options = rl.questionInt("Você Sabe a Matrícula do Aluno Desejado? 1 - Sim, 2 - Não ")
        }
}
function removerAluno() {
    if (!listaAlunos.length) {
        console.log(`Não Há Alunos Registrados`);
    }
    else {
        let options = rl.questionInt("Você Sabe a Matrícula do Aluno Desejado:\n [1] - Sim\n [2] - Não ")
        switch (options) {
            case 1:
                searchQuestion = rl.questionInt("Digite o ID Desejado: ")
                const search = listaAlunos.find((listaAlunos) => listaAlunos.matricula === searchQuestion);
                listaAlunos.splice(search)
            break;
            case 2:
                console.log("Aqui estão todos os Alunos");
                listarAlunos()
                searchQuestion = rl.questionInt("Digite o ID Desejado: ")
                const search2 = listaAlunos.find((listaAlunos) => listaAlunos.matricula === searchQuestion);
                listaAlunos.splice(search2)
            break;
            default:
            console.log("Digite uma opção válida");
            break;
        }
    }
}

function listarProfessores() {
    if (!listaProfessores.length) {
        console.log("Não Existem Professores registrados");
    } else {
        for (let professores of listaProfessores) {
            console.log(`ID: ${professores.professorID}\nNome: ${professores.nomeProfessor}\nTurno: ${professores.turno}`)
        }
    }
}

function cadastrarProfessor() {  
    let nomeProfessor = rl.question("Digite o nome do Professor: ")
    let cpfProfessor = rl.question("Digite o CPF do Professor: ")
    let numTelefoneProfessor = rl.question("Digite o número de Telefone do Professor: ")
    let salario = rl.question("Digite o Salário: ")
    let turno = rl.question("Digite o Turno do Professor: ")
    let enderecoProfessor = rl.question("Digite o Endereço do Professor: ")
    professorID++
    const novoProfessor = new CadastroProfessor(professorID, nomeProfessor, cpfProfessor, salario, turno, numTelefoneProfessor, enderecoProfessor)
    
    listaProfessores.push(novoProfessor)
}

function buscarProfessor() {
    if (!listaProfessores.length) {
        console.log(`Não Existem Professores registrados`)
    } 
    else {
        let options = rl.questionInt("Você Sabe o ID do Professor Desejado? 1 - Sim, 2 - Não ")
        switch (options) {
            case 1:          
                searchQuestion = rl.questionInt("Digite o ID do Professor que você deseja encontrar: ")
                const search = listaProfessores.find((listaProfessores) => listaProfessores.professorID === searchQuestion);
                console.log(`Informações do professor ${search.nomeProfessor}\nID do professor: ${search.professorID}\nCpf: ${search.cpfProfessor}\nSalário: ${search.salario}\nTurno: ${search.turno}\nNúmero de telefone: ${search.numTelefoneProfessor}\nEndereço: ${search.enderecoProfessor}`);
                break;
            case 2:
                console.log("Aqui Estão Todos os Professores Cadastrados:");
                listarProfessores()
                searchQuestion = rl.questionInt("Digite o ID do Professor que você deseja encontrar: ")
                if (!listaProfessores.length) {
                    console.log(`Não Existem Alunos, por favor, Cadastre um.`);
                }   else {
                    const search = listaProfessores.find((listaProfessores) => listaProfessores.professorID === searchQuestion);
                    console.log(`Informações do professor ${search.nomeProfessor}\nID do professor: ${search.professorID}\nCpf: ${search.cpfProfessor}\nSalário: ${search.salario}\nTurno: ${search.turno}\nNúmero de telefone: ${search.numTelefoneProfessor}\nEndereço: ${search.enderecoProfessor}`);
                }
                break;
            }
        }
}

function alterarProfessor() {
    let flagAlterar = true 
    let valorAlterado
    if (!listaProfessores.length) {
        console.log(`Não Há Professores Registrados`);
    }
    else {
        let options = rl.questionInt("Você Sabe o ID do Professor Desejado:\n [1] - Sim\n [2] - Não ")
        switch (options) {
            case 1:
                searchQuestion = rl.questionInt("Digite o ID Desejado: ")
                const search = listaProfessores.find((listaProfessores) => listaProfessores.professorID === searchQuestion);
                while (flagAlterar == true) {
                    let alterar = rl.questionInt("Digite O Que Você Deseja Alterar:\n[0] - Cancelar\n [1] - Nome\n [2] - Salário\n [3] - Turno\n [4] - Número de Telefone\n [5] - Endereço ")
                    switch (alterar) {
                        case 0:
                            flagAlterar = false
                            break;
                    
                        case 1:
                            valorAlterado = rl.question("Digite o Novo Valor: ")
                            search.nomeProfessor = valorAlterado
                            break;
                    
                        case 2:
                            valorAlterado = rl.question("Digite o Novo Valor: ")
                            search.salario = valorAlterado
                            break;
                    
                        case 3:
                            valorAlterado = rl.question("Digite o Novo Valor: ")
                            search.turno =  valorAlterado
                            break;
                    
                        case 4:
                            valorAlterado = rl.question("Digite o Novo Valor: ")
                            search.numTelefoneProfessor = valorAlterado
                            break;
                    
                        case 5:
                            valorAlterado = rl.question("Digite o Novo Valor: ")
                            search.enderecoProfessor = valorAlterado
                            break;
                    
                        default:
                            console.log("Digite um valor válido");
                            break;
                    }
                }
                break;
            case 2:
                console.log("Aqui estão todos os professores cadastrados");
                listarProfessores()
                searchQuestion = rl.questionInt("Digite o ID Desejado: ")
                const searchP = listaProfessores.find((listaProfessores) => listaProfessores.professorID === searchQuestion);
                while (flagAlterar == true) {
                    let alterar = rl.questionInt("Digite O Que Você Deseja Alterar:\n[0] - Cancelar\n [1] - Nome\n [2] - Salário\n [3] - Turno\n [4] - Número de Telefone\n [5] - Endereço ")
                    switch (alterar) {
                        case 0:
                            flagAlterar = false
                            break;
                    
                        case 1:
                            valorAlterado = rl.question("Digite o Novo Valor: ")
                            searchP.nomeProfessor = valorAlterado
                            break;
                    
                        case 2:
                            valorAlterado = rl.question("Digite o Novo Valor: ")
                            searchP.salario = valorAlterado
                            break;
                    
                        case 3:
                            valorAlterado = rl.question("Digite o Novo Valor: ")
                            searchP.turno =  valorAlterado
                            break;
                    
                        case 4:
                            valorAlterado = rl.question("Digite o Novo Valor: ")
                            searchP.numTelefoneProfessor = valorAlterado
                            break;
                    
                        case 5:
                            valorAlterado = rl.question("Digite o Novo Valor: ")
                            searchP.enderecoProfessor = valorAlterado
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

function removerProfessor() {
    if (!listaProfessores.length) {
        console.log(`Não Há Professores Registrados`);
    }
    else {
        let options = rl.questionInt("Você Sabe o ID do Professor Desejado:\n [1] - Sim\n [2] - Não ")
        switch (options) {
            case 1:
                searchQuestion = rl.questionInt("Digite o ID Desejado: ")
                const search = listaProfessores.find((listaProfessores) => listaProfessores.professorID === searchQuestion);
                listaProfessores.splice(search)
            break;
            case 2:
                console.log("Aqui estão todos os professores");
                listarProfessores()
                searchQuestion = rl.questionInt("Digite o ID Desejado: ")
                const search2 = listaProfessores.find((listaProfessores) => listaProfessores.professorID === searchQuestion);
                listaProfessores.splice(search2)
            break;
            default:
            console.log("Digite uma opção válida");
            break;
        }
    }
}

function aumentarSalario(){
    if (!listaProfessores.length) {
        console.log(`Não Há Professores Registrados`);
    } else {
        let options = rl.questionInt("Você Sabe o ID do Professor Desejado:\n [1] - Sim\n [2] - Não ")
        switch (options) {
            case 1:
                searchQuestion = rl.questionInt("Digite o ID Desejado: ")
                const search = listaProfessores.find((listaProfessores) => listaProfessores.professorID === searchQuestion);
                search.aumento()
                break;
            case 2:
                console.log("Aqui estão todos os professores");
                listarProfessores()
                searchQuestion = rl.questionInt("Digite o ID Desejado: ")
                const search2 = listaProfessores.find((listaProfessores) => listaProfessores.professorID === searchQuestion)
                search2.aumento()
                break;
            default:
                console.log("Digite uma opção válida por favor!")
                break;
        }
    }

}



let setor = rl.questionInt("Escolha o setor que você deseja navegar: 1- Aluno ou 2- Professor? ")


switch (setor) {
    case 1:
        while (flag == true) {
            menuAluno()          
            let options = rl.questionInt("Escolha uma opção: ")
            switch (options) {
                case 0:
                    flag = false
                    break;
                case 1:
                    listarAlunos()
                    break;
                case 2:
                    cadastrarAluno()
                    break;
                case 3:
                    buscarAlunos()
                    break;
                case 4:
                    alterarAluno()
                    break;
                case 5:
                    
                    break;
                case 6:
                    removerAluno()
                    break;
            
                default:
                    console.log("donzelo");
                    break;
            }
        }
       
    break;
           
    case 2: 
    while (flag) {
        menuProfessor()
        options = rl.questionInt("Escolha uma opção: ")
        switch (options) {
            case 1:
                listarProfessores()
                break;
            case 2:
                cadastrarProfessor()
                break;
            case 3:
                buscarProfessor()
                break;
            case 4:
                alterarProfessor()
                break;
            case 5:
                aumentarSalario()
                break;
            case 6:
                removerProfessor()
                break;
        
            default:
                flag = false
                break;
        }
    }
   
    
    break;

    default:
    console.log("Digite um Valor válido");
    break;
}

