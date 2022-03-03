import {
  CREATE_ARTICLE_FAILURE,
  CREATE_ARTICLE_REQUEST,
  ARTICLE_RESET,
  CREATE_ARTICLE_SUCCESS,
} from './action';
import {
  IArticle,
  GET_ARTICLE_REQUEST,
  GET_ARTICLE_SUCCESS,
  GET_ARTICLE_FAILURE,
} from './action';

export interface ArticleState {
  articles: IArticle[] | [];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
}

const initialState = {
  articles: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

const articleReducer = (state: ArticleState = initialState, action: any) => {
  switch (action.type) {
    case CREATE_ARTICLE_REQUEST:
      return { ...state, isLoading: true };

    case CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        articles: [action.payload, ...state.articles],
      };

    case CREATE_ARTICLE_FAILURE:
      return {
        ...state,
        isError: true,
        isSuccess: false,
        isLoading: false,
        message: action.payload,
      };
    case GET_ARTICLE_REQUEST:
      return { ...state, isLoading: true };
    case GET_ARTICLE_SUCCESS:
      if (action.payload.length === 0) {
        return {
          ...state,
          message: 'No more articles',
        };
      }
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        // articles: [...new Set([...state.articles, ...action.payload])],
        articles: [...state.articles, ...action.payload],
      };
    case GET_ARTICLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload,
      };
    case ARTICLE_RESET:
      return initialState;

    default:
      return initialState;
  }
};

export default articleReducer;
