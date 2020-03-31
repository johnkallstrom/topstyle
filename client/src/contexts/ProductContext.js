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

  // TODO: Make GET request to API and fetch products based on search query

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {props.children}
    </ProductContext.Provider>
  );
};
