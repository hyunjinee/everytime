import React from 'react';
import { Link } from 'react-router-dom';

import { Container, MyPage, Chat } from './style';

const BoardRightHeader = () => {
  return (
    <Container>
      <Link to="/message">
        <Chat />
      </Link>
      <Link to="/my">
        <MyPage />
      </Link>
    </Container>
  );
};

export default BoardRightHeader;
