import React, { useContext } from 'react';
import Context from '../context/AppContext';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CardReceita from '../components/CardReceita';
import '../assets/css/exploreLocal.css';

function ExploreLocalFood() {
  const {
    data: { meals },
    recipeIngredients,
    placesOfOrigin: { placesOfOrigin },
  } = useContext(Context);

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
        <Header pageTitle="Explorar Origem" />
        <section className="section-select">
          <select name="" id="" data-testid="explore-by-area-dropdown">
            {
              placesOfOrigin
                .map((element) => (
                  <option
                    value=""
                    key={ element }
                    data-testid={ `${element}-option` }
                  >
                    {element}
                  </option>))
            }
          </select>
        </section>

        <section className="card-container">
          {selectRecipes().map(
            ({ strMeal, strMealThumb, idMeal }, index) => index < MAX_MEALS && (
              <CardReceita
                key={ index }
                name={ strMeal }
                img={ strMealThumb }
                index={ index }
                id={ idMeal }
              />
            ),
          )}
        </section>
        <Footer />
      </div>
    );
  }

  return <section>{showReceitas()}</section>;
}

export default ExploreLocalFood;
