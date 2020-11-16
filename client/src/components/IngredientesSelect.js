import React from 'react'

import { getIngredientes } from '../lib/api'


class IngredientesSelect extends React.Component {
  state = {
    ingredientes: []
  }

  // Funcion para cargar todos los ingredientes desde la base de datos

  async componentDidMount() {
    try {
      const res = await getIngredientes()
      this.setState({ ingredientes: res })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <>
        <h1>Ingredientes</h1>
        <ul>
          {this.state.ingredientes.map((ingrediente) => (
            <li key={ingrediente.name_ingrediente}>{ingrediente.name_ingrediente}</li>
          ))}
        </ul>
      </>
    )
  }


}

export default IngredientesSelect