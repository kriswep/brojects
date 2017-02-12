import { combineReducers } from 'redux'

import authReducer from './auth';
import reposReducer from './repos';
import projectsReducer from './projects';
import columnsReducer from './columns';
import columnDataReducer from './columnData';
import cardsReducer from './cards';

const rootReducer = combineReducers({
  auth: authReducer,
  repos: reposReducer,
  projects: projectsReducer,
  columns: columnsReducer,
  columnData: columnDataReducer,
  cards: cardsReducer,
});

export default rootReducer;
