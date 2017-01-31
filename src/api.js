import * as ActionTypes from './actions/constants';

const api = request => store => next => action => {

  // Pass through by default
  next(action);
  switch (action.type) {
    case ActionTypes.GET_COLUMN_DATA:
      {
        // This is an api request wo want to handle here
        const { auth } = store.getState();

        const options = {
          headers: new Headers({
            Accept: 'application/vnd.github.inertia-preview+json',
            Authorization: `token ${auth.authtoken}`,
          }),
        };
        // return promise for easier testing
        return request('https://api.github.com/projects/columns/575404', options)
          .then((json) => next({
            type: ActionTypes.GET_COLUMN_DATA_RECEIVED,
            data: json,
          }))
          .catch((error) => next({
            type: ActionTypes.GET_COLUMN_DATA_ERROR,
            error: error.response.statusText,
          }));
      }
    case ActionTypes.GET_REPOS:
      {
        // This is an api request wo want to handle here
        const { auth } = store.getState();

        const options = {
          headers: new Headers({
            Authorization: `token ${auth.authtoken}`,
          }),
        };
        // return promise for easier testing
        return request('https://api.github.com/user/repos', options)
          .then((json) => next({
            type: ActionTypes.GET_REPOS_RECEIVED,
            data: json,
          }))
          .catch((error) => next({
            type: ActionTypes.GET_REPOS_ERROR,
            error: error.response.statusText,
          }));
      }
    case ActionTypes.GET_PROJECTS:
      {
        // This is an api request wo want to handle here
        const { auth } = store.getState();
        const repoFullName = action.repoFullName;

        const options = {
          headers: new Headers({
            Accept: 'application/vnd.github.inertia-preview+json',
            Authorization: `token ${auth.authtoken}`,
          }),
        };
        // return promise for easier testing
        return request(`https://api.github.com/repos/${repoFullName}/projects`, options)
          .then((json) => next({
            type: ActionTypes.GET_PROJECTS_RECEIVED,
            data: json,
          }))
          .catch((error) => next({
            type: ActionTypes.GET_PROJECTS_ERROR,
            error: error.response.statusText,
          }));
      }
    default:
      // return promise for easier testing
      return Promise.resolve('done doing nothing');
  }

};

export default api;
