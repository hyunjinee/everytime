import axios from 'axios';

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

export const setUser = (user) => ({ type: SETUSER, user });

export interface IUser {
  userId: string;
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

export const fetchUsers = () => async (dispatch) => {
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
