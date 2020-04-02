import React, { useState, useEffect, createContext } from 'react';

export const ProductContext = createContext();

export const ProductProvider = props => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch('http://localhost:5000/api/product')
      .then(res => res.json())
      .then(data => {
        if (data !== null || data !== undefined) {
          setProducts(data);
        }
      });
  };

  const getProductsByName = value => {
    fetch(`http://localhost:5000/api/product/find?name=${value}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data !== null || data !== undefined) {
          setProducts(data);
        }
      });
  };

  const getProductsByCategory = value => {
    fetch(`http://localhost:5000/api/product/find?category=${value}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data !== null || data !== undefined) {
          setProducts(data);
        }
      });
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        getProducts,
        getProductsByName,
        getProductsByCategory
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
