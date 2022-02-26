import React from 'react';

import BoardTitle from '@molecules/BoardTitle';
import BoardArticle from '@molecules/BoardArticle';
import { Container, WriteButton } from './style';

const articleData = [
  { id: 1, title: '제목입니다.', content: '내용입니다.', anonymous: true },
  { id: 2, title: '제목입니다.', content: '내용입니다.', anonymous: true },
  { id: 3, title: '제목입니다.', content: '내용입니다.', anonymous: true },
  { id: 4, title: '제목입니다.', content: '내용입니다.', anonymous: true },
  { id: 5, title: '제목입니다.', content: '내용입니다.', anonymous: true },
  { id: 6, title: '제목입니다.', content: '내용입니다.', anonymous: true },
  { id: 7, title: '제목입니다.', content: '내용입니다.', anonymous: true },
  { id: 8, title: '제목입니다.', content: '내용입니다.', anonymous: true },
  { id: 9, title: '제목입니다.', content: '내용입니다.', anonymous: true },
  { id: 10, title: '제목입니다.', content: '내용입니다.', anonymous: true },
  { id: 11, title: '제목입니다.', content: '내용입니다.', anonymous: true },
];

const BoardContent = () => {
  return (
    <Container>
      <BoardTitle />
      <WriteButton>새 글을 작성해주세요!</WriteButton>
      <BoardArticle />
      {/* <BoardArticle articleData={articleData} /> */}
    </Container>
  );
};

export default BoardContent;
