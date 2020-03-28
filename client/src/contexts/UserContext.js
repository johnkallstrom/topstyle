import React, { useState, useEffect, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = props => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      setLoggedIn(false);
    }
    if (localStorage.getItem('token') !== null) {
      setLoggedIn(true);
    }
  }, [loggedIn]);

  const signIn = token => {
    if (token !== undefined) {
      localStorage.setItem('token', token);
    }
    setLoggedIn(true);
  };

  const signOut = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ loggedIn, signIn, signOut }}>
      {props.children}
    </UserContext.Provider>
  );
};
