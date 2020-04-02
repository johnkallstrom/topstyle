import React, { useState } from 'react';
import '../assets/Modal.css';
import { Redirect } from 'react-router-dom';

const Modal = ({ handleCloseModal, order, orderCompleted }) => {
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  return (
    <div className='modal' onClick={() => handleCloseModal}>
      {redirectToLogin && (
        <>
          <Redirect to='/login' />
        </>
      )}
      <div className='modal-content'>
        <span id='close' onClick={() => handleCloseModal()}>
          &times;
        </span>
        <div id='content'>
          {orderCompleted ? (
            <div id='order-confirmation'>
              <h3>Thanks for your order!</h3>
              <ul>
                {order.products.map(product => {
                  return (
                    <div id='product-wrapper' key={product.id}>
                      <li>Product: {product.name}</li>
                      <li>Quantity: {product.count}</li>
                    </div>
                  );
                })}
              </ul>
              <p id='order-total'>Total: {order.total} kr</p>
            </div>
          ) : (
            <div id='sign-in-wrapper'>
              <h3>Go and sign in to start shopping!</h3>
              <button
                id='sign-in-button'
                onClick={() => setRedirectToLogin(true)}
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
