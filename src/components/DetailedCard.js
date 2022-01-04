import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Recommendations from './Recommendations';
import StartRecipeBtn from './StartRecipeBtn';
import FavoriteBtn from './FavoriteBtn';
import ShareBtn from './ShareBtn';
import Details from './Details';
import '../assets/css/details.css';

function CardDetails(props) {
  const { product, history } = props;
  const prod = product;
  const type = prod.idMeal ? 'meal' : 'drink';
  const id = prod.idMeal || prod.idDrink;
  let embed;
  if (prod.strYoutube) {
    // Referência: https://stackoverflow.com/questions/573145/get-everything-after-the-dash-in-a-string-in-javascript
    embed = `https://www.youtube.com/embed/${prod.strYoutube.split('watch?v=')[1]}`;
  }

  return (
    <div>
      <Card data-testid="recipe-card" className="recomendation">
        <Card.Img
          data-testid="recipe-photo"
          variant="top"
          style={ { width: 'auto', height: 300, objectFit: 'cover' } }
          src={ type === 'meal' ? prod.strMealThumb : prod.strDrinkThumb }
        />
        <Card.Body>
          <Card.Title data-testid="recipe-title">
            { prod.strMeal || prod.strDrink }
          </Card.Title>
          <Card.Subtitle data-testid="recipe-category">
            { type === 'meal' ? prod.strCategory : prod.strAlcoholic }
          </Card.Subtitle>
          <div className="buttons">
            <FavoriteBtn product={ prod } type={ type } id={ id } />
            <ShareBtn history={ history } />
          </div>
        </Card.Body>
        <Details product={ prod } />
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
      <StartRecipeBtn history={ history } type={ type } id={ id } />
    </div>
  );
}

CardDetails.propTypes = {
  product: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CardDetails;
