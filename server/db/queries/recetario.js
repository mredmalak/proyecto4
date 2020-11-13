import { query } from '../index.js';

const getAll = async () => {
  const recetarios = await query({
    tag: 'recetarios.getAll',
    queryString: `SELECT name_receta FROM recetas`,
  });
  return recetarios;
};

const getIngredientesDeReceta = async (name) => {
  const recetarios = await query({
    tag: 'recetarios.getIngreidentesDeReceta',
    queryString: `SELECT
    recetas.name_receta,
    ingredientes.name_ingrediente,
    amount_ingrediente
FROM
    receta_ingrediente
    INNER JOIN recetas ON receta_ingrediente.receta_id = recetas.receta_id
    INNER JOIN ingredientes ON receta_ingrediente.ingrediente_id = ingredientes.ingrediente_id
WHERE
    recetas.name_receta = '${name}'`,
  });
  return recetarios;
};

const createNewReceta = async (name, process, porciones) => {
  const newReceta = await query({
    tag: 'recetarios.createNewReceta',
    queryString: `INSERT INTO recetas (name_receta, procces_receta, porciones_receta) VALUES
    ('${name}', '${process}', ${porciones})`,
  })
  return newReceta
}

const getReceta = async (name) => {
  const receta = await query({
    tag: 'recetarios.getReceta',
    queryString: `SELECT * FROM recetas WHERE name_receta LIKE '%${name}%'`
  })
  return receta
}

export default { getAll, getIngredientesDeReceta, createNewReceta, getReceta };
