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
import ExploreFood from '../pages/ExploreFood';
import ExploreDrinks from '../pages/ExploreDrinks';
import ExploreFoodIngredient from '../pages/ExploreFoodIngredient';
import ExploreDrinkIngredient from '../pages/ExploreDrinkIngredient';
import ExploreLocalFood from '../pages/ExploreLocalFood';
import MealDetails from '../pages/MealDetails';
import DrinkDetails from '../pages/DrinkDetails';

function Routes() {
  return (
    <Switch>
      <Route exact path="/comidas" component={ Comidas } />
      <Route exact path="/bebidas" component={ Bebidas } />
      <Route exact path="/comidas/:mealId" component={ MealDetails } />
      <Route exact path="/bebidas/:drinkId" component={ DrinkDetails } />
      <Route exact path="/" component={ Login } />
      <Route exact path="/perfil" component={ Perfil } />
      <Route exact path="/explorar" component={ Explorer } />
      <Route exact path="/explorar/comidas" component={ ExploreFood } />
      <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
      <Route
        exact
        path="/explorar/comidas/ingredientes"
        component={ ExploreFoodIngredient }
      />
      <Route
        exact
        path="/explorar/bebidas/ingredientes"
        component={ ExploreDrinkIngredient }
      />
      <Route exact path="/explorar/comidas/area" component={ ExploreLocalFood } />
      <Route exact path="/receitas-favoritas" component={ FavoriteRecipes } />
      <Route exact path="/receitas-feitas" component={ MadeRecipes } />
      <Route exact path="*" component={ NotFound } />
      <Route exact path="/explorar/bebidas/area" component={ NotFound } />
    </Switch>
  );
}

export default Routes;
