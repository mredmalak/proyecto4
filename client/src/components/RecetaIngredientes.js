import React from 'react';
import { withRouter } from 'react-router-dom';
import { getRecetaByName } from '../lib/api.js';

class RecetaIngredientes extends React.Component {
  state = {
    receta: undefined,
    loading: true,
  };

  async componentDidMount() {
    const name = this.props.match.params.name;
    const [recetaData] = await getRecetaByName(name);
    this.setState({ receta: recetaData });
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
          </>
        )}
      </>
    );
  }
}

export default withRouter(RecetaIngredientes);
