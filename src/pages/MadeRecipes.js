import React from 'react';
import Header from '../components/Header';
import CardReceita from '../components/CardReceita';

function MadeRecipes() {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  return (
    <div>
      <Header pageTitle="Receitas Feitas" />
      <button type="button" data-testid="filter-by-all-btn">
        All
      </button>
      <button type="button" data-testid="filter-by-food-btn">
        Food
      </button>
      <button type="button" data-testid="filter-by-drink-btn">
        Drinks
      </button>
      { doneRecipes.map((recipe, index) => (
        <CardReceita
          key={ index }
          pageTitle="Receitas Feitas"
          index={ index }
          recipe={ recipe }
        />
      )) }
    </div>
  );
}

export default MadeRecipes;
