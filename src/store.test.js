/**
 * Test store
 */

import configureStore from './store';

describe('configureStore', () => {
  describe('the store', () => {
    it('should configure a redux store', () => {
      const store = configureStore(undefined);
      expect(typeof store).toBe('object');
    });

    it('should configure store with proper inital state', () => {
      const store = configureStore(undefined);
      expect(store.getState()).toMatchSnapshot();
    });

    it('should configure store with given initial state', () => {
      const store = configureStore({
        auth: {
          authToken: 'initialToken',
        }
      });
      expect(store.getState()).toMatchSnapshot();
    });
  });
});