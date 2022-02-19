import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import BoardSubMenu from '.';

export default {
  title: 'Organisms/BoardSubMenu',
  component: BoardSubMenu,
};

export const Default = () => (
  <BrowserRouter>
    <BoardSubMenu />
  </BrowserRouter>
);
