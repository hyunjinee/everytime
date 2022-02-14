import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from './action';

const initailState = {
  user: {},
  error: '',
  loading: false,
};

// const user = (state = )
const userReducer = (state = initailState, action: any) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: '',
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    case REGISTER_REQUEST:
      return { ...state, loading: true };
    case REGISTER_SUCCESS:
      return { loading: false, user: {}, error: '' };
    case REGISTER_FAILURE:
      return { loading: false, user: {}, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
