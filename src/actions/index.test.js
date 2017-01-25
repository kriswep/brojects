import * as ActionTypes from './constants';

import {
  setAuthtoken,
  getColumnData,
  getColumnDataReceived,
  getColumnDataError,
} from '../actions';

describe('App Actions', () => {
  describe('setAuthtoken', () => {
    it('should return the correct type', () => {
      const fixture = 'authtoken'
      const expectedResult = {
        type: ActionTypes.SET_AUTHTOKEN,
        authtoken: fixture,
      };

      expect(setAuthtoken(fixture)).toEqual(expectedResult);
    });
  });

  describe('getColumnData', () => {
    it('should return the correct type', () => {
      const fixture = 'columnId';
      const expectedResult = {
        type: ActionTypes.GET_COLUMN_DATA,
        columnId: fixture,
      };

      expect(getColumnData(fixture)).toEqual(expectedResult);
    });
  });

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