import * as ActionTypes from './constants';

import {
  getColumnData,
  getColumnDataReceived,
  getColumnDataError,
} from '../actions/columns';

describe('Columns Actions', () => {
  describe('getColumnDataReceived', () => {
    it('should return the correct type', () => {
      const fixture = {
        column: 'col'
      };
      const expectedResult = {
        type: ActionTypes.GET_COLUMN_DATA_RECEIVED,
        data: fixture,
      };

      expect(getColumnDataReceived(fixture)).toEqual(expectedResult);
    });
  });

  describe('getColumnDataError', () => {
    it('should return the correct type', () => {
      const fixture = {
        error: 'err'
      };
      const expectedResult = {
        type: ActionTypes.GET_COLUMN_DATA_ERROR,
        error: fixture,
      };

      expect(getColumnDataError(fixture)).toEqual(expectedResult);
    });
  });
});