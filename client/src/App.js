import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import { UserProvider } from './contexts/UserContext';
import ProductList from './components/ProductList';
import { ProductProvider } from './contexts/ProductContext';

function App() {
  return (
    <UserProvider>
      <ProductProvider>
        <BrowserRouter>
          <div id='app'>
            <Header />
            <Switch>
              <Route exact path='/' component={ProductList} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </ProductProvider>
    </UserProvider>
  );
}

export default App;
