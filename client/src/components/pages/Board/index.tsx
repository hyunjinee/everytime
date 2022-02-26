import React from 'react';

import BoardHeader from '@organisms/BoardHeader';
import BoardSubMenu from '@organisms/BoardSubMenu';
import BoardContent from '@organisms/BoardContent';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const Board = (): JSX.Element => {
  const { user } = useSelector((state: RootState) => state.auth);
  console.log(user, '?');
  return (
    <>
      <BoardHeader />
      <BoardSubMenu />
      <BoardContent />
    </>
  );
};

export default Board;
