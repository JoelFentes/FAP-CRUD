const rl = require('readline-sync')

let flag = true
let listaAlunos = []
let listaProfessores = []
let matricula = 0



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
    constructor(nomeProfessor, cpfProfessor, salario, turno, numTelefoneProfessor, enderecoProfessor){
        this.nomeProfessor = nomeProfessor
        this.cpfProfessor = cpfProfessor
        this.salario = salario
        this.turno = turno
        this.numTelefoneProfessor = numTelefoneProfessor
        this.enderecoProfessor = enderecoProfessor
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
    console.log("5 - Remover um Aluno");
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
    console.log("5 - Remover um Professor");
    console.log("===================");
    
   
}

function cadastrarAluno() {
    let nomeAluno = rl.question("Digite o nome do Aluno: \n")
    let cpfAluno = rl.question("Digite o CPF do Aluno: \n")
    let numTelefoneAluno = rl.question("Digite o número de Telefone do Aluno: \n")
    let planoAcademia = rl.question("Digite o Plano do Aluno: Mensal, Trimensal, Semestral, Anual \n")
    let enderecoAluno = rl.question("Digite o Endereço do Aluno: \n")
    matricula++
    const novoAluno = new CadastroAluno(matricula, nomeAluno, cpfAluno, numTelefoneAluno, planoAcademia, enderecoAluno);
    
    listaAlunos.push(novoAluno)    
   

}

function cadastrarProfessor() {  
    let nomeProfessor = rl.question("Digite o nome do Professor: \n")
    let cpfProfessor = rl.question("Digite o CPF do Professor: \n")
    let numTelefoneProfessor = rl.question("Digite o número de Telefone do Professor: \n")
    let salario = rl.question("Digite o Salário: \n")
    let turno = rl.question("Digite o Turno do Professor: \n")
    let enderecoProfessor = rl.question("Digite o Endereço do Professor: \n")
    const novoProfessor = new CadastroProfessor(nomeProfessor, cpfProfessor, salario, turno, numTelefoneProfessor, enderecoProfessor)
    
    listaProfessores.push(novoProfessor)
    

}

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
            let options = rl.questionInt("Você Sabe a Matrícula do Aluno Desejado?\n 1 - Sim\n 2 - Não \n")
            switch (options) {
                case 1:          
                    searchQuestion = rl.questionInt("Digite a matrícula do Aluno que você deseja encontrar: \n")
                    const search = listaAlunos.find((listaAlunos) => listaAlunos.matricula === searchQuestion);
                    console.log(`Informações do Aluno: ${search.nomeAluno}\nMatrícula: ${search.matricula}\nCPF: ${search.cpfAluno}\nPlano: ${search.planoAcademia}\nNúmero Telefone: ${search.numTelefoneAluno}\nEndereço: ${search.enderecoAluno}`);
    
                    break;
                case 2:
                    console.log("Aqui Estão Todos os Alunos Cadastrados: \n");
                    listarAlunos()
                    searchQuestion = rl.questionInt("Digite a matrícula do Aluno que você deseja encontrar: \n")
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
        let options = rl.questionInt("Você Sabe a Matrícula do Aluno Desejado?\n 1 - Sim\n 2 - Não \n")
        switch (options) {
            case 1:          
                searchQuestion = rl.questionInt("Digite a matrícula do Aluno que você deseja encontrar: \n")
                const search = listaAlunos.find((listaAlunos) => listaAlunos.matricula === searchQuestion);              
                while (flagAlterar == true) {
                    let alterar = rl.questionInt("O Que Você Deseja Alterar?\n 0 - Cancelar\n 1 - Nome\n 2 - CPF\n 3 - NumTelefone\n 4 - Endereço\n")
                    switch (alterar) {
                    case 0: 
                        flagAlterar = false
                        break;
                    case 1:
                        valorAlterado = rl.question("Digite o Novo nome: \n")
                        search.nomeAluno = valorAlterado
                        break;
                
                    case 2:
                        valorAlterado = rl.question("Digite o Novo CPF: \n")
                        search.cpfAluno = valorAlterado
                        break;
                
                    case 3:
                        valorAlterado = rl.question("Digite o Novo Número de Telefone: \n")
                        search.numTelefoneAluno = valorAlterado
                        break;
                
                    case 4:
                        valorAlterado = rl.question("Digite o Novo Endereço: \n")
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
                searchQuestion = rl.questionInt("Digite a matrícula do Aluno que você deseja encontrar: \n")
                if (!listaAlunos.length) {
                    console.log(`Não Existem Alunos, por favor, Cadastre um.`);
                }   else {
                    const search = listaAlunos.find((listaAlunos) => listaAlunos.matricula === searchQuestion);
                    let nomeAlteradoValue = rl.question("Digite o novo nome: \n")
                    search.nomeAluno = nomeAlteradoValue
    
                }
                break; 
        }
    }  
        
}


////////////


function listarProfessores() {
    if (!listaProfessores.length) {
        console.log("Não Existe Professores");
    }
    else {
        for (const professor of listaProfessores) {
            console.log(`Turno: ${professor.turno}\n Nome: ${professor.nomeProfessor}}`);
        }
    }
}

function buscarProfessores() {
    if (!listaProfessores.length) {
        console.log(`Não Existem Professores, por favor, Cadastre um.`);
        }
        else {
            let options = rl.questionInt("Você Sabe o nome do professor desejado?\n 1 - Sim\n  2 - Não ")
            switch (options) {
                case 1:          
                    searchQuestion = rl.questionInt("Digite o nome do professor que você deseja encontrar: ")
                    const search = listaProfessores.find((listaProfessores) => listaProfessores.nomeProfessor === searchQuestion);
                    console.log(`Informações do professor: ${search.nomeProfessor}\nTurno: ${search.turno}\nCPF: ${search.cpfProfessor}\nSalário: ${search.salario}\nNúmero Telefone: ${search.numTelefoneProfessor}\nEndereço: ${search.enderecoProfessor}`);
    
                    break;
                case 2:
                    console.log("Aqui Estão Todos os Professores Cadastrados:");
                    listaProfessores()
                    searchQuestion = rl.questionInt("Digite o nome do professor que você deseja encontrar: ")
                    if (!listaProfessores.length) {
                        console.log(`Não Existem Professores, por favor, Cadastre um.`);
                    }   else {
                        const search = listaProfessores.find((listaProfessores) => listaProfessores.nomeProfessor === searchQuestion);
                        console.log(`Informações do professor: ${search.nomeProfessor}\nTurno: ${search.turno}\nCPF: ${search.cpfProfessor}\nSalário: ${search.salario}\nNúmero Telefone: ${search.numTelefoneProfessor}\nEndereço: ${search.enderecoProfessor}`);
                    }
                    break; 
                    }
        }  

}


function alterarProfessor() {
    let flagAlterar = true
    let valorAlterado
    if (!listaProfessores.length) {
    console.log(`Não Existem Professores, por favor, Cadastre um.`);
    }
    else {
        let options = rl.questionInt("Você Sabe o nome do professor Desejado?\n 1 - Sim\n 2 - Não ")
        switch (options) {
            case 1:          
                searchQuestion = rl.questionInt("Digite o nome do professor que você deseja encontrar: \n")
                const search = listaProfessores.find((listaProfessores) => listaProfessores.nomeProfessor === searchQuestion);              
                while (flagAlterar == true) {
                    let alterar = rl.questionInt("O Que Você Deseja Alterar\n 0 - Cancelar\n 1 - Nome\n 2 - CPF\n 3 - NumTelefone\n 4 - Endereço\n")
                    switch (alterar) {
                    case 0: 
                        flagAlterar = false
                        break;
                    case 1:
                        valorAlterado = rl.question("Digite o Novo nome: \n")
                        search.nomeProfessor = valorAlterado
                        break;
                
                    case 2:
                        valorAlterado = rl.question("Digite o Novo CPF: \n")
                        search.cpfProfessor = valorAlterado
                        break;
                
                    case 3:
                        valorAlterado = rl.question("Digite o Novo Número de Telefone: \n")
                        search.numTelefoneProfessor = valorAlterado
                        break;
                
                    case 4:
                        valorAlterado = rl.question("Digite o Novo Endereço: \n")
                        search.enderecoProfessor = valorAlterado
                        break;
                
                    default:
                        console.log("seboso");
                        break;
                }
            }
                break;
            case 2:
                console.log("Aqui Estão Todos os Professores Cadastrados:");
                listaProfessores()
                searchQuestion = rl.questionInt("Digite o nome do professor que você deseja encontrar: \n")
                if (!listaProfessores.length) {
                    console.log(`Não Existem Professores, por favor, Cadastre um.`);
                }   else {
                    const search = listaProfessores.find((listaProfessores) => listaProfessores.nomeProfessor === searchQuestion);
                    let nomeAlteradoValue = rl.question("Digite o novo nome: \n")
                    search.nomeProfessor = nomeAlteradoValue
    
                }
                break; 
        }
    }  
        
}


////////////


let setor = rl.questionInt("Escolha o setor que você deseja navegar:\n 1- Aluno\n 2- Professor \n")


switch (setor) {
    case 1:
        while (flag == true) {
            menuAluno()          
            let options = rl.questionInt("Escolha uma opção: \n")
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
                    apagarAluno()
                    break;
                case 6:
                    
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
        switch (options) {
            case 1:
                console.log(professores);
                break;
            case 2:
                cadastrarProfessor()
                break;
            case 3:
                listarProfessores()
                break;
            case 4:
                buscarProfessores()
                break;
            case 5:
                alterarProfessor()
                break;
            case 6:
                apagarProfessor()
                break;
        
            default:
                break;
        }
    }
   
    
    break;

    default:
    console.log("Digite um Valor válido");
    break;
}
