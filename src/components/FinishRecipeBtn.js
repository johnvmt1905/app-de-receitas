import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import Context from '../context/AppContext';

const INITIAL_STATE = {
  isDisabled: true,
};

function FinishRecipeBtn({ checkboxes, history }) {
  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {
    const checkCheckboxes = checkboxes
      .filter((checkbox) => checkbox.isChecked === true);
    if (checkCheckboxes.length === checkboxes.length) {
      setState({ isDisabled: false });
    } else {
      setState({ isDisabled: true });
    }
  }, [checkboxes]);

  function handleFinishButton() {
    history.push('/receitas-feitas');
  }

  return (
    <button
      type="button"
      className="finish-recipe-btn"
      data-testid="finish-recipe-btn"
      onClick={ handleFinishButton }
      disabled={ state.isDisabled }
    >
      Finalizar Receita
    </button>
  );
}

FinishRecipeBtn.propTypes = {
  checkboxes: PropTypes.shape([]).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default FinishRecipeBtn;
