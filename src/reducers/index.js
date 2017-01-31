import { combineReducers } from 'redux'

import authReducer from './auth';
import reposReducer from './repos';
import projectsReducer from './projects';
import columnDataReducer from './columnData';

const rootReducer = combineReducers({
  auth: authReducer,
  repos: reposReducer,
  projects: projectsReducer,
  column: columnDataReducer,
});

export default rootReducer;
