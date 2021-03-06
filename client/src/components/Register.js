import React, { useState } from 'react';
import '../assets/css/Register.css';
import Modal from './Modal';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [displayError, setDisplayError] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  const [registerCompleted, setRegisterCompleted] = useState(false);

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    };

    fetch('/api/user/register', requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.hasOwnProperty('username')) {
          console.log('Registration succeeded.');
          console.log(data);
          setRegisterCompleted(true);
          setDisplayModal(true);
        } else {
          console.log('Registration failed.');
          setErrorMessage(data.message);
          setDisplayError(true);
        }
      })
      .catch((err) => console.log(err));

    setUsername('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  const handleCloseModal = () => {
    if (displayModal === true) {
      setDisplayModal(false);
    }
  };

  return (
    <div id='register-form'>
      {displayModal && (
        <>
          <Modal
            handleCloseModal={handleCloseModal}
            registerCompleted={registerCompleted}
          />
        </>
      )}
      <div className='container'>
        <div className='wrapper'>
          <h2>Sign up</h2>
          {displayError && (
            <div className='register-error'>
              <span id='close-error' onClick={() => setDisplayError(false)}>
                &times;
              </span>
              <p>{errorMessage}</p>
            </div>
          )}
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
            <div>
              <input
                type='text'
                name='firstName'
                placeholder='First name'
                value={firstName}
                onChange={updateFirstName}
              />
            </div>
            <div>
              <input
                type='text'
                name='lastName'
                placeholder='Last name'
                value={lastName}
                onChange={updateLastName}
              />
            </div>
            <div>
              <input
                type='email'
                name='email'
                placeholder='Email'
                value={email}
                onChange={updateEmail}
              />
            </div>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
