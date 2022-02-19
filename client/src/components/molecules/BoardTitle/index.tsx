import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Name } from './style';

const BoardTitle = () => {
  return (
    <Container>
      <Name>
        <Link to="">제목</Link>
      </Name>
    </Container>
  );
};

export default BoardTitle;
