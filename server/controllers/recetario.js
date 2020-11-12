import { getListRecetario } from '../models/recetario.js';

export const listRecetario = async (request, response) => {
  const { query } = request;
  try {
    const recetario = await getListRecetario();
    return response.status(200).send(recetario);
  } catch (error) {
    const { message } = error;
    return response.status(500).send({ message });
  }
};
