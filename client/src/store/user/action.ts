import axios from 'axios';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

export const SETUSER = 'user/SETUSER' as const;
export const LOADUSER = 'user/LOADUSER' as const;
export const LOADUSER_SUCCESS = 'user/LOADUSER_SUCCESS' as const;
export const LOADUSER_FAILUSER = 'user/LOADUSER_FAILRE' as const;
export const GET_USER_PROFILE = 'user/GET_USER_PROFILE' as const;
export const GET_USER_PROFILE_SUCCESS =
  'user/GET_USER_PROFILE_SUCCESS' as const;
export const GET_USER_PROFILE_ERROR = 'user/GET_USER_PROFILE_ERROR' as const;
export const FETCH_USERS_REQUEST = 'user/FETCH_USERS_REQUEST' as const;
export const FETCH_USERS_SUCCESS = 'user/FETCH_USERS_SUCCESS' as const;
export const FETCH_USERS_FAILURE = 'user/FETCH_USERS_FAILURE' as const;
export const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS' as const;
export const LOGIN_FAILURE = 'user/LOGIN_FAILURE' as const;
export const LOGOUT_SUCCESS = 'user/LOGOUT_SUCCESS' as const;
export const LOGOUT_FAILURE = 'user/LOGOUT_FAILURE' as const;
export const REGISTER_REQUEST = 'user/REGISTER_REQUEST' as const;
export const REGISTER_SUCCESS = 'user/REGISTER_SUCCESS' as const;
export const REGISTER_FAILURE = 'user/REGISTER_FAILURE' as const;

export const setUser = (user) => ({ type: SETUSER, user });

export interface IUser {
  id: string;
  password: string;
  school: string;
  entranceYear: string;
}

export interface UserState {
  user: IUser;
  loading: boolean;
  error: any;
}

export interface UserAction {
  type: string;
  user: IUser;
  payload: any;
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => async (dispatch: any) => {
  console.log('실행');
  dispatch(fetchUsersRequest);
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      const users = response.data;
      dispatch(fetchUsersSuccess(users));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchUsersFailure(errorMsg));
    });
};

export const getUser = () => async () => {
  const response = await axios.get('');
};

export const fetchPosts = () => async (dispatch, getState) => {
  dispatch({ type: 'FETCH_POSTS_REQUEST' });
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_POSTS_FAILURE', error: error });
  }
};

export const register = (user) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const response = await axios.post(
      'http://localhost:3001/api/user/register',
      user
    );
    console.log(response.data);
    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, error: error });
  }
};
