import * as ActionTypes from './constants';

import {
  getColumns,
  getColumnsReceived,
  getColumnsError,
} from '../actions/columns';

describe('Columns Actions', () => {
  describe('getColumns', () => {
    const fixture = 'projectId';
    it('should return the correct type', () => {
      const expectedResult = {
        type: ActionTypes.GET_COLUMNS,
        projectId: fixture,
      };

      expect(getColumns(fixture)).toEqual(expectedResult);
    });
  });

  describe('getColumnsReceived', () => {
    it('should return the correct type', () => {
      const fixture = {
        columns: 'col'
      };
      const expectedResult = {
        type: ActionTypes.GET_COLUMNS_RECEIVED,
        data: fixture,
      };

      expect(getColumnsReceived(fixture)).toEqual(expectedResult);
    });
  });

  describe('getColumnsError', () => {
    it('should return the correct type', () => {
      const fixture = {
        error: 'err'
      };
      const expectedResult = {
        type: ActionTypes.GET_COLUMNS_ERROR,
        error: fixture,
      };

      expect(getColumnsError(fixture)).toEqual(expectedResult);
    });
  });
});