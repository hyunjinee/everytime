import React from 'react';

import BoardTitle from '@molecules/BoardTitle';
import { Container, WriteButton } from './style';
import BoardArticle from '@molecules/BoardArticle';

const BoardContent = () => {
  return (
    <Container>
      <BoardTitle />
      <WriteButton>새 글을 작성해주세요!</WriteButton>
      <BoardArticle />
    </Container>
  );
};

export default BoardContent;
