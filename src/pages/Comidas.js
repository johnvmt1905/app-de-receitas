import React, { useContext } from 'react';
import CardReceita from '../components/CardReceita';
import Context from '../context/AppContext';

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
      <section>
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
      </section>
    );
  }

  function notFound() {
    return (
      global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')
    );
  }

  return (
    <section>
      { meals !== null ? showReceitas() : notFound() }
    </section>
  );
}

export default Comidas;
