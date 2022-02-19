import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import BoardLeftHeader from '.';

export default {
  title: 'Molecules/BoardLeftHeader',
  component: BoardLeftHeader,
};

export const Default = () => (
  <BrowserRouter>
    <BoardLeftHeader />
  </BrowserRouter>
);
