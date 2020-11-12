import { query } from '../index.js';

const getAll = async () => {
  const recetarios = await query({
    tag: 'recetarios.getAll',
    queryString: `SELECT name_receta FROM recetas`,
  });
  return recetarios;
};

export default { getAll };
