import * as ActionTypes from './actions/constants';
import api from './api';

const createFakeStore = fakeData => ({
  getState() {
    return fakeData;
  }
});

const dispatchWithStoreOf = (request, storeData, action) => {
  let dispatched = null;
  const dispatch = api(request)(createFakeStore(storeData))
    (actionAttempt => dispatched = actionAttempt);
  dispatch(action);
  return dispatched;
}


describe('Api middleware', () => {

  it('should pass other actions', () => {
    const action = {
      type: ActionTypes.SET_AUTHTOKEN,
    }

    expect(
      dispatchWithStoreOf({}, {}, action)
    ).toEqual(action)
  })


  it('should format the response correctly on success', () => {
    const action = {
      type: ActionTypes.GET_COLUMN_DATA,
    }
    const store = {
      auth: {
        authtoken: 'secret',
      }
    };
    const request = jest.fn();
    request.mockReturnValue(Promise.resolve({ col: "something" }));
    const options = {
      headers: new Headers({
        Accept: 'application/vnd.github.inertia-preview+json',
        Authorization: 'token secret',
      }),
    };


    // console.log(dispatchWithStoreOf(request, store, action));
    dispatchWithStoreOf(request, store, action);

    expect(request.mock.calls[0][0].indexOf('api.github.com') > 0).toBe(true);


  });

  it('should handle error', () => {
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
        // console.log('in promise');
        // TODO somehow check proper response from api
        reject(new Error('whoops'));
      })
    );
  const options = {
    headers: new Headers({
      Accept: 'application/vnd.github.inertia-preview+json',
      Authorization: 'token secret',
    }),
  };


  // console.log(dispatchWithStoreOf(request, store, action));
  dispatchWithStoreOf(request, store, action);

  expect(request.mock.calls[0][0].indexOf('api.github.com') > 0).toBe(true);


});

})