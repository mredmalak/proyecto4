import React from 'react'

import { createNewReceta, getIngredientes, getRecetaByName, addIngredienteAReceta, loadRecetaIngredientes } from '../lib/api'

class NewReceta extends React.Component {
  state = {
    formData: {
      name_receta: 'test',
      process_receta: '',
      porciones_receta: 0
    },
    ingredientes: [],
    nueva_receta: '',
    recetaCreated: false,
    receta: {
      receta_id: 0,
      name_receta: '',
      process_receta: '',
      porciones_receta: 0
    },
    formData2: {
      receta_id: 0,
      ingrediente_id: 0,
      amount_ingrediente: ''
    },
    ingredientesDeReceta: [],
    numeroDeIngredientes: 0
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

  loadRecetaDetails = async (receta) => {
    this.setState({ recetaCreated: true })
    try {
      const res = await getRecetaByName(receta)
      this.setState({ receta: { ...res[0] } })
    } catch (err) {
      console.log(err)
    }
  }


  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value}
    console.log(formData)
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      const res = await createNewReceta(this.state.formData)
      this.setState({ nueva_receta: res.nueva_receta }, async () => {
        try {
          await this.loadRecetaDetails(res.nueva_receta)
        } catch (err) {
          console.log(err)
        }
      })
    } catch (err) {
      console.log(err)
    }
  }

  handleIngredienteChange = event => {
    console.log(event.target.value, event.target.name)
    const recetaId = this.state.receta.receta_id
    const formData2 = { ...this.state.formData2, [event.target.name]: event.target.value, receta_id: recetaId}
    console.log(formData2)
    this.setState({ formData2 })
  }

  loadIngredientes = async (receta) => {
    try {
      const res = await loadRecetaIngredientes(receta)
      this.setState({ ingredientesDeReceta: res })
    } catch (err) {
      console.log(err)
    }
  }

  handleIngredienteSubmit = async event => {
    event.preventDefault()
    try {
      const res = await addIngredienteAReceta(this.state.formData2)
      const numeroDeIngredientes = this.state.numeroDeIngredientes + 1
      this.setState({ numeroDeIngredientes }, async () => {
        try {
          await this.loadIngredientes(this.state.nueva_receta)
        } catch (err) {
          console.log(err)
        }
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <>
        <h1>Nueva Receta</h1>
        {this.state.recetaCreated === false &&         
        <form onSubmit={this.handleSubmit}>
          <label>Nombre de tu receta</label>
          <input
            name="name_receta"
            onChange={this.handleChange} 
          />
          <label>Procceso de cocion</label>
          <input
            name="process_receta"
            onChange={this.handleChange} 
          />
          <label>Porciones - procura que se ajuste a seis porciones</label>
          <input
            name="porciones_receta"
            onChange={this.handleChange}
            type="number" 
          />
          <button>Crear tu nueva receta</button>
        </form>}
        {this.state.recetaCreated === true &&
        <>
          <h2>Tu receta de {this.state.receta.name_receta} de {this.state.receta.porciones_receta} porciones fue creada. Ahora añade los ingredientes</h2>
          {this.state.numeroDeIngredientes > 0 &&
          this.state.ingredientesDeReceta.map((ingrediente) => (
            <>
              <p>Ingrediente: {ingrediente.name_ingrediente}</p>
              <p>Cantidad: {ingrediente.amount.ingrediente}</p>
            </>
          ))}
          <form onSubmit={this.handleIngredienteSubmit}>
          <select onChange={this.handleIngredienteChange} name="ingrediente_id">
            <option>Escoge ingrediente de la lista</option>
            {this.state.ingredientes.map((ingrediente) => (
              <option value={ingrediente.ingrediente_id}>{ingrediente.name_ingrediente}</option>
            ))}
          </select>
          <label>Cantidad - ml, gramos o unidades</label>
          <input
            name="amount_ingrediente"
            onChange={this.handleIngredienteChange} 
          />
          <button>Añadir ingrediente a tu receta</button>
          </form>
        </>

        }
      </>
    )
  }


}

export default NewReceta