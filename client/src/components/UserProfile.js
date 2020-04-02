import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import '../assets/UserProfile.css';

const UserProfile = () => {
  const { currentUser } = useContext(UserContext);

  // TODO: Style user profile

  return (
    <div id='user-profile'>
      <div className='container'>
        <div className='user-profile-wrapper'>
          <h2>Profile</h2>
          <p>{currentUser.username}</p>
          <p>
            {currentUser.firstName}
            <span> {currentUser.lastName}</span>
          </p>
          <p>{currentUser.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
