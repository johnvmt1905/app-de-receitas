import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { searchByMealId } from '../services/searchApi';
import FavoriteBtn from '../components/FavoriteBtn';
import ShareBtn from '../components/ShareBtn';
import IngredientSteps from '../components/IngredientSteps';

function InProgress(props) {
  const { history, match: { params: { id } } } = props;
  const [detailedProd, setDetailedProd] = useState({});
  const [prod, setProd] = useState({});
  const detailsLink = `/comidas/${id}`;

  useEffect(() => {
    const getDataFromAPI = async () => {
      const fetchProduct = await searchByMealId(id);
      const prodObj = {
        id: fetchProduct.meals[0].idMeal,
        type: 'comida',
        area: fetchProduct.meals[0].strArea,
        category: fetchProduct.meals[0].strCategory,
        alcoholicOrNot: '',
        name: fetchProduct.meals[0].strMeal,
        image: fetchProduct.meals[0].strMealThumb,
      };
      setDetailedProd(fetchProduct.meals[0]);
      setProd(prodObj);
    };
    getDataFromAPI();
  }, [id]);

  return (
    <div>
      <Card.Img
        data-testid="recipe-photo"
        variant="top"
        style={ { width: '100%', height: 300, objectFit: 'cover' } }
        src={ prod.image }
      />
      <Card.Body>
        <Card.Title data-testid="recipe-title">
          { prod.name }
        </Card.Title>
        <Card.Subtitle data-testid="recipe-category">
          { prod.category }
        </Card.Subtitle>
        <div className="buttons">
          <FavoriteBtn product={ prod } />
          <ShareBtn link={ detailsLink } />
        </div>
        <IngredientSteps
          history={ history }
          product={ detailedProd }
          type="meals"
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
