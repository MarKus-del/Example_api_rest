import Student from '../models/Student';
import Photo from '../models/Photo';

class StudentController {
  async index(req, res) {
    const student = await Student.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
      include: {
        model: Photo,
        attributes: ['filename', 'url'],
      },
    });

    if (!student) {
      res.status(404).json();
    }

    res.json(student);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({
          error: ['ID is required'],
        });
      }

      const student = await Student.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
        include: {
          model: Photo,
          attributes: ['filename', 'url'],
        },
      });
      if (!student) {
        res.status(404).json({
          error: ['Student not found!'],
        });
      }

      res.json(student);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async store(req, res) {
    try {
      const {
        nome,
        sobrenome,
        email,
        peso,
        altura,
        idade,
      } = req.body;

      const newStudent = await Student.create({
        nome,
        sobrenome,
        email,
        peso,
        altura,
        idade,
      });

      res.status(201).json(newStudent);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const {
        nome,
        sobrenome,
        email,
        peso,
        altura,
        idade,
      } = req.body;
      if (!id) {
        res.status(400).json({
          error: ['ID is required'],
        });
      }

      const student = await Student.findByPk(id);
      if (!student) {
        res.status(404).json({
          error: ['Student not found!'],
        });
      }

      const updatedStudent = await student.update({
        nome,
        sobrenome,
        email,
        peso,
        altura,
        idade,
      });

      res.status(200).json(updatedStudent);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({
          error: ['ID is required'],
        });
      }

      const student = await Student.findByPk(id);
      if (!student) {
        res.status(404).json({
          error: ['Student not found!'],
        });
      }

      await student.destroy();

      res.status(204).json(null);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new StudentController();
