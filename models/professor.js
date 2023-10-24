class Professor {
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
export default Professor;