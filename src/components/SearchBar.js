import PropTypes from 'prop-types';
import React from 'react';
import { useLocation } from 'react-router';
import { searchForFoodIngredient,
  searchByFoodName,
  searchForTheFirstLetterOfTheFood,
  searchForBeverageIngredient,
  searchNameOfDrink,
  searchForTheFirstLetterOfTheDrink } from '../services/searchApi';

function requestApi(radio, value, location) {
  if (location.pathname === '/comidas') {
    if (radio === 'Ingrediente') {
      searchForFoodIngredient(value);
    } else if (radio === 'Nome') {
      searchByFoodName(value);
    } else if (radio === 'Primeira letra' && value.length < 2) {
      searchForTheFirstLetterOfTheFood(value);
    } else {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
  } else if (location.pathname === '/bebidas') {
    if (radio === 'Ingrediente') {
      searchForBeverageIngredient(value);
    } else if (radio === 'Nome') {
      searchNameOfDrink(value);
    } else if (radio === 'Primeira letra' && value.length < 2) {
      searchForTheFirstLetterOfTheDrink(value);
    } else {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
  }
}

function SearchBar({ getRadioValue, setValue, state: { radio, value } }) {
  const location = useLocation();
  return (
    <div className="search-bar">
      <div className="inputs-radio">
        <label htmlFor="ingredient-search-radio">
          <input
            type="radio"
            name="search-radio"
            id="ingredient-search-radio"
            className="Ingrediente"
            data-testid="ingredient-search-radio"
            onClick={ (event) => getRadioValue(event.target.className, setValue) }
          />
          Ingrediente
        </label>
        <label htmlFor="name-search-radio">
          <input
            type="radio"
            name="search-radio"
            id="name-search-radio"
            className="Nome"
            data-testid="name-search-radio"
            onClick={ (event) => getRadioValue(event.target.className, setValue) }
          />
          Nome
        </label>
        <label htmlFor="first-letter-search-radio">
          <input
            type="radio"
            name="search-radio"
            id="first-letter-search-radio"
            className="Primeira letra"
            data-testid="first-letter-search-radio"
            onClick={ (event) => getRadioValue(event.target.className, setValue) }
          />
          Primeira letra
        </label>
      </div>
      <div className="search-button">
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ () => requestApi(radio, value, location) }
        >
          Buscar
        </button>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  getRadioValue: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  state: PropTypes.shape({
    radio: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default SearchBar;
