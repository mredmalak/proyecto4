import express from 'express';

import {
  listIngredientes,
  createIngredientes,
  listIngredientesByRecetaName,
} from '../controllers/ingredientes.js';

const recetarioRouter = express.Router();

recetarioRouter.get('/ingredientes', listIngredientes);
recetarioRouter.get('/ingredientes/receta/:name', listIngredientesByRecetaName);
recetarioRouter.post('/ingredientes', createIngredientes);

export default recetarioRouter;
