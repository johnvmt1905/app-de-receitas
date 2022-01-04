import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { searchByDrinkId } from '../services/searchApi';
import FavoriteBtn from '../components/FavoriteBtn';
import ShareBtn from '../components/ShareBtn';
import IngredientSteps from '../components/IngredientSteps';

function InProgress(props) {
  const { history, match: { params: { id } } } = props;
  const [product, setProduct] = useState({});
  const detailsLink = `/bebidas/${id}`;
  const type = 'drink';

  useEffect(() => {
    const getDataFromAPI = async () => {
      const fetchProduct = await searchByDrinkId(id);
      setProduct(fetchProduct.drinks[0]);
    };
    getDataFromAPI();
  }, [id]);

  return (
    <div>
      <Card.Img
        data-testid="recipe-photo"
        variant="top"
        style={ { width: '100%', height: 300, objectFit: 'cover' } }
        src={ product.strDrinkThumb }
      />
      <Card.Body>
        <Card.Title data-testid="recipe-title">
          { product.strDrink }
        </Card.Title>
        <Card.Subtitle data-testid="recipe-category">
          { product.strAlcoholic }
        </Card.Subtitle>
        <div className="buttons">
          <FavoriteBtn product={ product } type={ type } id={ id } />
          <ShareBtn link={ detailsLink } />
        </div>
        <IngredientSteps
          history={ history }
          product={ product }
          type="cocktails"
          id={ id }
        />
      </Card.Body>
    </div>
  );
}

InProgress.propTypes = {
  history: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default InProgress;
