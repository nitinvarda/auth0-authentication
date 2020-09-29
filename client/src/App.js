import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';

import { Auth0Provider } from '@auth0/auth0-react';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
function App() {
  return (
    // <Auth0Provider
    //   domain="authnitintest.us.auth0.com"
    //   clientId="17bwV7ulHpQ1NCvY5iI4MXIFhdr7Cs5n"
    //   redirectUri={window.location.origin}
    // >

    <Router>
      <Navbar />
      <div className="App">


        <Switch>

          <Route path="/" exact strict component={HomePage} />
          <Route path="/login" exact component={Login} />

          <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>

    // <NewLogin />
    // </Auth0Provider>
  );
}

export default App;
