import React, { useState } from 'react';
import './Search.css';

const Search = ({ handleSearch }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleSearch(value);
    setValue('');
  };

  return (
    <div id='search-form'>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            id='input'
            required
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
