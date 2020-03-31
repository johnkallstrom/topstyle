import React, { useState, useContext } from 'react';
import '../assets/Product.css';
import { CartContext } from '../contexts/CartContext';
import { UserContext } from '../contexts/UserContext';

const Product = ({ id, name, category, description, price }) => {
  const [displayDetails, setDisplayDetails] = useState(false);
  const { addToCart } = useContext(CartContext);
  const { loggedIn } = useContext(UserContext);

  const handleProductDetails = () => {
    if (displayDetails === false) {
      setDisplayDetails(true);
    }
  };

  const handleAddProduct = () => {
    const product = {
      id: id,
      name: name,
      category: category,
      description: description,
      price: price
    };

    if (loggedIn === true) {
      addToCart(product);
    }
  };

  return (
    <div id='product' onClick={handleProductDetails}>
      {displayDetails ? (
        <>
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
          <p className='name'>{name}</p>
          <p className='price'>{price} &#107;&#114;</p>
        </>
      )}
    </div>
  );
};

export default Product;
