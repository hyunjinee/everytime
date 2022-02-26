import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './style';

const articleData = [
  { id: 1, title: '제목입니다.', content: '내용입니다.', anonymous: true },
  { id: 2, title: '제목입니다.', content: '내용입니다.', anonymous: true },
  { id: 3, title: '제목입니다.', content: '내용입니다.', anonymous: true },
  { id: 4, title: '제목입니다.', content: '내용입니다.', anonymous: true },
  { id: 5, title: '제목입니다.', content: '내용입니다.', anonymous: true },
  { id: 6, title: '제목입니다.', content: '내용입니다.', anonymous: true },
  { id: 7, title: '제목입니다.', content: '내용입니다.', anonymous: true },
  { id: 8, title: '제목입니다.', content: '내용입니다.', anonymous: true },
  { id: 9, title: '제목입니다.', content: '내용입니다.', anonymous: true },
  { id: 10, title: '제목입니다.', content: '내용입니다.', anonymous: true },
  { id: 11, title: '제목입니다.', content: '내용입니다.', anonymous: true },
];

const BoardArticle = () => {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'api/article/getAllArticles',
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      {articleData.map((article) => (
        <Container>
          <Link to="">
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </Link>
        </Container>
      ))}
    </>
  );
};

export default BoardArticle;
