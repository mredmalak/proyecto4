import Recetario from '../db/queries/recetario.js';
const haveQuery = (object) => {
  return Object.entries(object).length > 0;
};
export const getListRecetario = async (query) => {
  try {
    if (haveQuery(query)) {
      console.log('llegue aqui')
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
    return name
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

export const addIngredienteAReceta = async (headers) => {
  try {
    const recetaId = headers['receta_id']
    const ingredienteId = headers['ingrediente_id']
    const amountIngrediente = headers['amount_ingrediente']
    const newIngrediente = Recetario.addIngrediente(recetaId, ingredienteId, amountIngrediente)
    return newIngrediente
  } catch (error) {
    throw new Error(error);
  }
}
