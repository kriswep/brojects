import * as ActionTypes from '../actions/constants';

export const initialReposState = {
  loading: false,
  error: false,
  data: [],
  currentRepo: false,
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
    case ActionTypes.SET_CURRENT_REPO:
      return {
        ...state,
        currentRepo: action.repoId,
      };
    default:
      return state;
  }
};

export default reposReducer;
