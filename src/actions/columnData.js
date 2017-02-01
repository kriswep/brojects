import * as ActionTypes from './constants';

export const getColumnData = (columnId) => ({
  type: ActionTypes.GET_COLUMN_DATA,
  columnId,
});
export const getColumnDataReceived = (data) => ({
  type: ActionTypes.GET_COLUMN_DATA_RECEIVED,
  data,
});
export const getColumnDataError = (error) => ({
  type: ActionTypes.GET_COLUMN_DATA_ERROR,
  error,
});
