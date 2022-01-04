import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import ShareButton from '../images/shareIcon.svg';

function ShareBtn({ history }) {
  const [displayShareMessage, setDisplayShareMessage] = useState(false);

  function handleShare() {
    setDisplayShareMessage(true);
    copy(`http://localhost:3000${history.location.pathname}`);
  }

  return (
    <div style={ { display: 'inline-block', marginRight: 5 } }>
      <input
        data-testid="share-btn"
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
};

export default ShareBtn;
