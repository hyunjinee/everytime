import React from 'react';
import ReactDOM from 'react-dom';
import dayjs from 'dayjs';
import relativTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import GlobalStyle from '@styles/global';
import store from './store';

dayjs.extend(relativTime);
dayjs.locale('ko');

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
