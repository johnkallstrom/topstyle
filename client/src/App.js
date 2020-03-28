import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div id='app'>
        <Header />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
