import { combineReducers } from 'redux'

import * as ActionTypes from '../actions/constants';
import columnDataReducer from './columnData';

export const initialAuthState = {
  authtoken: false,
};

export const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case ActionTypes.SET_AUTHTOKEN:
      return {
        ...state,
        authtoken: action.authtoken,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: authReducer,
  column: columnDataReducer,
});

export default rootReducer;
