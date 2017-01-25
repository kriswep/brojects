import * as ActionTypes from './actions/constants';

const api = request => store => next => action => {

  // Pass through by default
  next(action);
  switch (action.type) {
    case ActionTypes.GET_COLUMN_DATA:
      // This is an api request wo want to handle here
      const { auth } = store.getState();

      const options = {
        headers: new Headers({
          Accept: 'application/vnd.github.inertia-preview+json',
          Authorization: `token ${auth.authtoken}`,
        }),
      };
      request('https://api.github.com/projects/columns/575404', options)
        .then((json) => next({
          type: ActionTypes.GET_COLUMN_DATA_RECEIVED,
          data: json,
        }))
        .catch((err) => next({
          type: ActionTypes.GET_COLUMN_DATA_ERROR,
          err
        }));
      break;
    default:
      // nothing todo
      break;
  }

};

export default api;
