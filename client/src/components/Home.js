import React from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import '../assets/css/Home.css';
import ProductCategories from './ProductCategories';

const Home = () => {
  return (
    <div id='home'>
      <div className='container'>
        <ProductCategories />
        <ProductList />
        <Cart />
      </div>
    </div>
  );
};

export default Home;
