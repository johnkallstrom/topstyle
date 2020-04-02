import React from 'react';
import '../assets/Modal.css';

const Modal = ({ handleCloseModal }) => {
  // TODO: Display order confirmation

  return (
    <div className='modal' onClick={handleCloseModal}>
      <div className='modal-content'>
        <span id='close' onClick={() => handleCloseModal()}>
          &times;
        </span>
        <div id='content'>
          <p>Please sign in to place an order.</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
