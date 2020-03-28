import React from 'react';
import Navbar from './Navbar';
import { Link, withRouter } from 'react-router-dom';

const Header = () => {
  return (
    <header id='header'>
      <div className='container'>
        <Link to='/'>
          <h1 id='branding'>TopStyle</h1>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default withRouter(Header);
