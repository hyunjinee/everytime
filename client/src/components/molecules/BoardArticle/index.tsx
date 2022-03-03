import React, { useState, useEffect, useRef, useCallback } from 'react';
import { RootState } from '@store/index';
import { Link } from 'react-router-dom';

import { Container } from './style';
import { IArticle } from '@store/article/action';
import { useSelector } from 'react-redux';

// const articleData = [
//   { id: 1, title: '제목입니다.', content: '내용입니다.', anonymous: true },
//   { id: 2, title: '제목입니다.', content: '내용입니다.', anonymous: true },
//   { id: 3, title: '제목입니다.', content: '내용입니다.', anonymous: true },
//   { id: 4, title: '제목입니다.', content: '내용입니다.', anonymous: true },
//   { id: 5, title: '제목입니다.', content: '내용입니다.', anonymous: true },
//   { id: 6, title: '제목입니다.', content: '내용입니다.', anonymous: true },
//   { id: 7, title: '제목입니다.', content: '내용입니다.', anonymous: true },
//   { id: 8, title: '제목입니다.', content: '내용입니다.', anonymous: true },
//   { id: 9, title: '제목입니다.', content: '내용입니다.', anonymous: true },
//   { id: 10, title: '제목입니다.', content: '내용입니다.', anonymous: true },
//   { id: 11, title: '제목입니다.', content: '내용입니다.', anonymous: true },
// ];

const BoardArticle = () => {
  const [target, setTarget] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { articles } = useSelector((state: RootState) => state.article);
  // const [articleList, setArticleList] = useState([]);
  // const [pageNumber, setPageNumber] = useState(0);
  // const [query, setQuery] = useState('');

  // const { articles, hasMore, loading, error } = useInfiniteArticle(
  //   query,
  //   pageNumber
  // );

  // const observer = useRef();
  // const lastArticleElementRef = useCallback((node) => {
  //   if (loading) return;
  //   if (observer.current) observer.current.disconnect();
  //   observer.current = new IntersectionObserver((entries) => {});
  // }, []);
  return (
    <>
      {articles.length > 0 &&
        articles.map((article: IArticle, index: number) => (
          <Container key={article._id + index}>
            <Link to="">
              <h1>{article.title}</h1>
              <p>{article.content}</p>
            </Link>
          </Container>
        ))}

      <div></div>
    </>
  );
};

export default BoardArticle;
