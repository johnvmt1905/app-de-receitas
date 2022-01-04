import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import ShareButton from '../images/shareIcon.svg';

function ShareBtn({ link }) {
  const [displayShareMessage, setDisplayShareMessage] = useState(false);

  function handleShare() {
    setDisplayShareMessage(true);
    copy(`http://localhost:3000${link}`);
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
  link: PropTypes.string.isRequired,
};

export default ShareBtn;
