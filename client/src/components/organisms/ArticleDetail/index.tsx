import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import BoardHeader from '@organisms/BoardHeader';
import ArticleDetailMain from '@molecules/ArticleDetailMain';
import { RootState } from '@store/index';
import { getOneArticle } from '@store/article/action';
import { Container } from './style';

const ArticleDetail = () => {
  const { articleNumber } = useParams();
  const dispatch = useDispatch();
  const { article } = useSelector((state: RootState) => state.article);

  useEffect(() => {
    dispatch(getOneArticle(articleNumber));
  }, [dispatch]);

  return (
    <>
      <BoardHeader />
      <Container>
        <ArticleDetailMain />
      </Container>
    </>
  );
};

export default ArticleDetail;
