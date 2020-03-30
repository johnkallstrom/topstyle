import React, { useState, useEffect, createContext } from 'react';

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

  // TODO: Get products by search query/value

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {props.children}
    </ProductContext.Provider>
  );
};
