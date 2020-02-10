import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './App';
import { createBrowserHistory } from 'history';
const customHistory = createBrowserHistory();
ReactDOM.render(
  <Router history={customHistory}>
    <App />
  </Router>,
  document.getElementById('root')
);
