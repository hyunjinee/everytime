import React from 'react';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { RootState } from '@store/index';
import { IArticle } from '@store/article/action';
import {
  Container,
  Content,
  Status,
  Time,
  Title,
  Vote,
  Comment,
  Anonymous,
} from './style';

const BoardArticle = (): JSX.Element => {
  const { articles } = useSelector((state: RootState) => state.article);
  const navigate = useNavigate();
  return (
    <>
      {articles.length > 0 &&
        articles.map((article: IArticle, index: number) => (
          <Container
            key={article._id + index}
            onClick={() => navigate(`/board/${article.articleNumber}`)}
          >
            <Link to="" style={{ padding: '15px' }}>
              <Title>{article.title}</Title>
              <Content>
                {article.content.length > 50
                  ? article.content.slice(0, 50) + '...'
                  : article.content}
              </Content>
              <Time>{dayjs(article.createdAt as Date).fromNow()}</Time>
              <Anonymous>익명</Anonymous>
              <Status>
                <Vote>0</Vote>
                <Comment>0</Comment>
              </Status>
            </Link>
          </Container>
        ))}

      <div></div>
    </>
  );
};

export default React.memo(BoardArticle);
