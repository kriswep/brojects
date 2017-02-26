import * as ActionTypes from './constants';

export const getProjects = (repoFullName) => ({
  type: ActionTypes.GET_PROJECTS,
  repoFullName,
});
export const getProjectsReceived = (data) => ({
  type: ActionTypes.GET_PROJECTS_RECEIVED,
  data,
});
export const getProjectsError = (error) => ({
  type: ActionTypes.GET_PROJECTS_ERROR,
  error,
});
export const setCurrentProject = (projectId) => ({
  type: ActionTypes.SET_CURRENT_PROJECT,
  projectId: Number(projectId),
});
