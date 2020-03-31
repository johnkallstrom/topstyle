import React, { useContext } from 'react';
import '../assets/Cart.css';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { items } = useContext(CartContext);
  return (
    <div id='cart'>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map(item => {
          return (
            <div key={item.id} className='cart-item-wrapper'>
              <li>{item.name}</li>
              <li>{item.price} &#107;&#114;</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
