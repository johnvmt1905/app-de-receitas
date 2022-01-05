import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import ShareButton from '../images/shareIcon.svg';

function ShareBtn({ history, pageTitle, index, id, type }) {
  const [displayShareMessage, setDisplayShareMessage] = useState(false);

  function handleShare() {
    setDisplayShareMessage(true);
    const title = 'Receitas Favoritas';
    if (pageTitle === title) {
      copy(`http://localhost:3000/${type === 'comida' ? 'comidas' : 'bebidas'}/${id}`);
    }
    if (pageTitle !== title) {
      copy(`http://localhost:3000${history.location.pathname}`);
    }
  }

  function setTestId(title, i) {
    if (title === 'Receitas Favoritas') {
      return `${i}-horizontal-share-btn`;
    }
    return 'share-btn';
  }
  return (
    <div>
      <input
        data-testid={ setTestId(pageTitle, index) }
        type="image"
        alt="Botão de compartilhar"
        src={ ShareButton }
        onClick={ handleShare }
      />
      { displayShareMessage && <span>Link copiado!</span> }
    </div>
  );
}

ShareBtn.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  pageTitle: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default ShareBtn;
