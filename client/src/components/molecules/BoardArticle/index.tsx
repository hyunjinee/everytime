import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './style';

const BoardArticle = () => {
  return (
    <Container>
      <Link to="">
        <h2>제목입니다.</h2>
        <p>내용입니다.</p>
      </Link>
    </Container>
  );
};

export default BoardArticle;
