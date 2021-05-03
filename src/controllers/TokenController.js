import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;
    if (!email || !password) {
      res.status(400).json({
        errors: ['Email and Password is required!'],
      });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(404).json({
        errors: [`User not found with email: ${email}`],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      res.status(401).json({
        errors: ['Incorrect credentials'],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    res.json({ token, user: { nome: user.nome, id, email } });
  }
}

export default new TokenController();
