const URL = process.env.REACT_APP_URL;

export const getIngredientes = async () => {
  try {
    const response = await fetch(`${URL}/ingredientes`);
    const data = await response.json();
    console.log(response);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getRecetas = async () => {
  try {
    const response = await fetch(`${URL}/recetario`);
    const data = await response.json();
    console.log(response);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createNewReceta = async ({
  name_receta,
  process_receta,
  porciones_receta,
}) => {
  try {
    const response = await fetch(`${URL}/recetario`, {
      method: `POST`,
      headers: {
        name_receta: name_receta,
        procces_receta: process_receta,
        porciones_receta: porciones_receta,
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const createNewIngrediente = async ({ name_ingrediente }) => {
  try {
    const response = await fetch(`${URL}/ingredientes`, {
      method: `POST`,
      headers: {
        name_ingrediente: name_ingrediente,
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getRecetaByName = async (receta) => {
  try {
    const response = await fetch(`${URL}/recetario/${receta}`);
    const data = await response.json();
    console.log(response);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addIngredienteAReceta = async ({
  receta_id,
  ingrediente_id,
  amount_ingrediente,
}) => {
  try {
    const response = await fetch(`${URL}/recetario/receta_ingrediente`, {
      method: `POST`,
      headers: {
        receta_id: receta_id,
        ingrediente_id: ingrediente_id,
        amount_ingrediente: amount_ingrediente,
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const loadRecetaIngredientes = async (receta) => {
  try {
    const response = await fetch(`${URL}/recetario?receta=${receta}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getIngredientesByRecetaName = async (name) => {
  try {
    const response = await fetch(`${URL}/ingredientes/receta/${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
