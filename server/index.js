import express from 'express';
import dotenv from 'dotenv';
import logger from './lib/logger.js';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();

// midlewares
import loggerMiddleware from './midlewares/logger-middleware.js';
import jsonResponse from './midlewares/json-response-middleware.js'

// routers
import healthRouter from './routes/health.js';
import recetarioRouter from './routes/recetario.js';
import ingredientesRouter from './routes/ingredientes.js';

const server = express();

const PORT = process.env.PORT || 3000;

server.use(loggerMiddleware);
server.use(jsonResponse);
server.use(bodyParser.json());
server.use(cors());
server.use(recetarioRouter);
server.use(ingredientesRouter);
server.use(healthRouter);

server.listen(PORT, () => logger.info(`Server starting on port ${PORT}🚀📡`));