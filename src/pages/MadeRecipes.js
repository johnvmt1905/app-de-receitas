import React from 'react';
import Header from '../components/Header';
import CardReceita from '../components/CardReceita';
import '../assets/css/favorite.css';

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
      <section className="card-favContainer">
        { doneRecipes.map((recipe, index) => (
          <CardReceita
            pageTitle="Receitas Feitas"
            key={ index }
            index={ index }
            recipe={ recipe }
          />
        )) }
      </section>
    </div>
  );
}

export default MadeRecipes;
