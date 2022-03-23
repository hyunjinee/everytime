import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import BoardArticle from '.';

export default {
  title: 'Molecules/BoardArticle',
  component: BoardArticle,
};

export const Default = () => (
  <BrowserRouter>
    <BoardArticle />
  </BrowserRouter>
);
