import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import CardIngredient from '../components/CardIngredient';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreFoodIngredient() {
  const { recipeIngredients, setRecipeIngredients } = useContext(Context);
  const [ingredientsMeals, setIngredientesMeals] = useState();
  const history = useHistory();
  const URL_INGREDIENTS_MEALS = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';

  async function getIngredients() {
    const data = await fetchAPI(URL_INGREDIENTS_MEALS);
    setIngredientesMeals(data.meals);
  }

  async function setRecipeMeal(ingredient) {
    const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const recipe = await fetchAPI(URL);
    setRecipeIngredients({ ...recipeIngredients, meals: recipe.meals });
    history.push('/comidas');
  }

  useEffect(() => {
    getIngredients();
  }, []);

  const MAX_MEALS = 12;

  return (
    <>
      <Header pageTitle="Explorar Ingredientes" />
      <section>
        { ingredientsMeals.map(({ strIngredient }, index) => (
          index < MAX_MEALS
            && (
              <button
                key={ index }
                type="button"
                onClick={ () => setRecipeMeal(strIngredient) }
              >
                <CardIngredient
                  name={ strIngredient }
                  index={ index }
                  img={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
                />
              </button>
            )
        )) }
      </section>
      <Footer />
    </>
  );
}

export default ExploreFoodIngredient;
