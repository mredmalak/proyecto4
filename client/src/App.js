import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header'
import IngredientesSelect from './components/IngredientesSelect';
import RecetasList from './components/Recetas';
import NewReceta from './components/NewReceta'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ingredientes" component={IngredientesSelect} />
        <Route path="/recetas/new" component={NewReceta} />
        <Route path="/recetas" component={RecetasList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
