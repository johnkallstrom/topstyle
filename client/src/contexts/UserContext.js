import React, { useState, useEffect, createContext } from 'react';
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      setLoggedIn(false);
    }
    if (localStorage.getItem('token') !== null) {
      setLoggedIn(true);
      getUser();
    }
  }, [loggedIn]);

  const signIn = (user) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    };

    fetch('http://localhost:5000/api/user/login', requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.token !== undefined) {
          localStorage.setItem('token', data.token);
          setLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signOut = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  const getUser = () => {
    const token = localStorage.getItem('token');

    const requestOptions = {
      method: 'GET',
      headers: {
        token: token,
        'Content-Type': 'application/json',
      },
    };

    fetch('http://localhost:5000/api/user', requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data.user);
      });
  };

  return (
    <UserContext.Provider
      value={{
        loggedIn,
        signIn,
        signOut,
        getUser,
        currentUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
