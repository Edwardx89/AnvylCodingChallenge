import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import store from './store';
import { Router, browserHistory, Route, Redirect } from 'react-router';
import {DataTable} from './browser/table';
import {Example} from './browser/test';

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={DataTable} />
  </Router>
  </Provider>,
  document.getElementById('app')
);
