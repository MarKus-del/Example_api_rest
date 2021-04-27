import { Router } from 'express';
import studentController from '../controllers/StudentController';
import loginRequred from '../middlewares/loginRequired';

const router = new Router();

router.get('/', studentController.index);
router.get('/:id', studentController.show);
router.post('/', loginRequred, studentController.store);
router.put('/:id', loginRequred, studentController.update);
router.delete('/:id', loginRequred, studentController.delete);

export default router;
