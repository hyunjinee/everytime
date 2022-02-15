import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import authReducer, { AuthState } from './auth/reducer';

export interface Store {
  auth: AuthState;
  // user: UserState;
}

const rootReducer = combineReducers({ auth: authReducer });

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
