import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer data-testid="footer">
      <input
        // className="search-input"
        type="image"
        alt="drink-button"
        data-testId="drinks-bottom-btn"
        src={ drinkIcon }
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
