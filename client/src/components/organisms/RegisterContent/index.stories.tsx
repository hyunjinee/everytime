import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import RegisterContent from '.';

import store from '@store/index';
import GlobalStyle from '@styles/global';

export default {
  title: 'Organisms/RegisterContent',
  component: RegisterContent,
};

export const Default = () => (
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyle />
      <RegisterContent />
    </Provider>
  </BrowserRouter>
);
