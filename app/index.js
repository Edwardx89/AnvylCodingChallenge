import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import store from './store';
// import { Router, browserHistory, Route, Redirect } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DataTable from './browser/table.js';

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <Route path="/" component={DataTable} />
  </Router>
  </Provider>,
  document.getElementById('app')
);
