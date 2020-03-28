import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id='navbar'>
      <ul>
        <li>
          <NavLink to='/login'>Logga in</NavLink>
        </li>
        <li>
          <NavLink to='/register'>Registrera</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Navbar);
