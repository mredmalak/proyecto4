import express from 'express';

import { listRecetario, createReceta, getRecetaByName } from '../controllers/recetario.js';

const recetarioRouter = express.Router();

recetarioRouter.get('/recetario', listRecetario);
recetarioRouter.get('/recetario/:receta', getRecetaByName)
recetarioRouter.post('/recetario', createReceta);

export default recetarioRouter;