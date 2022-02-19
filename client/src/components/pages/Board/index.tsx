import React from 'react';

import BoardHeader from '@organisms/BoardHeader';
import BoardSubMenu from '@organisms/BoardSubMenu';
import BoardContent from '@organisms/BoardContent';

const Board = (): JSX.Element => {
  return (
    <>
      <BoardHeader />
      <BoardSubMenu />
      <BoardContent />
    </>
  );
};

export default Board;
