import * as ActionTypes from './constants';

export const setAuthtoken = (authtoken) => ({
  type: ActionTypes.SET_AUTHTOKEN,
  authtoken,
});