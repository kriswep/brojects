import * as ActionTypes from './constants';

export const getRepos = () => ({
  type: ActionTypes.GET_REPOS,
});
export const getReposReceived = (data) => ({
  type: ActionTypes.GET_REPOS_RECEIVED,
  data,
});
export const getReposError = (error) => ({
  type: ActionTypes.GET_REPOS_ERROR,
  error,
});
export const setCurrentRepo = (repoId) => ({
  type: ActionTypes.SET_CURRENT_REPO,
  repoId: Number(repoId),
});
