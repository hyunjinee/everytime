import axios from 'axios';

import { IArticle } from './action';

const createArticle = async (articleData: IArticle, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    '/api/article/createArticle',
    articleData,
    config
  );
  return response.data;
};

const getAllArticles = async (token: string, page: number) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await axios.get(
    `/api/article/getAllArticles?page=${page}`,
    config
  );
  return response.data;
};

const getOneArticle = async (token: string, articleNumber: number | string) => {
  const config = {
    headers: {
      Authoriaztion: `Bearer ${token}`,
    },
  };

  const response = await axios.get(
    `/api/article/getOneArticle/${articleNumber}`,
    config
  );
  return response.data;
};

// const register = async (userData: IUser) => {
//   const response = await axios.post(
//     'http://localhost:3001/api/user/register',
//     userData
//   );

//   if (response.data) {
//     localStorage.setItem('user', JSON.stringify(response.data));
//   }

//   return response.data;
// };

const articleService = {
  createArticle,
  getAllArticles,
  getOneArticle,
};

export default articleService;
