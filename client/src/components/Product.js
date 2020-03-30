import React, { useState } from 'react';
import '../assets/Product.css';

const Product = ({ name, category, description, price }) => {
  const [displayDetails, setDisplayDetails] = useState(false);

  const handleProductDetails = () => {
    if (displayDetails === false) {
      setDisplayDetails(true);
    }
    if (displayDetails === true) {
      setDisplayDetails(false);
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
            <button id='add-button'>Add</button>
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
