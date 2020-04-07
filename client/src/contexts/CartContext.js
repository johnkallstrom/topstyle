import React, { useState, createContext, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
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

  const addToCart = (newItem) => {
    if (items.some((item) => item.name === newItem.name)) {
      incrementItemCount(newItem.id);
    } else {
      setItems([newItem, ...items]);
    }
  };

  const removeFromCart = (id) => {
    const newItemList = items.filter((item) => {
      return item.id !== id;
    });

    setItems(newItemList);
  };

  const incrementItemCount = (id) => {
    const currentItemList = [...items];
    currentItemList.forEach((i) => {
      if (i.id === id) {
        i.count += 1;
      }
    });
    setItems(currentItemList);
  };

  const getTotal = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.count;
    });
    return total;
  };

  const calculatePrice = (id) => {
    let total = 0;
    items.forEach((item) => {
      if (item.id === id) {
        total += item.price * item.count;
      }
    });
    return total;
  };

  const createOrder = (order) => {
    const token = localStorage.getItem('token');

    const requestOptions = {
      method: 'POST',
      headers: {
        token: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    };

    fetch('/api/order/create', requestOptions)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const clearCart = () => {
    localStorage.removeItem('cart');
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        getTotal,
        calculatePrice,
        createOrder,
        clearCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
