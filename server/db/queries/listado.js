import { query } from '../index.js';

const postAll = async () => {
  const listado = await query({
    tag: 'listado.postAll',
    queryString: `INSERT INTO name_ingrediente FROM ingredientes`,
  });
  return listado;
};

const postIngredientesDeListado = async (name) => {
  const listado = await query({
    tag: 'listado.postIngredientesDeListado',
    queryString: `INSERT INTO
    ingredientes.name_ingrediente,
FROM
    ingredientes
    SELECT ingredientes ON name_ingrediente
WHERE
    name_ingrediente = '${name}'`,
  });
  return listado;
};

export default { postAll, postIngredientesDeListado };
