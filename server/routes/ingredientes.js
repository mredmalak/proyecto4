import express from 'express';

import { listIngredientes, createIngredientes } from '../controllers/ingredientes.js';

const recetarioRouter = express.Router();

recetarioRouter.get('/ingredientes', listIngredientes);
recetarioRouter.post('/ingredientes', createIngredientes);

export default recetarioRouter;