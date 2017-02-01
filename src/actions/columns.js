import * as ActionTypes from './constants';

export const getColumns = (projectId) => ({
  type: ActionTypes.GET_COLUMNS,
  projectId,
});
export const getColumnsReceived = (data) => ({
  type: ActionTypes.GET_COLUMNS_RECEIVED,
  data,
});
export const getColumnsError = (error) => ({
  type: ActionTypes.GET_COLUMNS_ERROR,
  error,
});
