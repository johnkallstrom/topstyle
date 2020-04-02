import React, { useState, useContext } from 'react';
import '../assets/Search.css';
import { ProductContext } from '../contexts/ProductContext';

const Search = () => {
  const { getProductsByName, getProducts } = useContext(ProductContext);
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (value === '') {
      getProducts();
    }

    getProductsByName(value);
    setValue('');
  };

  return (
    <div id='search-form'>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            id='input'
            placeholder='Search...'
            onFocus={e => (e.target.placeholder = '')}
            onBlur={e => (e.target.placeholder = 'Search...')}
            value={value}
            onChange={handleChange}
          />
          <button id='search-button'>
            <i className='fas fa-search'></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
