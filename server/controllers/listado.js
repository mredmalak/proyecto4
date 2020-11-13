import { postListListado } from '../models/listado.js';

export const listListado = async (request, response) => {
  const { query } = request;
  try {
    const listado = await postListListado(query);
    return response.status(200).send(listado);
  } catch (error) {
    const { message } = error;
    return response.status(500).send({ message });
  }
};
