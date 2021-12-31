import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/AppContext';
import BlackHeart from '../images/blackHeartIcon.svg';
import WhiteHeart from '../images/whiteHeartIcon.svg';

function FavoriteBtn({ product, id, type }) {
  const { favoriteRecipes, setFavoriteRecipes } = useContext(Context);
  const prod = product;
  const isFavorited = favoriteRecipes.find((recipe) => recipe.id === id);

  function handleFavorite() {
    if (isFavorited) {
      const preLocal = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const finalArr = preLocal.filter((data) => data[id] !== prod[id]);
      localStorage.setItem('favoriteRecipes', JSON.stringify(finalArr));
      setFavoriteRecipes(favoriteRecipes.filter((recipe) => recipe.id !== id));
    } else {
      const preLocal = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const prodObj = {
        id,
        type: type === 'meal' ? 'comida' : 'bebida',
        area: prod.strArea || '',
        category: prod.strCategory || '',
        alcoholicOrNot: prod.strAlcoholic || '',
        name: prod.strMeal || prod.strDrink,
        image: prod.strMealThumb || prod.strDrinkThumb,
      };
      const finalArr = preLocal ? [...preLocal, prodObj] : [prodObj];
      localStorage.setItem('favoriteRecipes', JSON.stringify(finalArr));
      setFavoriteRecipes([...favoriteRecipes, prodObj]);
    }
  }

  return (
    <input
      data-testid="favorite-btn"
      type="image"
      alt="Botão de favoritar"
      src={ isFavorited ? BlackHeart : WhiteHeart }
      onClick={ handleFavorite }
    />
  );
}

FavoriteBtn.defaultProps = {
  id: '',
};

FavoriteBtn.propTypes = {
  id: PropTypes.string,
  product: PropTypes.shape({}).isRequired,
  type: PropTypes.string.isRequired,
};

export default FavoriteBtn;
