import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

export default createStore(
  applyMiddleware(
    createLogger,
    thunkMiddleware
  )
);
