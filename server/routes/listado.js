import express from 'express';

import { listListado } from '../controllers/listado.js';

const listadoRouter = express.Router();

listadoRouter.post('/listado', listListado);

export default listadoRouter;
