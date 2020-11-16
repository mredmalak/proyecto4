import React from 'react';

import { createNewIngrediente } from '../lib/api';

class NewIngrediente extends React.Component {
  state = {
    formData: {
      name_ingrediente: '',
    },
  };

  // Funcion para crear nuevo ingrediente.

  handleChange = (event) => {
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value,
    };
    console.log(formData);
    this.setState({ formData });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await createNewIngrediente(this.state.formData);
      this.setState({ ingredientes: res.name_ingrediente });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <>
        <h1>Añade tu nuevo ingrediente </h1>
        <form onSubmit={this.handleSubmit}>
          <input name="name_ingrediente" onChange={this.handleChange}></input>
          <button>Crea tu nuevo ingrediente</button>
        </form>
      </>
    );
  }
}

export default NewIngrediente;
