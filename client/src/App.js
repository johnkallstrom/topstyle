import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import { UserProvider } from './contexts/UserContext';
import { ProductProvider } from './contexts/ProductContext';
import { CartProvider } from './contexts/CartContext';
import Home from './components/Home';

function App() {
  return (
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <BrowserRouter>
            <div id='app'>
              <Header />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
              </Switch>
              <Footer />
            </div>
          </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  );
}

export default App;
