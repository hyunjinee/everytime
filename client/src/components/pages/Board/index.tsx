import React, { useEffect } from 'react';

import BoardHeader from '@organisms/BoardHeader';
import BoardSubMenu from '@organisms/BoardSubMenu';
import BoardContent from '@organisms/BoardContent';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useNavigate } from 'react-router-dom';

const Board = (): JSX.Element => {
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);
  // useEffect(() => {
  //   if (!user) {
  //     navigate('/login');
  //   }
  // }, [user, navigate]);
  return (
    <>
      <BoardHeader />
      <BoardSubMenu />
      <BoardContent />
    </>
  );
};

export default Board;
