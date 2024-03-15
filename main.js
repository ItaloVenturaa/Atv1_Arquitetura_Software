const Aluno = require('./Aluno');
const Turma = require('./Turma');
const TurmaPresencial = require('./TurmaPresencial');

//instâncias 
const aluno1 = new Aluno("Fulano", "Fuluno1234","346752");
const turma = new Turma("T01", 8.5);
const turmaPresencial = new TurmaPresencial("TP01", 80);

//exemplo chamando o metodo aprovado 
//console.log("Aluno 1 aprovado:", aluno1.aprovado(7)); 
//console.log("Turma aprovada:", turma.aprovado(8))
//console.log("Turma presencial aprovada:", turmaPresencial.aprovado(7, 80)); 
