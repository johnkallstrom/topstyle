import React, { useContext, useState } from 'react';
import '../assets/Cart.css';
import { CartContext } from '../contexts/CartContext';
import { UserContext } from '../contexts/UserContext';
import '../assets/Categories.css';
import Modal from './Modal';

const Cart = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const { currentUser, loggedIn } = useContext(UserContext);
  const {
    items,
    removeFromCart,
    getTotal,
    calculatePrice,
    createOrder,
    clearCart
  } = useContext(CartContext);

  const addOrder = () => {
    const order = {
      customer: `${currentUser.firstName} ${currentUser.lastName}`,
      products: items,
      total: getTotal()
    };

    if (loggedIn === false) {
      setDisplayModal(true);
      return;
    }

    console.log(order);

    if (items.length !== 0) {
      createOrder(order);
      clearCart();
    }
  };

  const handleCloseModal = () => {
    if (displayModal === true) {
      setDisplayModal(false);
    }
  };

  return (
    <div id='cart'>
      <h2 className='cart-title'>My cart</h2>
      <hr></hr>
      {displayModal && (
        <>
          <Modal handleCloseModal={handleCloseModal} />
        </>
      )}
      {items.length ? (
        <>
          <ul>
            {items.map(item => {
              return (
                <div key={item.id} className='cart-item-wrapper'>
                  <li>{item.name}</li>
                  <li>{item.count}</li>
                  <li>{calculatePrice(item.id)} &#107;&#114;</li>
                  <button
                    id='delete-button'
                    onClick={() => removeFromCart(item.id)}
                  >
                    <i className='fas fa-trash-alt'></i>
                  </button>
                </div>
              );
            })}
          </ul>
        </>
      ) : (
        <>
          <h2 className='cart-icon'>
            <i className='fas fa-shopping-cart fa-2x'></i>
          </h2>
          <p>Your cart is empty.</p>
        </>
      )}
      <h3 className='cart-total'>Total: {getTotal()} &#107;&#114;</h3>
      <div className='checkout-wrapper'>
        <button id='checkout-button' onClick={() => addOrder()}>
          Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
