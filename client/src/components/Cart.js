import React, { useContext } from 'react';
import '../assets/Cart.css';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { items, removeFromCart, getTotal, calculatePrice } = useContext(
    CartContext
  );

  return (
    <div id='cart'>
      <h2>Shopping Cart</h2>
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
      <h3>Total: {getTotal()} &#107;&#114;</h3>
      <div className='checkout-wrapper'>
        <button id='checkout-button'>Order</button>
      </div>
    </div>
  );
};

export default Cart;
