import * as ActionTypes from './actions/constants';
import api from './api';
debugger;
const createFakeStore = fakeData => ({
  getState() {
    return fakeData;
  }
});

const dispatchWithStoreOf = (request, storeData, action, thenAction) => {
  let dispatched = null;
  const dispatch = api(request)(createFakeStore(storeData))
    (actionAttempt => dispatched = actionAttempt);
  dispatch(action)
    .then((value) => {
      thenAction(value);
    })
    .catch((value) => {
      thenAction(value);
    });
  return dispatched;
}


describe('Api middleware', () => {

  it('should pass other actions', (done) => {
    const action = {
      type: ActionTypes.SET_AUTHTOKEN,
    }

    expect(
      dispatchWithStoreOf({}, {}, action, () => { done() })
    ).toEqual(action)
  });

  describe('GET_COLUMNS', () => {
    it('should format the response correctly on success', (done) => {
      const action = {
        type: ActionTypes.GET_COLUMN_DATA,
      }
      const store = {
        auth: {
          authtoken: 'secret',
        }
      };
      const request = jest.fn();
      request.mockReturnValue(Promise.resolve({ col: 'something' }));
      // const options = {
      //   headers: new Headers({
      //     Accept: 'application/vnd.github.inertia-preview+json',
      //     Authorization: 'token secret',
      //   }),
      // };
      const expectedReturn = {
        type: ActionTypes.GET_COLUMN_DATA_RECEIVED,
        data: { col: 'something' },
      };


      dispatchWithStoreOf(request, store, action, (returnValue) => {
        expect(returnValue).toEqual(expectedReturn);
        done();
      });

      expect(request.mock.calls[0][0].indexOf('api.github.com') > 0).toBe(true);


    });

    it('should handle error', (done) => {
      const action = {
        type: ActionTypes.GET_COLUMN_DATA,
      }
      const store = {
        auth: {
          authtoken: 'secret',
        }
      };
      const request = jest.fn();
      request.mockReturnValue(
        new Promise((resolve, reject) => {
          const err = {
            response: {
              statusText: 'whoops',
            }
          }
          reject(err);
        })
      );
      const expectedReturn = {
        type: ActionTypes.GET_COLUMN_DATA_ERROR,
        error: 'whoops',
      };

      dispatchWithStoreOf(request, store, action, (returnValue) => {
        expect(returnValue).toEqual(expectedReturn);
        expect(returnValue.error).toBeDefined();
        done();
      });

      expect(request.mock.calls[0][0].indexOf('api.github.com') > 0).toBe(true);

    });

  });


  describe('GET_REPOS', () => {
    it('should format the response correctly on success', (done) => {
      const action = {
        type: ActionTypes.GET_REPOS,
      }
      const store = {
        auth: {
          authtoken: 'secret',
        }
      };
      const request = jest.fn();
      request.mockReturnValue(Promise.resolve({ col: 'something' }));
      const expectedReturn = {
        type: ActionTypes.GET_REPOS_RECEIVED,
        data: { col: 'something' },
      };


      dispatchWithStoreOf(request, store, action, (returnValue) => {
        expect(returnValue).toEqual(expectedReturn);
        done();
      });

      expect(request.mock.calls[0][0].indexOf('api.github.com') > 0).toBe(true);


    });

    it('should handle error', (done) => {
      const action = {
        type: ActionTypes.GET_REPOS,
      }
      const store = {
        auth: {
          authtoken: 'secret',
        }
      };
      const request = jest.fn();
      request.mockReturnValue(
        new Promise((resolve, reject) => {
          const err = {
            response: {
              statusText: 'whoops',
            }
          }
          reject(err);
        })
      );
      const expectedReturn = {
        type: ActionTypes.GET_REPOS_ERROR,
        error: 'whoops',
      };

      dispatchWithStoreOf(request, store, action, (returnValue) => {
        expect(returnValue).toEqual(expectedReturn);
        expect(returnValue.error).toBeDefined();
        done();
      });

      expect(request.mock.calls[0][0].indexOf('api.github.com') > 0).toBe(true);

    });

  });



});
