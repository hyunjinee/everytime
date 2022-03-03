import React, { memo } from 'react';
import ReactLoading from 'react-loading';

import { Container } from './style';

const BoardLoading = () => {
  return (
    <Container>
      <ReactLoading type="spin" color="red" height={100} width={100} />
    </Container>
  );
};

export default memo(BoardLoading);
