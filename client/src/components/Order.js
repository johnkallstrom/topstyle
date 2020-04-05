import React, { useState } from 'react';
import Moment from 'react-moment';
import '../assets/Order.css';

const Order = ({ date, total, products }) => {
  const [displayDetails, setDisplayDetails] = useState(false);

  const handleOrderDetails = () => {
    if (displayDetails === false) {
      setDisplayDetails(true);
    }
    if (displayDetails === true) {
      setDisplayDetails(false);
    }
  };

  return (
    <div id='order'>
      {displayDetails ? (
        <>
          <span id='show-details' onClick={handleOrderDetails}>
            &#8722;
          </span>
          <p>
            <span className='date'>Datum:</span>{' '}
            <Moment format='YYYY-MM-DD HH:mm'>{date}</Moment>
          </p>
          <ul>
            <p className='products'>Products: </p>
            {products.map((product) => {
              return (
                <div className='product-wrapper' key={product.id}>
                  <li>
                    {product.name},{' '}
                    <span className='product-price'>{product.price} kr</span>
                  </li>
                  <li>Quantity: {product.count}</li>
                </div>
              );
            })}
          </ul>
          <p>
            <span className='total'>Total:</span> {total} &#107;&#114;
          </p>
        </>
      ) : (
        <>
          <span id='show-details' onClick={handleOrderDetails}>
            &#43;
          </span>
          <p>
            <span className='date'>Datum:</span>{' '}
            <Moment format='YYYY-MM-DD HH:mm'>{date}</Moment>
          </p>
          <p>
            <span className='total'>Total:</span> {total} &#107;&#114;
          </p>
        </>
      )}
    </div>
  );
};

export default Order;
