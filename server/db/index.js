import pg from 'pg';
import logger from '../lib/logger.js';
const { Pool } = pg;

// ! Cambiar los datos de la linea 8 para que este correcto en tu local

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    'postgresql://eduardo:1@localhost:5432/recetario',
});
export const query = async ({ tag = '', queryString, params }) => {
  try {
    const start = Date.now();
    const { rows } = await pool.query(queryString, params);
    const duration = Date.now() - start;
    logger.info({ database: { tag, duration, rows: rows.length } });
    return rows;
  } catch (error) {
    const { message } = error;
    logger.error({ database: { error: { message } } });
    throw new Error(error);
  }
};
export const findOne = async ({ tag = '', queryString, params }) => {
  const [one] = await query({ tag, queryString, params });
  return one;
};
