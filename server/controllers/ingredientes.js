import {
  getListIngrediente,
  createNewIngrediente,
  getIngredientesDeRecetaByRecetaName,
} from '../models/ingredientes.js';

export const listIngredientes = async (request, response) => {
  try {
    const ingredientes = await getListIngrediente();
    return response.status(200).send(ingredientes);
  } catch (error) {
    const { message } = error;
    return response.status(500).send({ message });
  }
};

export const createIngredientes = async (request, response) => {
  const { headers } = request;
  try {
    const ingrediente = await createNewIngrediente(headers);
    return response.status(200).send(ingrediente);
  } catch (error) {
    const { message } = error;
    return response.status(500).send({ message });
  }
};

export const listIngredientesByRecetaName = async (request, response) => {
  const {
    params: { name },
  } = request;

  try {
    const ingredientes = await getIngredientesDeRecetaByRecetaName(name);
    return response.status(200).send(ingredientes);
  } catch (error) {
    const { message } = error;
    return response.status(500).send({ message });
  }
};
