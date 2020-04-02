import React, { useContext } from 'react';
import Navbar from './Navbar';
import { Link, withRouter } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';

const Header = () => {
  const { getProducts } = useContext(ProductContext);

  return (
    <header id='header'>
      <div className='container'>
        <Link to='/'>
          <h1 id='branding' onClick={() => getProducts()}>
            TopStyle
          </h1>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default withRouter(Header);
