import React, { useState } from 'react';

import BoardTitle from '@molecules/BoardTitle';
import BoardArticle from '@organisms/BoardArticle';
import BoardForm from '@molecules/BoardForm';
import useInfiniteArticle from '@hooks/useInfiniteArticle';
import { Container, WriteButton } from './style';

const BoardContent = () => {
  const [writeMode, setWriteMode] = useState<boolean>(false);
  const [setTarget, isLoading] = useInfiniteArticle();

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
      <div ref={setTarget as any}>{isLoading && <div>로~딩~중</div>}</div>
    </Container>
  );
};

export default BoardContent;
