import React, { useContext } from 'react';
import Product from './Product';
import { ProductContext } from '../contexts/ProductContext';
import '../assets/Product.css';

const Products = () => {
  const { products } = useContext(ProductContext);

  return (
    <div id='product-list'>
      {products.map(product => {
        return (
          <Product
            key={product._id}
            id={product._id}
            name={product.name}
            category={product.category}
            description={product.description}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default Products;
