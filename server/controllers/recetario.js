import { getListRecetario, createNewReceta } from '../models/recetario.js';

export const listRecetario = async (request, response) => {
  const { query } = request;
  console.log({ query })
  try {
    const recetario = await getListRecetario(query);
    return response.status(200).send(recetario);
  } catch (error) {
    const { message } = error;
    return response.status(500).send({ message });
  }
};

export const createReceta = async (request, response) => {
  const { headers } = request;
  try {
    const receta = await createNewReceta(headers);
    return response.status(200).send(receta);
  } catch (error) {
    const { message } = error;
    return response.status(500).send({ message })
  }
}
