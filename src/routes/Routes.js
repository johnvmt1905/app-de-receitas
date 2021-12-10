import React from 'react';
import { Route, Switch } from 'react-router';
import Bebidas from '../pages/Bebidas';
import Comidas from '../pages/Comidas';
import NotFound from '../pages/NotFound';
import Perfil from '../pages/Perfil';
import Login from '../pages/Login';
import Explorer from '../pages/Explorer';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import MadeRecipes from '../pages/MadeRecipes';

function Routes() {
  return (
    <Switch>
      <Route exact path="/comidas" component={ Comidas } />
      <Route exact path="/bebidas" component={ Bebidas } />
      <Route exact path="/" component={ Login } />
      <Route path="/perfil" component={ Perfil } />
      <Route exact path="/explorar" component={ Explorer } />
      <Route exact path="/receitas-favoritas" component={ FavoriteRecipes } />
      <Route exact path="/receitas-feitas" component={ MadeRecipes } />
      <Route exact path="*" component={ NotFound } />
    </Switch>
  );
}

export default Routes;
