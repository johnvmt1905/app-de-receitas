import React, { useContext } from 'react';
import CardReceita from '../components/CardReceita';
import Context from '../context/AppContext';
import Filter from '../components/Filter';
import Footer from '../components/Footer';
import '../assets/css/foodContainers.css';
import Header from '../components/Header';

function Comidas() {
  const { data: { meals }, recipeIngredients } = useContext(Context);

  function selectRecipes() {
    if (recipeIngredients.meals.length > 0) {
      return recipeIngredients.meals;
    }
    return meals;
  }

  function showReceitas() {
    const MAX_MEALS = 12;
    return (
      <div>
        <Header pageTitle="Comidas" needTheSearchBar="true" />
        <Filter />
        <section className="card-container">
          { selectRecipes().map(({ strMeal, strMealThumb, idMeal }, index) => (
            index < MAX_MEALS
          && <CardReceita
            key={ index }
            name={ strMeal }
            img={ strMealThumb }
            index={ index }
            id={ idMeal }
          />
          )) }
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <section>
      {showReceitas()}
    </section>
  );
}

export default Comidas;
