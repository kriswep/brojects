import { createStore, applyMiddleware, compose } from 'redux';

import request from './utils/request';
import rootReducer from './reducers';
import api from './api';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(
    applyMiddleware(api(request))
  ),
)

export default configureStore;
