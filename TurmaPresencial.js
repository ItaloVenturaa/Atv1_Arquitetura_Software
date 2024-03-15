const Turma = require('./Turma');

class TurmaPresencial extends Turma {
  constructor(código, frequencia) {
    super(código);
    this.frequencia = frequencia;
  }

  
  aprovado() {
    //return super.aprovado(media) && frequencia >= 75, mais um exemplo de possivel calculo
    //boolean
  }
}

module.exports = TurmaPresencial;
