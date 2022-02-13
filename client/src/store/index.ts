import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import userReducer from './user/reducer';

export interface Store {
  // user: UserState;
}

const rootReducer = combineReducers({ user: userReducer });

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
