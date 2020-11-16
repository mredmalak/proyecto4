import { query } from '../index.js';

const getAll = async () => {
  const ingredientes = await query({
    tag: 'ingredientes.getAll',
    queryString: `SELECT * FROM ingredientes`,
  });
  return ingredientes;
};

const createNewIngrediente = async (name) => {
  const newIngrediente = await query({
    tag: 'ingredientes.createNewIngrediente',
    queryString: `INSERT INTO ingredientes (name_ingrediente) VALUES
    ('${name}')`,
  })
  return newIngrediente
}

export default { getAll, createNewIngrediente };