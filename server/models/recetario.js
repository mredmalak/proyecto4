import Recetario from '../db/queries/recetario.js';
const haveQuery = (object) => {
  return Object.entries(object).length > 0;
};
export const getListRecetario = async (query) => {
  console.log(haveQuery(query));
  try {
    if (haveQuery(query)) {
      console.log('alex es el amo')
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

// export const getListRecetario = async () => {
//   try {
//     const recetarios = Recetario.getAll();
//     return recetarios;
//   } catch (error) {
//     throw new Error(error);
//   }
// };
