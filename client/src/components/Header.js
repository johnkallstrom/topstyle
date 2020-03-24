import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Header = () => {
  return (
    <header id='header'>
      <div className='container'>
        <Link to='/'>
          <h1>TopStyle</h1>
        </Link>
      </div>
    </header>
  );
};

export default withRouter(Header);
