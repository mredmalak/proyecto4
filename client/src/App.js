import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import IngredientesSelect from './components/IngredientesSelect';
import RecetasList from './components/Recetas';
import NewReceta from './components/NewReceta';
import NewIngrediente from './components/NewIngrediente';
import RecetaIngredientes from './components/RecetaIngredientes';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ingredientes/new" component={NewIngrediente} />
        <Route path="/ingredientes" component={IngredientesSelect} />
        <Route path="/recetas/new" component={NewReceta} />
        <Route path="/recetas/:name" component={RecetaIngredientes} />
        <Route path="/recetas" component={RecetasList} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
