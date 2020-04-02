import React from 'react';
import Search from './Search';
import ProductList from './ProductList';
import Cart from './Cart';
import '../assets/Home.css';
import ProductCategories from './ProductCategories';

const Home = () => {
  return (
    <div id='home'>
      <Search />
      <div className='container'>
        <ProductCategories />
        <ProductList />
        <Cart />
      </div>
    </div>
  );
};

export default Home;
