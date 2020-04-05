import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import '../assets/UserProfile.css';
import OrderList from './OrderList';

const UserProfile = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div id='user-profile'>
      <div className='container'>
        <div className='user-profile-wrapper'>
          <h2>
            Welcome, {currentUser.firstName} {currentUser.lastName}!
          </h2>
        </div>
        <div className='user-order-wrapper'>
          <OrderList currentUser={currentUser} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
