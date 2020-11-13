import Listado from '../db/queries/listado.js';
const haveQuery = (object) => {
  return Object.entries(object).length > 0;
};
export const postListListado = async (query) => {
  console.log(haveQuery(query));
  try {
    if (haveQuery(query)) {
      console.log('alex es el amo');
      const name = query['name'];
      const ingredientesDeListado = Listado.postIngredientesDeListado(name);
      return ingredientesDeListado;
    }
    const listado = Listado.postAll();
    return listado;
  } catch (error) {
    throw new Error(error);
  }
};
