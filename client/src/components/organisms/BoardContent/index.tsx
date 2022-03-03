import React, { useState } from 'react';

import BoardTitle from '@molecules/BoardTitle';
import BoardArticle from '@molecules/BoardArticle';
import BoardForm from '@molecules/BoardForm';
import { Container, WriteButton } from './style';
import useInfiniteArticle from '@/hooks/useInfiniteArticle';

const BoardContent = () => {
  const [writeMode, setWriteMode] = useState<boolean>(false);
  const { setTarget, isLoading } = useInfiniteArticle();

  return (
    <Container>
      <BoardTitle />
      <WriteButton
        writeMode={writeMode}
        onClick={() => {
          setWriteMode((v) => !v);
        }}
      >
        새 글을 작성해주세요!
      </WriteButton>
      <BoardForm writeMode={writeMode} />
      <BoardArticle />
      <div ref={setTarget}>{isLoading && <div>로~딩~중</div>}</div>
    </Container>
  );
};

export default BoardContent;
