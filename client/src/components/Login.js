import React, { useState } from 'react';
import './Login.css';

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
    setUsername('');
    setPassword('');
  };

  return (
    <div id='login-form'>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            name='username'
            placeholder='Username...'
            value={username}
            onChange={updateUsername}
          />
        </div>
        <div>
          <input
            type='password'
            name='password'
            value={password}
            placeholder='Password...'
            onChange={updatePassword}
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
