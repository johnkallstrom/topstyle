import React, { useState, createContext } from 'react';

export const ProductContext = createContext();

export const ProductProvider = props => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch('http://localhost:5000/api/product')
      .then(res => res.json())
      .then(data => {
        if (data !== null || data !== undefined) {
          setProducts(data);
        }
      });
  };

  return (
    <ProductContext.Provider value={{ products, getProducts }}>
      {props.children}
    </ProductContext.Provider>
  );
};
