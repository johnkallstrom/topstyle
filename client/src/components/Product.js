import React, { useState, useContext } from 'react';
import '../assets/Product.css';
import { CartContext } from '../contexts/CartContext';

const Product = ({ id, name, category, description, price }) => {
  const [displayDetails, setDisplayDetails] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleProductDetails = () => {
    if (displayDetails === false) {
      setDisplayDetails(true);
    }
    if (displayDetails === true) {
      setDisplayDetails(false);
    }
  };

  const handleAddProduct = () => {
    const product = {
      id: id,
      name: name,
      category: category,
      description: description,
      price: price,
      count: 1
    };

    if (product !== null) {
      addToCart(product);
    }
  };

  return (
    <div id='product'>
      {displayDetails ? (
        <>
          <span id='show-details' onClick={handleProductDetails}>
            &#8722;
          </span>
          <p className='name'>{name}</p>
          <p className='category'>{category}</p>
          <p className='description'>{description}</p>
          <p className='price'>{price} &#107;&#114;</p>
          <div>
            <button id='add-button' onClick={handleAddProduct}>
              Add
            </button>
          </div>
        </>
      ) : (
        <>
          <span id='show-details' onClick={handleProductDetails}>
            &#43;
          </span>
          <p className='name'>{name}</p>
          <p className='category'>{category}</p>
          <p className='price'>{price} &#107;&#114;</p>
        </>
      )}
    </div>
  );
};

export default Product;
