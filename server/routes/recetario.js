import express from 'express';

import { listRecetario, createReceta, getRecetaByName, addIngrediente } from '../controllers/recetario.js';

const recetarioRouter = express.Router();

recetarioRouter.get('/recetario', listRecetario);
recetarioRouter.get('/recetario/:receta', getRecetaByName)
recetarioRouter.post('/recetario', createReceta);
recetarioRouter.post('/recetario/receta_ingrediente', addIngrediente);

export default recetarioRouter;