import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();

    if (!alunos) {
      res.status(404).json();
    }

    res.json(alunos);
  }
}

export default new AlunoController();
