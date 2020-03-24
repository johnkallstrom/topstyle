import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id='navbar'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Navbar);
