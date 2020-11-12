import { query } from '../index.js';

const getAll = async () => {
  const recetarios = await query({
    tag: 'recetarios.getAll',
    queryString: `SELECT
    recetas.name_receta,
    ingredientes.name_ingrediente,
    amount_ingrediente
FROM
    receta_ingrediente
    INNER JOIN recetas ON receta_ingrediente.receta_id = recetas.receta_id
    INNER JOIN ingredientes ON receta_ingrediente.ingrediente_id = ingredientes.ingrediente_id;`,
  });
  return recetarios;
};

export default { getAll };
