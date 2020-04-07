import React, { useState } from 'react';
import '../assets/css/Modal.css';
import { Redirect } from 'react-router-dom';

const Modal = ({
  handleCloseModal,
  order,
  orderCompleted,
  registerCompleted,
}) => {
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  // TODO: Add register completed message to modal

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
          {registerCompleted ? (
            <div id='register-completed-wrapper'>
              <h3>Registration successful!</h3>
              <button
                id='register-login-button'
                onClick={() => setRedirectToLogin(true)}
              >
                Login
              </button>
            </div>
          ) : (
            <>
              {orderCompleted ? (
                <div id='order-confirmation'>
                  <h3>Thanks for your order!</h3>
                  <hr></hr>
                  <ul>
                    {order.products.map((product) => {
                      return (
                        <div id='product-wrapper' key={product.id}>
                          <li>
                            Product: {product.name},{' '}
                            <span>{product.price} kr</span>
                          </li>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
