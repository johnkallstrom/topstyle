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
            <Link to='/order/clothes'>Kläder</Link>
          </li>
          <li>
            <Link to='/order/shoes'>Skor</Link>
          </li>
          <li id='register-link'>
            <Link to='/user/register'>Registrera</Link>
          </li>
          <li id='login-link'>
            <Link to='/user/login'>Logga in</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
