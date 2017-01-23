import * as ActionTypes from '../actions/constants';

import { initialAuthState, authReducer } from '../reducers';

const authToken = 'secretToken';

describe('App Reducers', () => {
  describe('authReducers', () => {
    it('should return the initial state', () => {
      expect(authReducer(undefined, {})).toEqual(initialAuthState);
    });

    it('should handle the SET_AUTHTOKEN action', () => {
      const expectedState = {
        authToken,
      }
      expect(
        authReducer(undefined, {
          type: ActionTypes.SET_AUTHTOKEN,
          authToken,
        })
      ).toEqual(expectedState);

    });

    it('should handle the SET_AUTHTOKEN action with prev state', () => {
      const prevState = {
        authToken: 'prevToken',
      };
      const expectedState = {
        authToken,
      }
      expect(
        authReducer(prevState, {
          type: ActionTypes.SET_AUTHTOKEN,
          authToken,
        })
      ).toEqual(expectedState);

    });
  });
});
