import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Marcos',
      sobrenome: 'Rodrigues',
      email: 'Marcos@Email.com',
      idade: 23,
      peso: 67.8,
      altura: 2.1,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
