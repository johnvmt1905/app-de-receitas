import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../assets/css/header.css';
import SearchBar from './SearchBar';
import AppContext from '../context/AppContext';

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

function handleClick(name, setFilter, setHasFilter) {
  if (name === 'All') {
    setHasFilter(false);
    setFilter(name);
  }
  if (name === 'comida' || name === 'bebida') {
    setFilter(name);
    setHasFilter(true);
  }
}

function favoritePage(setFilter, setHasFilter) {
  return (
    <div className="favorite-filters">
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => handleClick('All', setFilter, setHasFilter) }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => handleClick('comida', setFilter, setHasFilter) }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => handleClick('bebida', setFilter, setHasFilter) }
      >
        Drinks
      </button>
    </div>
  );
}

function hasSearchBar(state, setValue, needTheSearchBar) {
  return (
    needTheSearchBar
    && <SearchBar
      getRadioValue={ getRadioValue }
      setValue={ setValue }
      state={ state }
    />
  );
}

// espera receber prop "pageTitle"  com o nome da página
function Header({ pageTitle = 'nome da página', needTheSearchBar = false }) {
  const { setFavFilter, setHasFilter } = useContext(AppContext);
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
      {noSearchBar() ? favoritePage(setFavFilter, setHasFilter)
        : hasSearchBar(state, setValue, needTheSearchBar)}
    </>
  );
}

Header.propTypes = {
  needTheSearchBar: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
};

export default Header;
