import React from 'react';
import { withRouter } from 'react-router-dom';
import { getRecetaByName, getIngredientesByRecetaName } from '../lib/api.js';

class RecetaIngredientes extends React.Component {
  state = {
    receta: undefined,
    loading: true,
    ingredientes: undefined,
  };

  async componentDidMount() {
    const name = this.props.match.params.name;
    const [recetaData] = await getRecetaByName(name);
    const ingredientes = await getIngredientesByRecetaName(name);
    this.setState({ receta: recetaData, ingredientes });
    this.setState({ loading: false });
  }

  render() {
    return (
      <>
        {this.state.loading === false && (
          <>
            <h1>{this.state.receta.name_receta}</h1>
            <p>Porciones de receta: {this.state.receta.porciones_receta}</p>
            <h2>Proceso</h2>
            <p>{this.state.receta.procces_receta}</p>
            <ul>
              {this.state.ingredientes.map((ingrediente) => {
                console.log(ingrediente);
                return (
                  <li key={ingrediente.name_ingrediente}>
                    {ingrediente.name_ingrediente}, cantidad:{' '}
                    {ingrediente.amount_ingrediente}
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </>
    );
  }
}

export default withRouter(RecetaIngredientes);
