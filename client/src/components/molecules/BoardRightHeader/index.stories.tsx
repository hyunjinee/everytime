import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import BoardRightHeader from '.';

export default {
  title: 'Molecules/BoardRightHeader',
  component: BoardRightHeader,
};

export const Default = () => (
  <BrowserRouter>
    <BoardRightHeader />
  </BrowserRouter>
);
