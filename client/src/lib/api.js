


export const getIngredientes =  async () => {
  try {
    const response = await fetch('http://localhost:4000/ingredientes')
    const data = await response.json()
    console.log(response)
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const getRecetas =  async () => {
  try {
    const response = await fetch('http://localhost:4000/recetario')
    const data = await response.json()
    console.log(response)
    return data;
  } catch (error) {
    console.log(error)
  }
}