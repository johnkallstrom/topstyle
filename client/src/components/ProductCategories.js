import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const ProductCategories = () => {
  const { getProductsByCategory, getProducts } = useContext(ProductContext);

  return (
    <div id='categories'>
      <ul>
        <li className='category-wrapper' onClick={() => getProducts()}>
          All
        </li>
        <li
          className='category-wrapper'
          onClick={() => getProductsByCategory('clothes')}
        >
          Clothes
        </li>
        <li
          className='category-wrapper'
          onClick={() => getProductsByCategory('shoes')}
        >
          Shoes
        </li>
      </ul>
    </div>
  );
};

export default ProductCategories;
