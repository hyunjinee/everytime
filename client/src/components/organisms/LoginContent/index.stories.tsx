import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import LoginContent from '.';
import store from '@store/index';
import GlobalStyle from '@styles/global';

export default {
  title: 'Organisms/LoginContent',
  component: LoginContent,
};

export const Default = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Provider store={store}>
      <LoginContent />
    </Provider>
  </BrowserRouter>
);
