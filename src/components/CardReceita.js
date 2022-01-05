import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import '../assets/css/recipeCard.css';
import FavoriteBtn from './FavoriteBtn';
import ShareBtn from './ShareBtn';

function recipeCard(props, rota, pathname) {
  const { name, img, index, id } = props;
  const sizePath = 4;

  return (
    <Link
      className="card-receita"
      to={ {
        pathname: `${rota.length === sizePath ? '/comidas' : pathname}/${id}`,
        state: { id },
      } }
    >
      <Card data-testid={ `${index}-recipe-card` } className="recomendation">
        <Card.Img
          data-testid={ `${index}-card-img` }
          variant="top"
          src={ img }
        />
        <Card.Body>
          <div data-testid={ `${index}-recomendation-title` }>
            <Card.Title data-testid={ `${index}-card-name` }>
              { name }
            </Card.Title>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
}

function favCard(props) {
  const {
    recipe: { name, image: img, id, category, type, alcoholicOrNot, area }, index, recipe,
  } = props;

  return (
    <div className="card-receitaFavorita">
      <Link
        to={ {
          pathname: `${type === 'comida' ? 'comidas' : 'bebidas'}/${id}`,
          state: { id },
        } }
      >
        <div data-testid={ `${index}-recipe-card` }>
          <img
            data-testid={ `${index}-horizontal-image` }
            alt={ name }
            src={ img }
          />
        </div>
      </Link>
      <div className="descriptions">
        <div>
          <h4 data-testid={ `${index}-horizontal-top-text` }>
            { alcoholicOrNot === 'Alcoholic'
              ? `${alcoholicOrNot} - ${category}` : `${area} - ${category}`}
          </h4>
          <Link
            to={ {
              pathname: `${type === 'comida' ? 'comidas' : 'bebidas'}/${id}`,
              state: { id },
            } }
            data-testid={ `${index}-horizontal-name` }
          >
            { name }
          </Link>
        </div>
        <div className="descriptions-buttons">
          <div>
            <ShareBtn
              pageTitle="Receitas Favoritas"
              index={ index }
              id={ id }
              type={ type }
            />
          </div>
          <div>
            <FavoriteBtn
              product={ recipe }
              type={ type }
              id={ id }
              pageTitle="Receitas Favoritas"
              index={ index }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CardReceita(props) {
  const { pageTitle } = props;

  const { location: { pathname } } = useHistory();
  const rota = pathname.split('/');
  const favRecipes = () => pageTitle === 'Receitas Favoritas';
  // colocar div quebra o css da pagina, entao deixei assim para passar o lint
  return (
    <>
      {favRecipes() ? favCard(props)
        : recipeCard(props, rota, pathname)}
      {}
    </>
  );
}

CardReceita.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default CardReceita;
