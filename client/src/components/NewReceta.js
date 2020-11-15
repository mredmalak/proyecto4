import React from 'react'


class NewReceta extends React.Component {
  state = {
    formData: {
      name_receta: 'test',
      process_receta: '',
      porciones_receta: 0
    }
  }

  // Funcion para cargar todos los ingredientes desde la base de datos

  async componentDidMount() {
    console.log('working')
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value}
    console.log(formData)
    this.setState({ formData })
  }

  render() {
    return (
      <>
        <h1>Nueva Receta</h1>
        <form>
          <label>Nombre de tu receta</label>
          <input
            name="name_receta"
            onChange={this.handleChange} 
          />
          <label>Procceso de cocion</label>
          <control></control>
          <label>Porciones - procura que se ajuste a seis porciones</label>
          <input></input>
          <button>Crear tu nueva receta</button>
        </form>
      </>
    )
  }


}

export default NewReceta