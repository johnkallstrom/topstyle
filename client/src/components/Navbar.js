import React, { useContext } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const Navbar = () => {
  const { loggedIn, signOut, currentUser } = useContext(UserContext);

  return (
    <nav id='navbar'>
      <ul>
        {loggedIn ? (
          <>
            <li>
              <NavLink to='/account' className='link-wrapper'>
                <span>{currentUser.username} </span>
                <i className='fas fa-user'></i>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/login'
                onClick={() => signOut()}
                className='link-wrapper'
              >
                Sign out
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to='/login' className='link-wrapper'>
                Sign in
              </NavLink>
            </li>
            <li>
              <NavLink to='/register' className='link-wrapper'>
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default withRouter(Navbar);
