import Recetario from '../db/queries/recetario.js';

export const getListRecetario = async () => {
  try {
    const recetarios = Recetario.getAll();
    return recetarios;
  } catch (error) {
    throw new Error(error);
  }
};
