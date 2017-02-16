import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/css/material.indigo-pink.min.css';
import 'react-mdl/extra/material.js';

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
