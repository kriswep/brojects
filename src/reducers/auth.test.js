import * as ActionTypes from '../actions/constants';

import authReducer, { initialAuthState } from '../reducers/auth';

const authtoken = 'secretToken';

describe('Auth Reducers', () => {
  describe('authReducers', () => {
    it('should return the initial state', () => {
      expect(authReducer(undefined, {})).toEqual(initialAuthState);
    });

    it('should handle the SET_AUTHTOKEN action', () => {
      const expectedState = {
        authtoken,
      }
      expect(
        authReducer(undefined, {
          type: ActionTypes.SET_AUTHTOKEN,
          authtoken,
        })
      ).toEqual(expectedState);

    });

    it('should handle the SET_AUTHTOKEN action with prev state', () => {
      const prevState = {
        authtoken: 'prevToken',
      };
      const expectedState = {
        authtoken,
      }
      expect(
        authReducer(prevState, {
          type: ActionTypes.SET_AUTHTOKEN,
          authtoken,
        })
      ).toEqual(expectedState);

    });
  });
});
