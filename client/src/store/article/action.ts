import articleService from './service';

export const CREATE_ARTICLE_REQUEST = 'article/CREATE_ARTICLE_REQUEST' as const;
export const CREATE_ARTICLE_SUCCESS = 'article/CREATE_ARTICLE_SUCCESS' as const;
export const CREATE_ARTICLE_FAILURE = 'article/CREATE_ARTICLE_FAILURE' as const;
export const GET_ARTICLE_REQUEST = 'article/GET_ARTICLE_REQUEST' as const;
export const GET_ARTICLE_SUCCESS = 'article/GET_ARTICLE_SUCCESS' as const;
export const GET_ARTICLE_FAILURE = 'article/GET_ARTICLE_FAILURE' as const;

export const ARTICLE_RESET = 'article/ARTICLE_RESET' as const;

export interface IArticle {
  _id: string;
  title: string;
  content: string;
  vote?: string;
  comment?: string;
}

export const reset = () => ({ type: ARTICLE_RESET });

export const createArticle =
  (articleData: IArticle) => async (dispatch, getState) => {
    dispatch({ type: CREATE_ARTICLE_REQUEST });
    const token =
      getState().auth.user?.token ||
      JSON.parse(localStorage.getItem('user'))?.token;
    try {
      const article = await articleService.createArticle(articleData, token);
      dispatch({ type: CREATE_ARTICLE_SUCCESS, payload: article });
    } catch (error) {
      const message =
        (error.response && error.response.data.message) || error.message;
      dispatch({ type: CREATE_ARTICLE_FAILURE, payload: message });
    }
  };

export const getAllArticles = (page: number) => async (dispatch, getState) => {
  dispatch({ type: GET_ARTICLE_REQUEST });
  const token =
    getState().auth.user?.token ||
    JSON.parse(localStorage.getItem('user'))?.token;
  try {
    const articles = await articleService.getAllArticles(token, page);
    dispatch({ type: GET_ARTICLE_SUCCESS, payload: articles });
  } catch (error) {
    const message =
      (error.response && error.response.data.message) || error.message;
    dispatch({ type: GET_ARTICLE_FAILURE, payload: message });
  }
};
