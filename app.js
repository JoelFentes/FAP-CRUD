import * as AlunoController from '/workspaces/FAP-CRUD/controllers/AlunoController.js';
import * as ProfessorController from '/workspaces/FAP-CRUD/controllers/ProfessorController.js';

import rl from 'readline-sync';
import clear from "clear";

let flag = true


let setor = rl.questionInt("Escolha o setor que você deseja navegar:\n 1- Aluno\n 2- Professor ")


switch (setor) {
    case 1:
        while (flag == true) {
            menuAluno()       
            let op = rl.questionInt("Escolha uma opção: ")
            switch (op) {
                case 0:
                    flag = false
                    clear()
                    console.log("Obrigado por usar nosso aplicativo! Volte sempre");
                    break;
                case 1:
                    clear()
                    listarAlunos()
                    break;
                case 2:
                    clear()
                    cadastrarAluno()
                    break;
                case 3:
                    clear()
                    buscarAlunos()
                    break;
                case 4:
                    alterarAluno()
                    break;
                case 5:
                    clear()
                    renovarPlano()
                    break;
                case 6:
                    removerAluno()
                    break;
            
                default:
                    flag = false
                    console.log("Error");
                    break;
            }
        }
       
    break;
           
    case 2: 
    while (flag) {
        menuProfessor()
        let opx = rl.questionInt("Escolha uma opção: ")
        switch (opx) {
            case 0: 
                flag = false
                clear()
                console.log("Obrigado por usar nosso aplicativo! Volte sempre");
                break;
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
                console.log("Error");
                break;
        }
    }
   
    
    break;

    default:
    console.log("Digite um Valor válido");
    break;
}

