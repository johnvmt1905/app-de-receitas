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
  const hasButton = () => pageTitle === 'Comidas' || pageTitle === 'Explorar Origem';
  const history = useHistory();
  return (
    <header className="header-div">
      <nav className="header-nav">
        <input
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
      {/* subtituir componente de teste pelo componente "barra de busca" */}
      {/* {searchBar && <Teste />} */}
    </header>
  );
}

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default Header;
