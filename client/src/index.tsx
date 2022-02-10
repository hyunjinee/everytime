import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import App from './App';
import GlobalStyle from '@styles/global';

const ADD = 'ADD';
const DELETE = 'DELETE';

const reducer = () => {};

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
