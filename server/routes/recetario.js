import express from 'express';

import { listRecetario } from '../controllers/recetario.js';

const recetarioRouter = express.Router();

recetarioRouter.get('/recetario', listRecetario);

export default recetarioRouter;