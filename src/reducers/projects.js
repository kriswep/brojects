import * as ActionTypes from '../actions/constants';

/** the initial state regarding projects  */
export const initialProjectsState = {
  loading: false,
  error: false,
  data: [],
  currentProject: false,
};

/**
 * handles projects state
 * 
 * @param {object} state    the current state object
 * @param {object} action   the action, this reducer handles action of type 
 * ActionTypes.GET_PROJECTS, ActionTypes.GET_PROJECTS_RECEIVED, ActionTypes.GET_PROJECTS_ERROR
 * ActionTypes.SET_CURRENT_PROJECT
 * 
 * @returns {object}        the new state
 */
const projectsReducer = (state = initialProjectsState, action) => {
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
    case ActionTypes.SET_CURRENT_PROJECT:
      const currentProject = state.data.reduce((prev, curr) => {
        return curr.id === action.projectId ? curr : prev
      }, false);
      const error = currentProject ? false: 'invalid project';
      return {
        ...state,
        error,
        currentProject,
      };
    default:
      return state;
  }
};

export default projectsReducer;
