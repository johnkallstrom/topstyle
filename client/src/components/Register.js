import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const updateFirstName = e => {
    setFirstName(e.target.value);
  };

  const updateLastName = e => {
    setLastName(e.target.value);
  };

  const updateEmail = e => {
    setEmail(e.target.value);
  };

  const updateUsername = e => {
    setUsername(e.target.value);
  };

  const updatePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFirstName('');
    setLastName('');
    setEmail('');
    setUsername('');
    setPassword('');
  };

  return (
    <div id='register-form'>
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
        <div>
          <input
            type='text'
            name='firstName'
            placeholder='First name...'
            value={firstName}
            onChange={updateFirstName}
          />
        </div>
        <div>
          <input
            type='text'
            name='lastName'
            placeholder='Last name...'
            value={lastName}
            onChange={updateLastName}
          />
        </div>
        <div>
          <input
            type='email'
            name='email'
            placeholder='Email...'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
