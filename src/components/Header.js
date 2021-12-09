import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../assets/css/header.css';
import AppContext from '../context/AppContext';

function Header() {
  const { searchBar, toggleSearchBar } = useContext(AppContext);
  const history = useHistory();
  return (
    <header className="header-div">
      <nav className="header-nav">
        <button
          type="button"
          onClick={ () => {
            // substituir "teste" pela roda de "tela de parfil"
            history.push('/teste');
          } }
        >
          <img
            src={ profileIcon }
            alt="profileIcon"
          />
        </button>
        <Link
          to="/"
        >
          Receitas
        </Link>
        <button
          type="button"
          onClick={ () => {
            toggleSearchBar(!searchBar);
          } }
        >
          <img src={ searchIcon } alt="searchIcon" />
        </button>
      </nav>
      {/* subtituir componente de teste pelo componente "barra de busca" */}
      {/* {searchBar && <Teste />} */}
    </header>
  );
}

export default Header;
