import React from 'react';
import { useHistory } from 'react-router';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../assets/css/footer.css';

function Footer() {
  const history = useHistory();
  return (
    <footer
      data-testid="footer"
      className="footer-section"
    >
      <input
        // className="search-input"
        type="image"
        alt="drink-button"
        data-testId="drinks-bottom-btn"
        src={ drinkIcon }
        onClick={ () => history.push('/bebidas') }
      />
      <input
        // className="search-input"
        type="image"
        alt="explore-button"
        data-testId="explore-bottom-btn"
        src={ exploreIcon }
      />
      <input
        // className="search-input"
        type="image"
        alt="food-button"
        data-testId="food-bottom-btn"
        src={ mealIcon }
      />
    </footer>
  );
}

export default Footer;
