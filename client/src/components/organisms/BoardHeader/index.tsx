import React from 'react';

import BoardLeftHeader from '@molecules/BoardLeftHeader';
import BoardRightHeader from '@molecules/BoardRightHeader';
import { Container, Nav } from './style';

const BoardHeader = () => {
  return (
    <Nav>
      <Container>
        <BoardLeftHeader />
        <BoardRightHeader />
      </Container>
    </Nav>
  );
};

export default BoardHeader;
