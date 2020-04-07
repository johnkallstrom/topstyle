import React, { useState, useContext, useEffect } from 'react';
import '../assets/css/Search.css';
import { ProductContext } from '../contexts/ProductContext';
import { useLocation, Redirect } from 'react-router-dom';

const Search = () => {
  const { getProductsByName, getProducts } = useContext(ProductContext);
  const [value, setValue] = useState('');
  const [redirectToHome, setRedirectToHome] = useState(false);
  const currentLocation = useLocation();

  useEffect(() => {
    if (currentLocation.pathname === '/') {
      setRedirectToHome(false);
    }
  }, [currentLocation.pathname]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentLocation.pathname !== '/') {
      setRedirectToHome(true);
    }

    if (value === '') {
      getProducts();
    } else {
      getProductsByName(value);
    }

    setValue('');
  };

  return (
    <div id='search-form'>
      {redirectToHome && (
        <>
          <Redirect to='/' />
        </>
      )}
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
