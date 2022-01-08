import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import { Provider } from 'react-redux';
import Reducer from './_reducers'

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore)


ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={createStoreWithMiddleware(
        Reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
      <App />
    </Provider>
=======

ReactDOM.render(
  <React.StrictMode>
    <App />
>>>>>>> 30090e2d9f264f06c142034a2a9f10ef65e6fd95
  </React.StrictMode>,
  document.getElementById('root')
);

<<<<<<< HEAD

=======
>>>>>>> 30090e2d9f264f06c142034a2a9f10ef65e6fd95
