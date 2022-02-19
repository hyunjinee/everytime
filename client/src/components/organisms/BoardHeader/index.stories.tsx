import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import BoardHeader from '.';

export default {
  title: 'Organisms/BoardHeader',
  component: BoardHeader,
};

export const Default = () => (
  <BrowserRouter>
    <BoardHeader />
  </BrowserRouter>
);
