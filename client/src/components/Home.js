import React from 'react';
import Search from './Search';
import ProductList from './ProductList';
import Cart from './Cart';
import '../assets/Home.css';
import Categories from './Categories';

const Home = () => {
  return (
    <div id='home'>
      <Search />
      <div className='container'>
        <Categories />
        <ProductList />
        <Cart />
      </div>
    </div>
  );
};

export default Home;
