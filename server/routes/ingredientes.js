import express from 'express';

const recetarioRouter = express.Router();

recetarioRouter.get('/ingredientes');
recetarioRouter.post('/ingredientes');

export default recetarioRouter;