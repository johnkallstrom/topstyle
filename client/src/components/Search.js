import React, { useState } from 'react';
import './Search.css';

const Search = () => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(value);
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
            placeholder='Sök...'
            onFocus={e => (e.target.placeholder = '')}
            onBlur={e => (e.target.placeholder = 'Sök...')}
            value={value}
            onChange={handleChange}
          />
          <button id='button'>
            <i className='fas fa-search'></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
