import React, { useContext } from 'react';
import CardReceita from '../components/CardReceita';
import Context from '../context/AppContext';
import Header from '../components/Header';
import Filter from '../components/Filter';
import Footer from '../components/Footer';

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
      <div>
        <Header pageTitle="Bebidas" />
        <Filter url="https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list" />
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
        <Footer />
      </div>
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
