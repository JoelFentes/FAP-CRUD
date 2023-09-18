import {menuAluno, menuProfessor, cadastrarAluno, listarAlunos, buscarAlunos, alterarAluno, renovarPlano, removerAluno, listarProfessores, cadastrarProfessor, buscarProfessor, alterarProfessor, aumentarSalario, removerProfessor} from "./funcoes.js";
import rl from 'readline-sync';

let flag = true


let setor = rl.questionInt("Escolha o setor que você deseja navegar: 1- Aluno ou 2- Professor? ")


switch (setor) {
    case 1:
        while (flag == true) {
            menuAluno()          
            let op = rl.questionInt("Escolha uma opção: ")
            switch (op) {
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
                    renovarPlano()
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
        let opx = rl.questionInt("Escolha uma opção: ")
        switch (opx) {
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

