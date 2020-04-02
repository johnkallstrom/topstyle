import React, { useContext } from 'react';
import Product from './Product';
import '../assets/Product.css';
import { ProductContext } from '../contexts/ProductContext';

const ProductList = () => {
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

export default ProductList;
