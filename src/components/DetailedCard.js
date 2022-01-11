import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Recommendations from './Recommendations';
import StartRecipeBtn from './StartRecipeBtn';
import FavoriteBtn from './FavoriteBtn';
import Details from './Details';
import ShareBtn from './ShareBtn';
import '../assets/css/details.css';

function CardDetails(props) {
  const { product, type, history } = props;
  const detailedProd = product;
  let embed;
  const prod = {
    id: detailedProd.idMeal || detailedProd.idDrink,
    type: type === 'meal' ? 'comida' : 'bebida',
    area: detailedProd.strArea || '',
    category: detailedProd.strCategory || '',
    alcoholicOrNot: detailedProd.strAlcoholic || '',
    name: detailedProd.strMeal || detailedProd.strDrink,
    image: detailedProd.strMealThumb || detailedProd.strDrinkThumb,
  };
  if (detailedProd.strYoutube) {
    // Referência: https://stackoverflow.com/questions/573145/get-everything-after-the-dash-in-a-string-in-javascript
    embed = `https://www.youtube.com/embed/${detailedProd.strYoutube.split('watch?v=')[1]}`;
  }
  const detailsLink = `/${type === 'meal' ? 'comidas' : 'bebidas'}/${prod.id}`;
  const returnButton = `/${type === 'meal' ? 'comidas' : 'bebidas'}`;
  return (
    <div>
      <button
        type="button"
        onClick={ () => (
          history.push(returnButton)
        ) }
      >
        Voltar
      </button>
      <Card data-testid="recipe-card" className="recomendation">
        <Card.Img
          data-testid="recipe-photo"
          variant="top"
          style={ { width: 'auto', height: 300, objectFit: 'cover' } }
          src={ prod.image }
        />
        <Card.Body>
          <Card.Title data-testid="recipe-title">
            { prod.name }
          </Card.Title>
          <Card.Subtitle data-testid="recipe-category">
            { type === 'meal' ? prod.category : prod.alcoholicOrNot }
          </Card.Subtitle>
          <div className="buttons">
            <FavoriteBtn product={ prod } />
            <ShareBtn link={ detailsLink } />
          </div>
        </Card.Body>
        <Details product={ detailedProd } />
        { type === 'meal'
          && <iframe
            width="560"
            height="315"
            title={ prod.strTitle }
            src={ embed }
            allowFullScreen
            data-testid="video"
          /> }
      </Card>
      <Card>
        <Card.Title>Recomendadas</Card.Title>
        <Recommendations type={ type } />
      </Card>
      <StartRecipeBtn history={ history } type={ type } id={ prod.id } />
    </div>
  );
}

CardDetails.propTypes = {
  product: PropTypes.shape({}).isRequired,
  type: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CardDetails;
