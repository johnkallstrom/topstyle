import React, { useState, createContext, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = props => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cart'));
    if (data !== null) {
      setItems(data);
    }
  }, []);

  useEffect(() => {
    if (items !== null) {
      localStorage.setItem('cart', JSON.stringify(items));
    }
  }, [items]);

  const addToCart = newItem => {
    // TODO: Increment item amount if item already exists
    if (items.some(item => item.name === newItem.name)) {
      return;
    }

    setItems([newItem, ...items]);
  };

  const removeFromCart = id => {};

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
