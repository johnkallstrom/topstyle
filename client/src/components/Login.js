import React, { useState, useContext } from 'react';
import './Login.css';
import { UserContext } from '../contexts/UserContext';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, loggedIn } = useContext(UserContext);

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
        if (data.token !== undefined) {
          signIn(data.token);
        }
      })
      .catch(err => console.log(err));

    setUsername('');
    setPassword('');
  };

  return (
    <div id='login-form'>
      {loggedIn ? (
        <>
          <Redirect to='/' />
        </>
      ) : (
        <>
          {' '}
          <div className='container'>
            <h2>Sign in</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type='text'
                  name='username'
                  placeholder='Username'
                  value={username}
                  onChange={updateUsername}
                />
              </div>
              <div>
                <input
                  type='password'
                  name='password'
                  value={password}
                  placeholder='Password'
                  onChange={updatePassword}
                />
              </div>
              <button>Login</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
