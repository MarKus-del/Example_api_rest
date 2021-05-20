import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const { nome, password, email } = req.body;
      const novoUser = await User.create({
        nome,
        password,
        email,
      });

      res.status(201).json({
        id: novoUser.id,
        nome: novoUser.nome,
        email: novoUser.email,
      });
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });

      res.json(users);
    } catch (e) {
      console.log(e);
      res.status(400).json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({
          error: ['ID is required!'],
        });
      }

      const user = await User.findByPk(id);
      if (!user) {
        res.status(404).json({
          error: [`User not found with id: ${id}`],
        });
      }
      const { nome, email } = user;
      res.json({ id, nome, email });
    } catch (error) {
      res.status(400).json(null);
    }
  }

  async update(req, res) {
    try {
      const { userId } = req;
      console.log(userId);
      const { nome, email, password } = req.body;

      const user = await User.findByPk(userId);
      if (!user) {
        res.status(404).json({
          error: `User not found with id: ${userId}`,
        });
      }

      const novoDados = await user.update({ nome, email, password });

      res.json({
        id: novoDados.id,
        nome: novoDados.nome,
        email: novoDados.email,
      });
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      console.log(req.userId);
      const user = await User.findByPk(req.userId);
      if (!user) {
        res.status(404).json({
          error: `User not found with id: ${req.userId}`,
        });
      }

      await user.destroy();
      res.status(204).json(null);
    } catch (error) {
      res.status(400).json(null);
    }
  }
}

export default new UserController();
