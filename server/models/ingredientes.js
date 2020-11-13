import Ingrediente from '../db/queries/ingrediente.js';

export const getListIngrediente = async () => {
  try {
    const ingredientes = Ingrediente.getAll();
    return ingredientes;
  } catch (error) {
    throw new Error(error);
  }
};

export const createNewIngrediente = async (headers) => {
  try {
    const name = headers['name_ingrediente']
    const newIngrediente = Ingrediente.createNewIngrediente(name)
    return newIngrediente
  } catch (error) {
    throw new Error(error);
  }
}