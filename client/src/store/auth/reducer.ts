import { IUser } from './action';
import {
  REGISTER_RESET,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
} from './action';

// Get user from localStorage
// const user = JSON.parse(localStorage.getItem('user'));

export interface AuthState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string;
  user: IUser | null;
}

const initailState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

const authReducer = (state: AuthState = initailState, action: any) => {
  switch (action.type) {
    case REGISTER_RESET:
      return initailState;
    case REGISTER_REQUEST:
      return { ...state, isLoading: true };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        user: action.payload,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload,
      };
    case REGISTER_RESET:
      return initailState;
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isError: false,
        isLoading: false,
        isSuccess: true,
        user: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
        isSuccess: false,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
