import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <div id='app'>
        <Header />
        <Navbar />
        <Switch>
          <Route path='register' component={Register} />
          <Route path='login' component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
