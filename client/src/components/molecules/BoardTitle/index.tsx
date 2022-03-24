import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Name } from './style';

const BoardTitle = () => {
  return (
    <Container>
      <Name>
        <Link to="">자유게시판</Link>
      </Name>
    </Container>
  );
};

export default React.memo(BoardTitle);
