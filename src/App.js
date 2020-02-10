import React from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import Friends from './components/Friends';
const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact={true} path="/" component={Login} />
        <Route exact={true} path="/login" component={Login} />
        <Route exact={true} path="/profile" component={Profile} />
        <Route exact={true} path="/friends" component={Friends} />
      </Switch>
    </div>
  );
};

export default App;
