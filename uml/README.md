# Remodelando o CRUD da Academia
Baseado no código do CRUD realizado na última entrega, aqui está o diagrama de classes UML dentro do padrão MVC.
## Diagrama UML no MVC:

### Model

|Aluno |
|---|
| - matricula- INT|
| - nomeAluno- STRING|
| - cpfAluno- INT|
| - numTelefoneAluno- INT|
| - planoAcademia- STRING|
| - enderecoAluno- STRING|


|Professor|
|---|
| - professorID- INT |
| - nomeProfessor- STRING |
| - cpfProfessor- INT |
| - salario- INT |
| - turno- STRING |
| - numTelefoneProfessor- INT |
| - enderecoProfessor- STRING |

### Controller

| Professor | Aluno | |
|---|---|---|
| + aumentarSalario():    | + renovarPlano(): |+ validacaoResposta(pergunta): |
| + cadastrarProfessor(): |+ cadastrarAluno():|
| + buscarProfessor():    |+ buscarAlunos():  |
| + alterarProfessor():   |+ alterarAluno():  |
|                         |+ removerAluno()|  |


### View

| ALUNO | PROFESSOR |
|---    |---|
| + menuAluno():    | + menuProfessor(): |
| + listarAlunos(): | + listarProfessores():|
