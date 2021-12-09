import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const INITIAL_STATE = {};
  const [state, setState] = useState(INITIAL_STATE);
  const [searchBar, toggleSearchBar] = useState(false);

  return (
    <AppContext.Provider value={ { state, setState, searchBar, toggleSearchBar } }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
