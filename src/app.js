import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import express from 'express';
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import photoRoutes from './routes/photoRoutes';
import './database';

class App {
  constructor() {
    this.app = express();
    this.midlewares();
    this.routes();
  }

  midlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users', userRoutes);
    this.app.use('/tokens', tokenRoutes);
    this.app.use('/students', alunoRoutes);
    this.app.use('/photo', photoRoutes);
  }
}

export default new App().app;