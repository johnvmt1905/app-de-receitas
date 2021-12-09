import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../assets/css/header.css';

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

// expera receber prop "pageTitle"  com o nome da página
function Header({ pageTitle = 'nome da página' }) {
  const [searchBar, toggleSearchBar] = useState(false);
  const hasButton = () => pageTitle === 'Explorar' || pageTitle === 'Explorar Origem';
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
            onClick={ () => history.push('/teste') }
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
            className="search-input"
            type="text"
            data-testId="search-input"
          />
        </div>
      )}
    </>
  );
}

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default Header;
