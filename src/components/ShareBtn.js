import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import ShareButton from '../images/shareIcon.svg';

function ShareBtn({ link, pageTitle, index }) {
  const [displayShareMessage, setDisplayShareMessage] = useState(false);

  function handleShare() {
    setDisplayShareMessage(true);
    copy(`http://localhost:3000${link}`);
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
  index: PropTypes.number.isRequired,
  pageTitle: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ShareBtn;
