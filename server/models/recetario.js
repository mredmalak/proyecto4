import Recetario from '../db/queries/recetario.js';
const haveQuery = (object) => {
  return Object.entries(object).length > 0;
};
export const getListRecetario = async (query) => {
  try {
    if (haveQuery(query)) {
      const name = query['receta'];
      const ingredientesDeReceta = Recetario.getIngredientesDeReceta(name);
      return ingredientesDeReceta;
    }
    const recetarios = Recetario.getAll();
    return recetarios;
  } catch (error) {
    throw new Error(error);
  }
};

export const createNewReceta = async (headers) => {
  try {
    const name = headers['name_receta']
    const process = headers['procces_receta']
    const porciones = headers['porciones_receta']
    const newReceta = Recetario.createNewReceta(name, process, porciones)
    return newReceta
  } catch (error) {
    throw new Error(error);
  }
}

export const getReceta = async (query) => {
  try {
    const name = query
    const receta = Recetario.getReceta(name)
    return receta
  } catch (error) {
    throw new Error(error);
  }
};
