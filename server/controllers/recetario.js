import {getListRecetario} from '../models/recetario.js';

export const listRecetario = async (request, response) => {
  
  const recetario = await getListRecetario();

  return response.send({
    message: 'lasagna',
  });
};