import React, { useState, createContext, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = props => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('cart') !== null) {
      setItems(localStorage.getItem('cart'));
    }
  }, []);

  const addToCart = item => {};

  const removeFromCart = id => {};

  return (
    <CartContext.Provider value={{}}>{props.children}</CartContext.Provider>
  );
};
