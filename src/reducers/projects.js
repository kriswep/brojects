import * as ActionTypes from '../actions/constants';

export const initialReposState = {
  loading: false,
  error: false,
  data: {},
};

const projectsReducer = (state = initialReposState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PROJECTS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ActionTypes.GET_PROJECTS_RECEIVED:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data,
      };
    case ActionTypes.GET_PROJECTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default projectsReducer;
