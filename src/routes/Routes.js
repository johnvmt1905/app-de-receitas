import React from 'react';
import { Route, Switch } from 'react-router';
import Explorer from '../pages/Explorer';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import Login from '../pages/Login';
import MadeRecipes from '../pages/MadeRecipes';
import NotFound from '../pages/NotFound';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/explorar" component={ Explorer } />
      <Route exact path="/receitas-favoritas" component={ FavoriteRecipes } />
      <Route exact path="/receitas-feitas" component={ MadeRecipes } />
      <Route exact path="*" component={ NotFound } />
    </Switch>
  );
}

export default Routes;
