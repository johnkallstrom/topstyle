import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Header = () => {
  return (
    <div id='header'>
      <Link to='/'>
        <h1>TopStyle</h1>
      </Link>
    </div>
  );
};

export default withRouter(Header);
