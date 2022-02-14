import React from 'react';
import { Provider } from 'react-redux';
import RegisterContent from '.';

import store from '@store/index';
import GlobalStyle from '@/styles/global';

export default {
  title: 'Organisms/RegisterContent',
  component: RegisterContent,
};

export const Default = () => (
  <Provider store={store}>
    <GlobalStyle />
    <RegisterContent />
  </Provider>
);
