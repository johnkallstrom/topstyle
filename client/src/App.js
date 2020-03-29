import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import { UserProvider } from './contexts/UserContext';
import Search from './components/Search';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div id='app'>
          <Header />
          <Switch>
            <Route exact path='/' component={Search} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
