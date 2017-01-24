import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './containers/App';
import './index.css';

let store = configureStore();

export default ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') || document.createElement('div')
);
