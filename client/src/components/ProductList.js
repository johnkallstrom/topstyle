import React, { useContext, useEffect } from 'react';
import Search from './Search';
import Product from './Product';
import './Product.css';
import { ProductContext } from '../contexts/ProductContext';

const Products = () => {
  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  const handleSearch = value => {
    if (value !== null || value !== undefined) {
    }
  };

  return (
    <div id='product-list'>
      <Search handleSearch={handleSearch} />
      <div className='container'>
        {products.map(product => {
          return (
            <Product
              key={product._id}
              name={product.name}
              category={product.category}
              description={product.description}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
