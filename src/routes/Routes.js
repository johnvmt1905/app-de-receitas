import React from 'react';
import { Route, Switch } from 'react-router';
import MainPage from '../pages/MainPage';
import NotFound from '../pages/NotFound';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ MainPage } />
      <Route exact path="*" component={ NotFound } />
    </Switch>
  );
}

export default Routes;
