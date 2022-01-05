import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../assets/css/header.css';
import SearchBar from './SearchBar';

function searchBarIcon(toggleSearchBar, searchBar) {
  return (
    <input
      className="input-buttons"
      data-testid="search-top-btn"
      type="image"
      alt="SearchIcon"
      src={ searchIcon }
      onClick={ () => {
        toggleSearchBar(!searchBar);
      } }
    />
  );
}

function handleChange(value, setValue) {
  setValue((prevState) => (
    { ...prevState, value }
  ));
}

function getRadioValue(value, setValue) {
  setValue((prevState) => (
    { ...prevState, radio: value }
  ));
}

function favoritePage() {
  return (
    <div className="favorite-filters">
      <button
        type="button"
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>
    </div>
  );
}

function hasSearchBar(state, setValue) {
  return (
    <SearchBar getRadioValue={ getRadioValue } setValue={ setValue } state={ state } />
  );
}

// espera receber prop "pageTitle"  com o nome da página
function Header({ pageTitle = 'nome da página' }) {
  const HEADER_STATE = {
    value: '',
    radio: '',
  };

  const [searchBar, toggleSearchBar] = useState(false);
  const [state, setValue] = useState(HEADER_STATE);

  const hasButton = () => pageTitle === 'Comidas'
  || pageTitle === 'Bebidas' || pageTitle === 'Explorar Origem';
  const noSearchBar = () => pageTitle === 'Receitas Favoritas';
  const history = useHistory();

  return (
    <>
      <header className="header-div">
        <nav className="header-nav">
          <input
            className="input-buttons"
            data-testid="profile-top-btn"
            type="image"
            alt="Imagem do perfil"
            src={ profileIcon }
            onClick={ () => history.push('/perfil') }
          />
          <Link
            data-testid="page-title"
            to="/comidas"
          >
            { pageTitle }
          </Link>
          <div>
            { hasButton() && searchBarIcon(toggleSearchBar, searchBar) }
          </div>
        </nav>
      </header>
      {searchBar && (
        <div className="search-input-div">
          <input
            name="valueInput"
            value={ state.value }
            className="search-input"
            type="text"
            data-testid="search-input"
            onChange={ (event) => handleChange(event.target.value, setValue) }
          />
        </div>
      )}
      {noSearchBar() ? favoritePage() : hasSearchBar(state, setValue)}
    </>
  );
}

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default Header;
