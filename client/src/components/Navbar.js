import React, { useContext } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const Navbar = () => {
  const { loggedIn, signOut } = useContext(UserContext);

  return (
    <nav id='navbar'>
      <ul>
        {loggedIn ? (
          <>
            <li>
              <NavLink to='/login' onClick={() => signOut()}>
                Logout
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
            <li>
              <NavLink to='/register'>Register</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default withRouter(Navbar);
