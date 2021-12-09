import React, { useContext } from 'react';
import CardReceita from '../components/CardReceita';
import Context from '../context/AppContext';

function Bebidas() {
  const { data: { drinks }, recipeIngredients } = useContext(Context);

  function selectRecipe() {
    if (recipeIngredients.drinks.length > 0) {
      return recipeIngredients.drinks;
    }
    return drinks;
  }

  function showDrinks() {
    const MAX_DRINKS = 12;
    return (
      <section>
        <section className="card-container">
          { selectRecipe().map(({ strDrink, strDrinkThumb, idDrink }, index) => (
            index < MAX_DRINKS
          && <CardReceita
            key={ index }
            name={ strDrink }
            img={ strDrinkThumb }
            index={ index }
            id={ idDrink }
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
      { drinks !== null ? showDrinks() : notFound() }
    </section>
  );
}

export default Bebidas;
