import React from 'react';
import { Route, Switch } from 'react-router';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Perfil from '../pages/Perfil';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/perfil" component={ Perfil } />
      <Route exact path="*" component={ NotFound } />
    </Switch>
  );
}

export default Routes;
