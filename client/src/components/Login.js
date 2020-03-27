import React, { useState } from 'react';
import './Login.css';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const updateUsername = e => {
    setUsername(e.target.value);
  };

  const updatePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const user = {
      username: username,
      password: password
    };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    };

    fetch('http://localhost:5000/api/user/login', requestOptions)
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('token', data.token);
      })
      .catch(err => console.log(err));

    setUsername('');
    setPassword('');
  };

  return (
    <div id='login-form'>
      <div className='container'>
        <h2>Logga in</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type='text'
              name='username'
              placeholder='Användarnamn'
              value={username}
              onChange={updateUsername}
            />
          </div>
          <div>
            <input
              type='password'
              name='password'
              value={password}
              placeholder='Lösenord'
              onChange={updatePassword}
            />
          </div>
          <button>Logga in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
