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
  });
  return newIngrediente;
};

export const getIngredientesDeRecetaByRecetaName = async (name) =>
  await query({
    tag: 'recetarios.getIngredientesDeRecetaByRecetaName',
    queryString: `SELECT
    ingredientes.name_ingrediente,
    amount_ingrediente
FROM
    receta_ingrediente
    INNER JOIN recetas ON receta_ingrediente.receta_id = recetas.receta_id
    INNER JOIN ingredientes ON receta_ingrediente.ingrediente_id = ingredientes.ingrediente_id
WHERE
    LOWER(recetas.name_receta) LIKE '%${name.toLowerCase()}%';`,
  });

export default {
  getAll,
  createNewIngrediente,
  getIngredientesDeRecetaByRecetaName,
};
