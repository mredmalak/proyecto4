import express from 'express';

import { listRecetario, createReceta } from '../controllers/recetario.js';

const recetarioRouter = express.Router();

recetarioRouter.get('/recetario', listRecetario);
recetarioRouter.post('/recetario', createReceta);

export default recetarioRouter;