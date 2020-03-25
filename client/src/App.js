import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
      <div id='app'>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/user/login' component={Login} />
          <Route path='/user/register' component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
