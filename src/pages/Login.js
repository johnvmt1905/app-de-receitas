import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function disableButton() {
    const MAX_LENGTH = 6;
    if (email.includes('@') && email.includes('.com')
    && password.length > MAX_LENGTH) {
      return false;
    }
    return true;
  }

  function submitButton() {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    const user = {
      email,
    };

    localStorage.setItem('user', JSON.stringify(user));
  }

  return (
    <form>
      <input
        value={ email }
        type="email"
        data-testid="email-input"
        onChange={ ({ target }) => setEmail(target.value) }
      />
      <input
        value={ password }
        type="password"
        data-testid="password-input"
        onChange={ ({ target }) => setPassword(target.value) }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ disableButton() }
        onClick={ submitButton }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
