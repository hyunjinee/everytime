import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import BoardContent from '.';

export default {
  title: 'Organisms/BoardContent',
  component: BoardContent,
};

export const Default = () => (
  <BrowserRouter>
    <BoardContent />
  </BrowserRouter>
);
