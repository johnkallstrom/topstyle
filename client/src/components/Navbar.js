import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id='navbar'>
      <div className='container'>
        <ul>
          <li>
            <Link to='/'>Hem</Link>
          </li>
          <li>
            <Link to='/clothes'>Kläder</Link>
          </li>
          <li>
            <Link to='/shoes'>Skor</Link>
          </li>
          <li id='register-link'>
            <Link to='/register'>Registrera</Link>
          </li>
          <li id='login-link'>
            <Link to='/login'>Logga in</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
