import authService from './service';

export const REGISTER_REQUEST = 'auth/REGISTER_REQUEST' as const;
export const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS' as const;
export const REGISTER_FAILURE = 'auth/REGISTER_FAILURE' as const;
export const REGISTER_RESET = 'auth/REGISTER_RESET' as const;
export const LOGIN_REQUEST = 'auth/LOGIN_REQUEST' as const;
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS' as const;
export const LOGIN_FAILURE = 'auth/LOGIN_FAILURE' as const;
export const LOGOUT = 'auth/LOGOUT' as const;

export interface IUser {
  id: string;
  password: string;
  school: string;
  entranceYear: string;
  token?: string;
}

export const reset = () => ({ type: REGISTER_RESET });

export const register = (userData: IUser) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const user = await authService.register(userData);
    dispatch({ type: REGISTER_SUCCESS, payload: user });
  } catch (error) {
    const message =
      (error.response && error.response.data.message) || error.message;
    // const message =
    //   (error.response && error.response.data && error.response.data.message) ||
    //   error.message ||
    //   error.toString();
    dispatch({ type: REGISTER_FAILURE, payload: message });
  }
};

export const login = (userData: Partial<IUser>) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const user = await authService.login(userData);
    dispatch({ type: LOGIN_SUCCESS, payload: user });
  } catch (error) {
    const message =
      (error.response && error.response.data.message) || error.message;
    // const message =
    //   (error.response && error.response.data && error.response.data.message) ||
    //   error.message ||
    //   error.toString();
    dispatch({ type: REGISTER_FAILURE, payload: message });
  }
};
