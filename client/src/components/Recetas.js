import React from 'react'

import { getRecetas } from '../lib/api'


class RecetasList extends React.Component {
  state = {
    recetas: []
  }

  // Funcion para cargar todos los ingredientes desde la base de datos

  async componentDidMount() {
    try {
      const res = await getRecetas()
      console.log(res)
      this.setState({ recetas: res })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <>
        <h1>recetas</h1>
        <ul>
          {this.state.recetas.map((receta) => (
            <div>
              <li>Receta</li>
              <p key={receta.name_receta}>{receta.name_receta}</p>
              <li>Proceso de cocion</li>
              <p>{receta.procces_receta}</p>
              <li>Porciones</li>
              <p>{receta.porciones_receta}</p>
            </div>

          ))}
        </ul>
      </>
    )
  }


}

export default RecetasList