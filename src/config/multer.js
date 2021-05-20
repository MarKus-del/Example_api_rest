import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, call) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return call(new multer.MulterError('Arquivo precisa ser PNG ou JPG'));
    }

    return call(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, call) => {
      call(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, call) => {
      call(null, `${Date.now()}_${aleatorio()}_${extname(file.originalname)}`);
    },
  }),
};
