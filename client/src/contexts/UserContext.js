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

  const signIn = (token) => {
    localStorage.setItem('token', token);
    setLoggedIn(true);
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
