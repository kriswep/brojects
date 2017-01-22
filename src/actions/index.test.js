import * as ActionTypes from './constants';

import { setAuthtoken } from '../actions';

describe('App Actions', () => {
  describe('loadRepos', () => {
    it('should return the correct type', () => {
      const fixture = 'authtoken'
      const expectedResult = {
        type: ActionTypes.SET_AUTHTOKEN,
        authtoken: fixture,
      };

      expect(setAuthtoken(fixture)).toEqual(expectedResult);
    });
  });
});