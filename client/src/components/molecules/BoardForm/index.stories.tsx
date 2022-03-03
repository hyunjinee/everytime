import React from 'react';

import BoardForm from '.';

export default {
  title: 'Molecules/BoardForm',
  component: BoardForm,
};

const writeMode = true;

export const Default = () => <BoardForm writeMode={writeMode} />;
