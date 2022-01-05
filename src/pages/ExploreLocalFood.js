import React, { useContext, useState } from 'react';
import Context from '../context/AppContext';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CardReceita from '../components/CardReceita';
import '../assets/css/exploreLocal.css';

function ExploreLocalFood() {
  const MAX_MEALS = 12;
  const [filterByLocation, setFilterByLocation] = useState('All');
  const {
    data: { meals },
    // recipeIngredients,
    placesOfOrigin: { placesOfOrigin },
  } = useContext(Context);

  function selectRecipes() {
    // if (recipeIngredients.meals.length > 0) {
    //   return recipeIngredients.meals;
    // }
    const data = meals.filter((element, index) => index < MAX_MEALS);
    return data;
  }

  function handleChange({ target: { value } }) {
    setFilterByLocation(value);
  }

  function showReceitas() {
    return (
      <div>
        <Header pageTitle="Explorar Origem" />
        <section className="section-select">
          <select
            onChange={ (event) => handleChange(event) }
            data-testid="explore-by-area-dropdown"
          >
            <option value="All" data-testid="All-option">All</option>
            {
              placesOfOrigin
                .map((element) => (
                  <option
                    value={ element }
                    key={ element }
                    data-testid={ `${element}-option` }
                  >
                    {element}
                  </option>))
            }
          </select>
        </section>

        <section className="card-container">
          {selectRecipes()
            .map(
              ({ strMeal, strMealThumb, idMeal }, index) => index < MAX_MEALS && (
                <CardReceita
                  key={ index }
                  name={ strMeal }
                  img={ strMealThumb }
                  index={ index }
                  id={ idMeal }
                />
              ),
            )
            .filter((element) => {
              if (filterByLocation !== 'All') {
                return element.strArea === filterByLocation;
              } return selectRecipes();
            })}
        </section>
        <Footer />
      </div>
    );
  }

  return <section>{showReceitas()}</section>;
}

export default ExploreLocalFood;
