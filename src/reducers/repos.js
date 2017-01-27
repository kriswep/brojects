import * as ActionTypes from '../actions/constants';

export const initialReposState = {
  loading: false,
  error: false,
  data: {},
};

const reposReducer = (state = initialReposState, action) => {
  switch (action.type) {
    case ActionTypes.GET_REPOS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ActionTypes.GET_REPOS_RECEIVED:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data,
      };
    case ActionTypes.GET_REPOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reposReducer;
