import React, { useState, useContext } from 'react';
import '../assets/css/Search.css';
import { ProductContext } from '../contexts/ProductContext';

const Search = () => {
  const { getProductsByName, getProducts } = useContext(ProductContext);
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === '') {
      getProducts();
    } else {
      getProductsByName(value);
    }

    setValue('');
  };

  return (
    <div id='search-form'>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <input
          type='text'
          id='input'
          placeholder='Search...'
          onFocus={(e) => (e.target.placeholder = '')}
          onBlur={(e) => (e.target.placeholder = 'Search...')}
          value={value}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Search;
