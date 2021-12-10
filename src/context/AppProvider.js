import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import fetchAPI from '../fetchApi';

function AppProvider({ children }) {
  const INITIAL_STATE = {
    meals: [],
    drinks: [],
  };

  const [data, setData] = useState(INITIAL_STATE);

  const [recipeIngredients, setRecipeIngredients] = useState(INITIAL_STATE);

  const [comida, setComida] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const getDataFromAPI = async () => {
    const mealsList = await fetchAPI('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const drinksList = await fetchAPI('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    setData({
      meals: mealsList.meals,
      drinks: drinksList.drinks,
    });
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);

  return (
    <AppContext.Provider
      value={ { data,
        setData,
        recipeIngredients,
        setRecipeIngredients,
        comida,
        setComida,
        drinks,
        setDrinks,
        getDataFromAPI } }
    >
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
