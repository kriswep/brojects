import { combineReducers } from 'redux'

import authReducer from './auth';
import reposReducer from './repos';
import columnDataReducer from './columnData';

const rootReducer = combineReducers({
  auth: authReducer,
  repos: reposReducer,
  column: columnDataReducer,
});

export default rootReducer;
